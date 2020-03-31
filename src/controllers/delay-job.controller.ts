import { Request, Response, NextFunction } from 'express'
import { delayJobBullMiddleware, delayJobKueMiddleware } from '../middlewares'

export default class DelayJobController {
  public get(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const hello = 'Hello'

      delayJobBullMiddleware.createQueue('hello', {
        payload: 'hello world'
      })

      delayJobKueMiddleware.createQueue('hello', {
        payload: 'hello world'
      })

      res.status(200).json({
        status: 200,
        messages: 'Success get hello',
        result: hello
      })
    } catch (error) {
      next(error)
    }
  }

  public getJob(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      delayJobBullMiddleware.listJob('hello')

      delayJobKueMiddleware.listJob('hello')

      res.status(200).json({
        status: 200,
        messages: 'Success get hello',
        result: 'sip'
      })
    } catch (error) {
      next(error)
    }
  }
}