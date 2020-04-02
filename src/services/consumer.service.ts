import { delayJobBullMiddleware } from '../middlewares'

export const consumerBullDelayJob = () => {
  delayJobBullMiddleware.workerQueue('hello', (data: any, done) => {
    console.log('bull', data)
    done()
  })
}