import { delayJobBullMiddleware } from '../middlewares'

export const consumerDelayJob = () => {
  delayJobBullMiddleware.workerQueue('hello', (data: any) => {
    console.log(data)
  })
}