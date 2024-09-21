import React from 'react';
import questions from '../questions';

function QuestionList() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Alle Fragen und Antworten</h1>
      {questions.map((q, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Frage {index + 1}: {q.question}</h2>
          <ul className="list-disc list-inside space-y-2">
            {q.answers.map((answer, ansIndex) => (
              <li key={ansIndex} className={q.correctAnswers.includes(answer) ? "text-green-600 font-semibold" : ""}>
                {answer} {q.correctAnswers.includes(answer) && "(Richtig)"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;