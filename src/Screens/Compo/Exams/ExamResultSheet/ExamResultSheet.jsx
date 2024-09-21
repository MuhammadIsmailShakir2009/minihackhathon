import React from 'react';
import './ExamResultSheet.css';

const ExamResultSheet = () => {
  // Example data for the result sheet
  const resultsData = [
    { name: 'John Doe', roomNumber: '01', },
    { name: 'Jane Smith', roomNumber: '02',  },
    { name: 'Michael Johnson', roomNumber: '03', },
    { name: 'Emily Davis', roomNumber: '04', },
    { name: 'Daniel Brown', roomNumber: '05',},
    { name: 'Jessica Wilson', roomNumber: '06', },
  ];

  return (
    <div className="result-sheet-container">
      <h2>Exam Result Sheet</h2>
      {resultsData.map((result, index) => (
        <div key={index} className="result-sheet-item">
          <h3>{result.name}</h3>
          <p>room Number: {result.roomNumber}</p>
          <p>Grade: {result.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default ExamResultSheet;
