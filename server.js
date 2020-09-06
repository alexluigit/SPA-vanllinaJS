import express from 'express'
import path from 'path'

const app = express()

app.use("/static", express.static(path.resolve("frontend", "static")))

app.get("/*", (_, res) => {
  res.sendFile(path.resolve("frontend", "index.html"))
})

app.listen(process.env.port || 9900, () => console.log("Server running..."))
