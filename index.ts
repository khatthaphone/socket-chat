import * as express from "express"
import { createServer } from "http"
import * as socket from 'socket.io'

const app = express()
const http = createServer(app)
const io = socket(http)

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
  console.log('a user connected')
})

createServer(app).listen(3000, () => {
  console.log("listen on *:3000")
})
