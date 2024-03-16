import React, { useState } from 'react';

const TestDetails = ({ testname, videourl, questions }) => {
  // Destructure the "correcta" property from each question

  const processedQuestions = Object.entries(questions).map(([questionId, questionData]) => ({
    ...questionData,
  }));

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initialOptions = {};
    for (const questionId in questions) {
      
      initialOptions[questionId] = null; // Or any default value (e.g., "")
    }
    
    return initialOptions;
  });

  const handleOptionChange = (questionIndex, optionId) => {
    
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: optionId,
    });
  };

  const handleSubmit = () => {
    let score = 0;
    // Calculate score logic here based on selectedOptions and processedQuestions (including "correcta")
    
    for (const [questionId, selectedOption] of Object.entries(selectedOptions)) {
      if (selectedOption == ((processedQuestions[questionId].opciones.correcta))-1) {
        score++;
      }
    }
    // Update the score state accordingly (optional)
    console.log(`Your score is: ${score}`); // Example usage for debugging
  };

  return (
    <div className="test-details container mx-auto p-4 bg-gray-100 rounded-lg shadow-md mt-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{testname}</h2>
      <iframe
        className='mb-8'
        width="560"
        height="315"
        src={videourl} // Use template literals for string concatenation
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      
      {processedQuestions.map((question, index) => (
        <div key={index} className="question-card bg-white rounded-lg shadow-md p-4 mb-8 w-[50vw]">
          <p className="text-xl font-medium mb-4 text-gray-800">{index+1}- {question.enunciado}</p>
          <div className="options flex flex-col gap-4">
            {/* Only render options if opciones is not undefined or null */}
            {question.opciones && (
              Object.entries(question.opciones).map(([optionId, optionText]) => (
                <label key={optionId} className="radio-option flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`question_${index}`}
                    value={optionId}
                    checked={selectedOptions[index] === optionId}
                    onChange={() => handleOptionChange(index, optionId)}
                    className="radio-input h-5 w-5 rounded-full border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  />
                  <span className="radio-label ml-2 text-gray-700">{optionText}</span>
                </label>
              ))
            )}
          </div>
        </div>
      ))}
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn w-[30vw] bg-amber-400 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
      >
        Submit
      </button>
    </div>
  );
};

export default TestDetails