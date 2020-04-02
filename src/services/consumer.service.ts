import { delayJob } from '../utils'

export const consumerDelayJob = () => {
  delayJob.workerQueue('hello', (data: any, done) => {
    console.log(data)
    done()
  })
}