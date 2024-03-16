import React from 'react';

const AssignedTestCard = ({ testname, score, finished, onClick }) => {
  return (
    <div
      className="bg-slate-100 rounded-lg shadow-md p-4 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold mb-2">{testname}</h2>
      <p className="text-gray-700 mb-2">Score: {score}</p>
      <p className="text-gray-700 mb-2">
        Status: {finished ? 'Completed' : 'Incomplete'}
      </p>
    </div>
  );
};

export default AssignedTestCard;

