import DelayJobBullMiddleware from './delay-job-bull.middleware'
import DelayJobKueMiddleware from './delay-job-kue.middleware'

export const delayJobBullMiddleware = new DelayJobBullMiddleware()
export const delayJobKueMiddleware = new DelayJobKueMiddleware()