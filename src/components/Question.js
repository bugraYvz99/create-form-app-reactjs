import Option from "./Option";

export const Question = ({
  question,
  handleQuestionChange,
  handleOptionChange,
  handleCheckboxChange,
  handleAddOption,
  index,
}) => {
  return (
    <div
      className="flex flex-col items-center border-b-4 border-gray-900 mr-96 ml-96 gap-4"
      key={index}
    >
      <div className="flex flex-col gap-2">
        <input
          className="outline-none bg-none text-2xl rounded-sm"
          type="text"
          name="title"
          value={question.title}
          placeholder="Enter question"
          onChange={(e) => handleQuestionChange(e, index)}
        />
        <select
          className=""
          name="type"
          value={question.type}
          onChange={(e) => handleQuestionChange(e, index)}
        >
          <option value="multiple">Multiple Choice</option>
          <option value="single">Single Choice</option>
        </select>
        {question.options.map((option, optionIndex) => (
          <Option
            key={optionIndex}
            optionIndex={optionIndex}
            optionValue={option}
            trueAnswer={question.trueAnswer}
            questionIndex={index}
            handleOptionChange={handleOptionChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      <button onClick={() => handleAddOption(index)}>Add Option</button>
    </div>
  );
};
