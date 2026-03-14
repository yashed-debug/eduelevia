import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function generateQuiz(topic, grade) {

  try {

    const prompt = `
Create a quiz for students.

Topic: ${topic}
Grade level: ${grade}

Generate 3 multiple choice questions.

Return JSON like this:

{
 "questions":[
  {
   "question":"...",
   "options":["A","B","C","D"],
   "answer":"..."
  }
 ]
}
`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ]
    })

    const text = completion.choices[0].message.content

    return JSON.parse(text)

  } catch (error) {

    console.error("AI error:", error)

    return {
      questions: [
        {
          question: "Example question about " + topic,
          options: ["A", "B", "C", "D"],
          answer: "A"
        }
      ]
    }

  }

}