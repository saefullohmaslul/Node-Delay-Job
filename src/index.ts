import { Server } from './app/application'
import { consumerKueDelayJob, consumerBullDelayJob } from './services/consumer.service'

const server = new Server()
consumerKueDelayJob()
consumerBullDelayJob()

server.listen((port: number) => {
  console.log(`Server is listening on port: ${port}`)
})