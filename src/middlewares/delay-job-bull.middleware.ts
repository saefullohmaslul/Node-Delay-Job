import '../app/environment'
import Bull, { Job, DoneCallback, JobId } from 'bull'

export default class DelayJobBullMiddleware {
  private getQueue(key: string) {
    return new Bull(key, {
      redis: {
        host: process.env.REDIS_HOST as string,
        port: parseInt(process.env.REDIS_PORT as string)
      }
    })
  }

  public createQueue(key: string, data: any) {
    const queue = this.getQueue(key)

    queue.add(data, {
      attempts: 3,
      delay: 10000, // 10 seccond
      removeOnComplete: true,
      removeOnFail: false
    })
  }

  public workerQueue(key: string, consumer: (data: any, done: DoneCallback) => void) {
    const worker = this.getQueue(key)

    worker.process(async (job: Job, done: DoneCallback) => {
      return consumer(job.data, done)
    })
  }

  public async listJob(key: string) {
    const job = this.getQueue(key)

    const jobs = await job.getJobs(
      ['waiting', 'active', 'completed', 'failed', 'delayed'],
      0, -1, true
    )

    const jobList: {
      id: JobId,
      data: any,
      status: string
    }[] = []

    await Promise.all(jobs.map(async job => {
      jobList.push({
        id: job.id,
        data: job.data,
        status: await job.getState()
      })
      console.log(`Job ${job.id}, data: ${job.data}, status: ${await job.getState()}`)
    }))

    return jobList
  }
}