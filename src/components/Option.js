import React from "react";

function Option({
  optionIndex,
  optionValue,
  trueAnswer,
  questionIndex,
  handleOptionChange,
  handleCheckboxChange,
}) {
  return (
    <div>
      <input
        type="text"
        value={optionValue}
        placeholder="Enter option"
        onChange={(e) => handleOptionChange(e, questionIndex, optionIndex)}
      />
      <input
        type="checkbox"
        checked={trueAnswer === optionIndex}
        onChange={(e) => handleCheckboxChange(e, questionIndex, optionIndex)}
      />
    </div>
  );
}

export default Option;
