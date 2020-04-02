import { Request, Response, NextFunction } from 'express'
import { delayJobBullMiddleware } from '../middlewares'

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

      res.status(200).json({
        status: 200,
        messages: 'Success get hello',
        result: hello
      })
    } catch (error) {
      next(error)
    }
  }

  public async getJob(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const bullList = await delayJobBullMiddleware.listJob('hello')

      res.status(200).json({
        status: 200,
        messages: 'Success get job list',
        result: bullList
      })
    } catch (error) {
      next(error)
    }
  }
}