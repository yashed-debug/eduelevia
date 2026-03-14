import sessions from "./routes/sessions.js"
import "dotenv/config"
import express from "express"
import cors from "cors"
import aiLessons from "./routes/lessons.js"

const app = express()

app.use(cors())
app.use(express.json())

/* Basic test route */

app.get("/", (req,res)=>{
 res.send("EduElevia backend running")
})

/* AI Lesson Generator route */

app.use("/api/ai", aiLessons)

/* Start server */

const PORT = 5000

app.listen(PORT, ()=>{
 console.log(`Server running on port ${PORT}`)
})
app.use("/api?sessions", sessions)  