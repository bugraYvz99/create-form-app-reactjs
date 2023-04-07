import Option from "./Option"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

export const Question = ({
  question,
  handleQuestionChange,
  handleOptionChange,
  handleCheckboxChange,
  handleAddOption,
  handleDeleteQuestion,
  index
}) => {
  return (
    <Box
      component="span"
      className="flex flex-col items-center border-b-4 border-gray-900 mr-96 ml-96 gap-4"
      key={index}
    >
      <div className="flex flex-col gap-2">
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          fullWidth
          type="text"
          name="title"
          value={question.title}
          placeholder="Enter question"
          onChange={(e) => handleQuestionChange(e, index)}
        />

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="multiple"
          name="type"
          value={question.type}
          onChange={(e) => handleQuestionChange(e, index)}
        >
          <MenuItem value="multiple">Multiple Choice</MenuItem>
          <MenuItem value="single">Single Choice</MenuItem>
          <MenuItem value="text">Text</MenuItem>
        </TextField>
        {question.options.map((option, optionIndex) => (
          <Option
            key={optionIndex}
            type={question.type}
            optionIndex={optionIndex}
            optionValue={option}
            trueAnswer={question.trueAnswer}
            questionIndex={index}
            handleOptionChange={handleOptionChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      {question.type !== "text" && (
        <button onClick={() => handleAddOption(index)}>Add Option</button>
      )}

      <Button color="warning" onClick={() => handleDeleteQuestion(index)}>
        Delete this question
      </Button>
    </Box>
  )
}
