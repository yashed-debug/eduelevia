import express from "express"
import supabase from "../services/supabaseClient.js"

const router = express.Router()

router.post("/save", async (req,res)=>{

 const { student_id, lesson_id, score, accuracy } = req.body

 const { data, error } = await supabase
  .from("sessions")
  .insert([{ student_id, lesson_id, score, accuracy }])

 if(error){
  return res.status(500).json(error)
 }

 res.json(data)

})

export default router