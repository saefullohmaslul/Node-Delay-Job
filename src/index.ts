import { Server } from './app/application'
import { workerHelloJob } from './jobs/worker'

const server = new Server()

workerHelloJob()

server.listen((port: number) => {
  console.log(`Server is listening on port: ${port}`)
})