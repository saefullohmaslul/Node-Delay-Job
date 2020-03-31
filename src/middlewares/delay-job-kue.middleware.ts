import '../app/environment'
import kue, { Job, DoneCallback } from 'kue'

const queue = kue.createQueue({
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_HOST as string)
  }
})

export default class DelayJobKueMiddleware {
  public createQueue(key: string, data: any) {
    queue.create(key, data)
      .attempts(3)
      .delay(10000) // 10 second
      .backoff({ delay: 60 * 1000 })
      .removeOnComplete(true)
      .save()
  }

  public workerQueue(key: string, consumer: (data: any, done: DoneCallback) => void) {
    queue.process(key, (job: Job, done: DoneCallback) => {
      consumer(job.data, done)
    })
  }

  public listJob(key?: string) {
    interface JobList extends Job {
      _state: string
    }

    Job.range(0, -1, 'asc', (err: Error, jobs: JobList[]) => {
      if (!err) {
        jobs.map(job => {
          if (job.type === key) {
            console.log(`Job ${job.id}, data: ${job.data}, status: ${job._state}`)
          } else {
            console.log(`Job ${job.id}, data: ${job.data}, status: ${job._state}`)
          }
        })
      }
    })
  }
}