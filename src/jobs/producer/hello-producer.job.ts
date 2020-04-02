import { delayJob } from '../../utils'
import * as job from '../constant'

export const createHelloJob = () => {
  return delayJob.createQueue(job.HELLO_JOB, {
    payload: 'hello world'
  })
}

export const listHelloJob = async () => {
  return delayJob.listJob(job.HELLO_JOB)
}