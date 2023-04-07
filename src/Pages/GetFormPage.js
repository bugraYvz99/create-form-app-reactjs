import React, { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import axios from "axios"

function GetFormPage() {
  const [form, setForm] = useState([])

  useEffect(() => {
    const storedForm = JSON.parse(localStorage.getItem("Form"))
    if (storedForm) {
      setForm(storedForm)
    }
  }, [])

  const handleOptionSelect = (event, index, optionIndex) => {
    const updatedForm = [...form]
    updatedForm[index].options[optionIndex].selected = event.target.checked
    setForm(updatedForm)
  }
  async function fetchForms() {
    try {
      const apiUrl = "http://localhost:3000/api/forms"
      const response = await axios.get(apiUrl)
      console.log(response.data)
      setForm(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  fetchForms()

  return (
    <div className="grid grid-flow-col grid-cols-2 bg-gradient-to-r from-red-800 from-10% to-blue-500 to-10% text-gray-50 h-[4000px] bg-cover ">
      <div className="flex flex-col items-center container my-4 max-w-[100%]">
        <h1 className=" font-bold text-5xl text-center mb-4">My Form</h1>
        {form.map((question, index) => (
          <div key={index} className="max-w-[50%] min-w-[50%] my-4">
            <div className="flex flex-col"></div>
            <div className="">
              <div className="flex flex-col border-b-4 ">
                <h1 className=" font-mono">
                  {" "}
                  {"SORU" + "  " + (index + 1) + ":"}
                </h1>
                <label className="text-xl font-semibold font-mono">
                  {question.title}
                </label>
                {question.type === "text" ? (
                  <TextField
                    type="text"
                    multiline
                    maxRows={10}
                    className="form-control"
                  />
                ) : (
                  question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="form-check font-mono">
                      <input
                        type="checkbox"
                        name={`question${index}`}
                        value={optionIndex}
                        checked={option.selected}
                        className="form-check-input"
                        id={`question${index}-${optionIndex}`}
                        onChange={(event) =>
                          handleOptionSelect(event, index, optionIndex)
                        }
                      />
                      <label
                        htmlFor={`question${index}-${optionIndex}`}
                        className="relative left-2 form-check-label"
                      >
                        {option}
                      </label>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex bg-cover">
        <p className="relative top-80 mx-auto font-bold text-5xl">
          <span className="animate-pulse text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
            This is your Form
          </span>
        </p>
      </div>
    </div>
  )
}

export default GetFormPage
