import React, { useState } from 'react';

interface ColorDetailProps {
  color: {
    name: string;
    hex: string;
    meaning: string;
    mythBusting: string;
  };
  onBack: () => void;
}

const ColorDetail: React.FC<ColorDetailProps> = ({ color, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showReflection, setShowReflection] = useState(false);

  const quizQuestions = [
    {
      question: "Which color is only for boys?",
      options: ["Blue", "Red", "Green", "None of these!"],
      correctAnswer: 3
    },
    {
      question: "Which color is only for girls?",
      options: ["Pink", "Purple", "Yellow", "None of these!"],
      correctAnswer: 3
    },
    {
      question: "What does the color red often represent?",
      options: ["Sadness", "Energy and passion", "Calmness", "Fear"],
      correctAnswer: 1
    },
    {
      question: "Which color is associated with nature?",
      options: ["Blue", "Red", "Green", "Yellow"],
      correctAnswer: 2
    },
    {
      question: "Can colors have different meanings in different cultures?",
      options: ["No, colors mean the same everywhere", "Yes, colors can have different meanings", "Only in some countries", "I'm not sure"],
      correctAnswer: 1
    }
  ];

  const reflectionPrompts = [
    "How does this color make you feel?",
    "Can you think of three things in nature that are this color?",
    "What would you like to paint with this color?",
    "How would you describe this color to someone who can't see?",
    "What's your favorite thing about this color?"
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button
        onClick={onBack}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          marginBottom: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Back to Colors
      </button>

      <div style={{ 
        backgroundColor: color.hex,
        padding: '20px',
        borderRadius: '15px',
        marginBottom: '20px',
        color: getContrastColor(color.hex)
      }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>{color.name}</h1>
        <p style={{ fontSize: '20px' }}>{color.meaning}</p>
      </div>

      <div style={{ 
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '15px',
        marginBottom: '20px'
      }}>
        <h2 style={{ fontSize: '28px', color: '#333' }}>Myth Busting!</h2>
        <p style={{ fontSize: '18px' }}>{color.mythBusting}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setShowQuiz(!showQuiz)}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          {showQuiz ? 'Hide Quiz' : 'Take the Quiz!'}
        </button>

        <button
          onClick={() => setShowReflection(!showReflection)}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#9C27B0',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {showReflection ? 'Hide Reflection' : 'Think About It!'}
        </button>
      </div>

      {showQuiz && (
        <div style={{ 
          backgroundColor: '#e3f2fd',
          padding: '20px',
          borderRadius: '15px',
          marginBottom: '20px'
        }}>
          <h2 style={{ fontSize: '28px', color: '#333' }}>Color Quiz</h2>
          <div style={{ fontSize: '20px', marginBottom: '20px' }}>
            {quizQuestions[currentQuestion].question}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index === quizQuestions[currentQuestion].correctAnswer) {
                    alert('Correct! Great job! 🎉');
                  } else {
                    alert('That\'s not quite right. Try again! 💪');
                  }
                }}
                style={{
                  padding: '10px 20px',
                  fontSize: '18px',
                  backgroundColor: '#fff',
                  border: '2px solid #2196F3',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentQuestion((prev) => (prev + 1) % quizQuestions.length)}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Next Question
          </button>
        </div>
      )}

      {showReflection && (
        <div style={{ 
          backgroundColor: '#f3e5f5',
          padding: '20px',
          borderRadius: '15px'
        }}>
          <h2 style={{ fontSize: '28px', color: '#333' }}>Think About It!</h2>
          <div style={{ fontSize: '20px', marginBottom: '20px' }}>
            {reflectionPrompts[currentQuestion]}
          </div>
          <textarea
            style={{
              width: '100%',
              height: '100px',
              padding: '10px',
              fontSize: '18px',
              borderRadius: '5px',
              border: '2px solid #9C27B0',
              marginBottom: '10px'
            }}
            placeholder="Write your thoughts here..."
          />
          <button
            onClick={() => setCurrentQuestion((prev) => (prev + 1) % reflectionPrompts.length)}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#9C27B0',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Next Prompt
          </button>
        </div>
      )}
    </div>
  );
};

// Helper function to determine text color based on background color
function getContrastColor(hexColor: string): string {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

export default ColorDetail; 