import { Request, Response, NextFunction } from 'express'
import { delayJob } from '../middlewares'

export default class DelayJobController {
  public get(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const hello = 'Hello'

      delayJob.createQueue('hello', {
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
}