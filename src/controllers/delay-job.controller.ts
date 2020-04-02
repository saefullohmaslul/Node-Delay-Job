import { Request, Response, NextFunction } from 'express'
import { createHelloJob, listHelloJob } from '../jobs/producer'

export default class DelayJobController {
  public get(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const hello = 'Hello'

      createHelloJob()

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
      const list = await listHelloJob()

      res.status(200).json({
        status: 200,
        messages: 'Success get job list',
        result: list
      })
    } catch (error) {
      next(error)
    }
  }
}