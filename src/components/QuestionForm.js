import React, { useState } from "react"
import { Question } from "./Question"
import Button from "@mui/material/Button"
import Icon from "@mui/material/Icon"
import { green } from "@mui/material/colors"
import Alert from "@mui/material/Alert"
import Link from "@mui/material/Link"
import axios from "axios"

function QuestionForm() {
  const [questions, setQuestions] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  const handleAddQuestion = () => {
    const newQuestion = {
      title: "",
      type: "multiple",
      options: [],
      trueAnswer: []
    }
    setQuestions([...questions, newQuestion])
  }

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target
    const updatedQuestions = [...questions]
    updatedQuestions[index][name] = value
    setQuestions(updatedQuestions)
    console.log(updatedQuestions)
  }
  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions]
    updatedQuestions.splice(index, 1)
    setQuestions(updatedQuestions)
    console.log(updatedQuestions)
  }

  const handleAddOption = (index) => {
    const updatedQuestions = [...questions]
    updatedQuestions[index].options.push("")
    setQuestions(updatedQuestions)
  }

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const { value } = e.target
    const updatedQuestions = [...questions]
    updatedQuestions[questionIndex].options[optionIndex] = value
    setQuestions(updatedQuestions)
  }

  const handleCheckboxChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions]
    const updatedQuestion = updatedQuestions[questionIndex]

    if (updatedQuestion.type === "multiple") {
      // If question type is "multiple", add or remove the checkbox value from the list of true answers
      const index = updatedQuestion.trueAnswer.indexOf(optionIndex)
      console.log(index)
      if (index > -1) {
        updatedQuestion.trueAnswer.splice(index, 1)
      } else {
        updatedQuestion.trueAnswer.push(optionIndex)
      }
    } else {
      // If question type is "single", set the checkbox value as the true answer
      updatedQuestion.trueAnswer = [optionIndex]
    }

    updatedQuestions[questionIndex] = updatedQuestion
    setQuestions(updatedQuestions)
  }

  async function sendData() {
    localStorage.setItem("Form", JSON.stringify(questions))
    console.log(questions)
    let formData = new FormData()
    formData.append("questions", questions)

    try {
      const apiUrl = "http://localhost:8000/api/forms"
      const response = await axios.post(apiUrl, formData)
      console.log(response.data)
      setShowAlert(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {showAlert && (
        <Alert
          className="fixed left-3/4"
          severity="success"
          onClose={() => setShowAlert(false)}
        >
          Data saved successfully.
          <Link href="/GetForm" underline="hover">
            See your survey
          </Link>
        </Alert>
      )}
      <Button variant="contained" onClick={handleAddQuestion}>
        Add Question <Icon sx={{ color: green[500] }}></Icon>
      </Button>
      {questions.map((question, index) => (
        <Question
          key={index}
          handleCheckboxChange={handleCheckboxChange}
          handleOptionChange={handleOptionChange}
          handleQuestionChange={handleQuestionChange}
          handleAddOption={handleAddOption}
          handleDeleteQuestion={handleDeleteQuestion}
          question={question}
          index={index}
        />
      ))}

      <Button
        className="relative left-4"
        variant="contained"
        onClick={sendData}
      >
        Save
      </Button>
    </div>
  )
}

export default QuestionForm
