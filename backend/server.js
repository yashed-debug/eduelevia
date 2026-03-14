import "dotenv/config"
import express from "express"
import cors from "cors"

import sessions from "./routes/sessions.js"
import aiLessons from "./routes/lessons.js"

const app = express()

app.use(cors())
app.use(express.json())

/* Basic test route */

app.get("/", (req, res) => {
  res.send("EduElevia backend running")
})

/* API Routes */

app.use("/api/ai", aiLessons)
app.use("/api/sessions", sessions)

/* Start server */

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})