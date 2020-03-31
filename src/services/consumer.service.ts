import { delayJobBullMiddleware, delayJobKueMiddleware } from '../middlewares'

export const consumerBullDelayJob = () => {
  delayJobBullMiddleware.workerQueue('hello', (data: any, done) => {
    console.log('bull', data)
    done()
  })
}

export const consumerKueDelayJob = () => {
  delayJobKueMiddleware.workerQueue('hello', (data: any, done) => {
    console.log('kue', data)
    done()
  })
}