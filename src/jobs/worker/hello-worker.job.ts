import { delayJob } from '../../utils'
import * as job from '../constant'
import { DoneCallback } from 'bull'

export const workerHelloJob = () => {
  delayJob.workerQueue(job.HELLO_JOB, (data: any, done: DoneCallback) => {
    console.log(data)
    done()
  })
}