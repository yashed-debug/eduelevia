import express from "express"
import { generateQuiz } from "../services/aiLessonGenerator.js"

const router = express.Router()

router.post("/generate", async (req,res)=>{

 const { topic, grade } = req.body

 try{

  const quiz = await generateQuiz(topic, grade)

  res.json(JSON.parse(quiz))

 }catch(err){

  console.error(err)
  res.status(500).json({error:"AI generation failed"})

 }

})

export default router