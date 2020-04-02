import { Server } from './app/application'
import { consumerBullDelayJob } from './services/consumer.service'

const server = new Server()

consumerBullDelayJob()

server.listen((port: number) => {
  console.log(`Server is listening on port: ${port}`)
})