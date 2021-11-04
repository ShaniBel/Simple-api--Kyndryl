import express from "express"
import cors from "cors"
import data from "./mockDatabase.js"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/api", async (req, res) => {
  const { firstName, lastName, id } = req.body
  console.log(firstName, lastName, id)

  try {
    //add to database, asynchronous in real database - will give error if somthing goes wrong
    data.push({ firstName, lastName, id })
    res.status(201).json({ message: "added to database" })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.get("/api", async (req, res) => {
  res.json({ data })
})

const PORT = process.env.PORT || 5002

app.listen(PORT, console.log(`server running on port ${PORT}`))
