import React, { useState } from "react";
import { Question } from "./Question";

function QuestionForm() {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { title: "", type: "multiple", options: [], trueAnswer: "" },
    ]);
  };

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.push("");
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCheckboxChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].trueAnswer = optionIndex;
    setQuestions(updatedQuestions);
  };
  console.log(questions);
  return (
    <div>
      <button onClick={handleAddQuestion}>Add Question</button>
      {questions.map((question, index) => (
        <Question
          handleCheckboxChange={handleCheckboxChange}
          handleOptionChange={handleOptionChange}
          handleQuestionChange={handleQuestionChange}
          handleAddOption={handleAddOption}
          question={question}
          index={index}
        />
      ))}
    </div>
  );
}

export default QuestionForm;
