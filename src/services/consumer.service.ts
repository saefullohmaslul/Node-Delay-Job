import { delayJob } from '../middlewares'

export const consumerDelayJob = () => {
  delayJob.workerQueue('hello', (data: any) => {
    console.log(data)
  })
}