import React, { useState } from 'react';
import questions from '../questions';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const handleAnswerClick = (answer) => {
    if (isCorrect !== null) return; // Verhindert weitere Auswahl nach Beantwortung
    const updatedAnswers = selectedAnswers.includes(answer)
      ? selectedAnswers.filter(a => a !== answer)
      : [...selectedAnswers, answer];
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    const currentQuestionData = questions[currentQuestion];
    const correct = currentQuestionData.correctAnswers.every(a => selectedAnswers.includes(a)) &&
                    selectedAnswers.length === currentQuestionData.correctAnswers.length;
    
    setIsCorrect(correct);
    setShowCorrectAnswers(true);
    if (correct) setScore(score + 1);

    setTimeout(() => {
      setSelectedAnswers([]);
      setIsCorrect(null);
      setShowCorrectAnswers(false);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 3000); // 3 Sekunden Zeit, um die Antworten zu sehen
  };

  const currentQuestionData = questions[currentQuestion];

  const getButtonClass = (answer) => {
    let baseClass = "font-bold py-2 px-4 rounded transition duration-300 ";
    if (isCorrect === null) {
      return baseClass + (selectedAnswers.includes(answer) ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white");
    }
    if (showCorrectAnswers) {
      if (currentQuestionData.correctAnswers.includes(answer)) {
        return baseClass + "bg-green-500 text-white";
      }
      if (selectedAnswers.includes(answer)) {
        return baseClass + "bg-red-500 text-white";
      }
    }
    return baseClass + "bg-gray-200 text-gray-800";
  };

  return (
    <div className={`transition-colors duration-500 ${
      isCorrect === null ? 'bg-white' : isCorrect ? 'bg-green-200' : 'bg-red-200'
    } p-8 rounded-lg shadow-xl`}>
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz beendet!</h2>
          <p className="text-xl">
            Sie haben {score} von {questions.length} Fragen richtig beantwortet.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Frage {currentQuestion + 1}</h2>
            <p className="text-lg mb-4">{currentQuestionData.question}</p>
            {currentQuestionData.image && (
              <img 
                src={currentQuestionData.image} 
                alt="Frage-Bild" 
                className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-md"
              />
            )}
            <p className="text-sm text-gray-500 mt-2">
              (Wählen Sie {currentQuestionData.correctAnswers.length} Antwort{currentQuestionData.correctAnswers.length > 1 ? 'en' : ''})
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-6">
            {currentQuestionData.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                disabled={isCorrect !== null}
                className={getButtonClass(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswers.length === 0 || isCorrect !== null}
            className={`w-full ${
              selectedAnswers.length === 0 || isCorrect !== null
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
            } text-white font-bold py-2 px-4 rounded transition duration-300`}
          >
            {isCorrect === null ? 'Antwort überprüfen' : isCorrect ? 'Richtig!' : 'Falsch!'}
          </button>
          {showCorrectAnswers && (
            <p className="mt-4 text-center font-semibold">
              {isCorrect 
                ? "Gut gemacht! Alle ausgewählten Antworten sind korrekt." 
                : "Die richtigen Antworten sind grün markiert. Falsch ausgewählte Antworten sind rot markiert."}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;