import React from "react"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"

function Option({
  optionIndex,
  optionValue,
  trueAnswer,
  questionIndex,
  handleOptionChange,
  handleCheckboxChange,
  type
}) {
  const label = ["A", "B", "C", "D", "F", "G", "H", "J", "I"]
  {
    return (
      <div>
        {(type === "multiple" || type === "single") && (
          <div>
            {label[optionIndex] + ")"}
            <TextField
              id="standard-basic"
              label="Option"
              variant="standard"
              type="text"
              value={optionValue}
              placeholder="Enter option"
              onChange={(e) =>
                handleOptionChange(e, questionIndex, optionIndex)
              }
            />
            <Checkbox
              {...label}
              type="checkbox"
              className={`checked:ring-green-400 ring-opacity-50`}
              checked={trueAnswer.includes(optionIndex)}
              onChange={(e) =>
                handleCheckboxChange(e, questionIndex, optionIndex)
              }
            />
          </div>
        )}
      </div>
    )
  }
}

export default Option
