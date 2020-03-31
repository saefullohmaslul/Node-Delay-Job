import express, { Application, Request, Response } from 'express'
import responseTime from 'response-time'
import { createServer, Server as HTTPServer } from 'http'
import routes from '../routes'

export class Server {
  private httpServer: HTTPServer
  private app: Application

  private readonly PORT = parseInt(process.env.PORT as string) || 3000

  constructor() {
    this.initialize()
  }

  private initialize(): void {
    this.app = express()
    this.httpServer = createServer(this.app)

    this.configureApp()
    this.configureRoutes()
  }

  private configureApp(): void {
    this.app.use(responseTime())
  }

  private configureRoutes(): void {
    this.app.get('/check', (req: Request, res: Response) => {
      res.status(200).json({
        success: true,
        status: 'UP!'
      })
    })

    this.app.use('/api', routes)
  }

  public listen(callback: (port: number) => void): void {
    this.httpServer.listen(this.PORT, () => {
      callback(this.PORT)
    })
  }
}