import { Server } from './app/application'
import { consumerDelayJob } from './services/consumer.service'

const server = new Server()
consumerDelayJob()

server.listen((port: number) => {
  console.log(`Server is listening on port: ${port}`)
})