import OpenAI from "openai"

const client = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY
})

export async function generateLesson(topic, grade){

 const prompt = `
You are an expert elementary school teacher.

Create a quiz for Grade ${grade} students about "${topic}".

Requirements:
- Exactly 15 questions
- Multiple choice
- 4 options per question
- Exactly ONE correct answer
- Include a helpful hint
- Questions must be simple and age appropriate

Return ONLY valid JSON in this format:

[
 {
  "question": "",
  "options": ["","","",""],
  "answer": "",
  "hint": ""
 }
]
`

 try {

  const completion = await client.chat.completions.create({
   model: "gpt-4.1",
   messages: [
    {
     role: "system",
     content: "You are a professional teacher creating educational quizzes."
    },
    {
     role: "user",
     content: prompt
    }
   ],
   temperature: 0.7
  })

  return completion.choices[0].message.content

 } catch (error) {

  console.error("AI generation error:", error)
  throw error

 }

}