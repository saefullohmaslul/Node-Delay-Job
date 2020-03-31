import '../app/environment'
import Bull from 'bull'

export default class DelayJobBullMiddleware {
  public createQueue(key: string, data: any) {
    const queue = new Bull(key, {
      redis: {
        host: process.env.REDIS_HOST as string,
        port: parseInt(process.env.REDIS_PORT as string)
      }
    })

    queue.add(data, {
      attempts: 3,
      delay: 10000, // 10 seccond
      removeOnComplete: true,
      removeOnFail: false
    })
  }

  public workerQueue(key: string, consumer: (data: any) => void) {
    const worker = new Bull(key, {
      redis: {
        host: process.env.REDIS_HOST as string,
        port: parseInt(process.env.REDIS_PORT as string)
      }
    })

    worker.process(async (job, done) => {
      return consumer(job.data)
    })
  }
}