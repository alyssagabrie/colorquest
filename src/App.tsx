import { useState } from 'react'
import './App.css'
import ColorCard from './components/ColorCard'
import ColorDetail from './components/ColorDetail'
import About from './components/About'
import Footer from './components/Footer'

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Color {
  name: string;
  hex: string;
  description: string;
  myth: string;
}

interface Myth {
  myth: string;
  truth: string;
  history: string;
}

interface Category {
  key: 'colors' | 'objects' | 'activities';
  label: string;
}

type CategoryKey = Category['key'];
type SectionKey = 'myths' | 'quiz' | 'explore';

// Data for Colors
const colorMyths = [
  {
    myth: "Pink is for girls, blue is for boys",
    truth: "This is a relatively recent concept! Before the 1940s, pink was actually considered a stronger color suitable for boys, while blue was seen as delicate and feminine.",
    history: "The current association only became popular after World War II due to marketing campaigns."
  },
  {
    myth: "Purple is only for girls",
    truth: "Purple used to be a royal color for kings and queens. It belongs to everyone.",
    history: "In ancient times, purple dye was expensive and worn by rulers, regardless of gender."
  },
  {
    myth: "Boys shouldn't like bright or pastel colors",
    truth: "Colors don't have feelings. Liking soft or bright colors doesn't say anything about your gender.",
    history: "In the 1800s, pastel colors were considered fashionable for all children."
  },
  {
    myth: "Red means stop, green means go",
    truth: "While these associations are common in traffic signals, colors can have different meanings in different cultures.",
    history: "In China, red symbolizes good fortune and joy, while in South Africa, red is associated with mourning."
  },
  {
    myth: "Yellow is a happy color",
    truth: "While yellow can represent happiness, it can also symbolize caution, cowardice, or illness in different contexts.",
    history: "In Egypt, yellow was associated with mourning, while in Japan it represents courage."
  }
];

const colorQuizQuestions: QuizQuestion[] = [
  {
    question: "Which color was traditionally associated with boys in the early 1900s?",
    options: ["Blue", "Pink", "Green", "Yellow"],
    correctAnswer: 1,
    explanation: "Pink was considered a stronger color and was often used for boys' clothing in the early 1900s!"
  },
  {
    question: "What does the color red symbolize in Chinese culture?",
    options: ["Danger", "Good fortune", "Love", "Anger"],
    correctAnswer: 1,
    explanation: "In Chinese culture, red symbolizes good fortune, joy, and prosperity."
  },
  {
    question: "Which famous artist said 'Color is my day-long obsession, joy, and torment'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Frida Kahlo"],
    correctAnswer: 2,
    explanation: "Claude Monet was known for his revolutionary use of color in impressionist painting."
  },
  {
    question: "What color is associated with royalty in many cultures?",
    options: ["Red", "Blue", "Purple", "Gold"],
    correctAnswer: 2,
    explanation: "Purple became associated with royalty because the dye was historically very expensive to produce."
  },
  {
    question: "Which color is considered lucky in many Asian cultures?",
    options: ["Blue", "Red", "Green", "Yellow"],
    correctAnswer: 1,
    explanation: "Red is considered lucky in many Asian cultures and is often used in celebrations and festivals."
  }
];

const colorExplore = [
  "Colors can affect our mood and emotions.",
  "Different cultures see colors differently.",
  "There are no 'boy colors' or 'girl colors' - colors are for everyone!",
  "Some people can see more colors than others (tetrachromacy).",
  "Colors can have different meanings in different contexts.",
  "Why do you think some colors are called 'boy' colors and some 'girl' colors?",
  "What's your favorite color? Has anyone ever said it's not for your gender?",
  "Can colors have feelings? Why or why not?"
];

// Data for Objects
const objectMyths = [
  {
    myth: "Dolls are for girls, trucks are for boys",
    truth: "Toys are for everyone! Playing with dolls can help all children develop empathy and social skills, and trucks are fun for anyone who likes to build or imagine.",
    history: "Toy marketing in the 20th century started to target toys by gender, but before that, children played with all kinds of toys."
  },
  {
    myth: "Only boys play with building sets",
    truth: "Building sets help all children learn problem-solving and creativity, regardless of gender.",
    history: "Many famous female engineers and architects played with building sets as children."
  },
  {
    myth: "Kitchen toys are only for girls",
    truth: "Everyone needs to eat! Cooking toys help all kids learn important life skills.",
    history: "Many of the world's best chefs are men—cooking is for everyone."
  },
  {
    myth: "Superheroes are just for boys",
    truth: "Anyone can be strong and brave. There are many amazing girl superheroes too!",
    history: "Comic books have featured female superheroes like Wonder Woman since the 1940s."
  }
];

const objectQuizQuestions: QuizQuestion[] = [
  {
    question: "Can boys play with dolls?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Absolutely! Dolls help all children learn empathy and care."
  },
  {
    question: "Are building sets only for boys?",
    options: ["Yes", "No"],
    correctAnswer: 1,
    explanation: "No! Building sets are for everyone and help develop creativity."
  },
  {
    question: "Who can play with kitchen toys?",
    options: ["Only girls", "Everyone", "Only boys", "Only adults"],
    correctAnswer: 1,
    explanation: "Everyone needs to learn how to cook! Kitchen toys help all children learn important life skills."
  },
  {
    question: "Can girls be superheroes?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Yes! There are many amazing female superheroes like Wonder Woman, Captain Marvel, and Black Widow."
  }
];

const objectExplore = [
  "Many famous chefs (men and women) played with kitchen sets as kids.",
  "Girls and boys can both enjoy sports equipment, dolls, and building sets.",
  "Toys are tools for learning and fun, not for enforcing stereotypes.",
  "Have you ever wanted to play with a toy but felt like it wasn't 'for you'? Why?",
  "What makes a toy fun to play with, not who it's made for?",
  "Do you think toy stores should be organized by gender?"
];

// Data for Activities
const activityMyths = [
  {
    myth: "Ballet is for girls, football is for boys",
    truth: "Anyone can enjoy dance or sports! Many famous male athletes have taken ballet to improve their strength and balance.",
    history: "Gendered activities are a modern invention. Historically, both boys and girls participated in a variety of activities."
  },
  {
    myth: "Girls don't like science or math",
    truth: "Girls and boys are equally capable in all subjects. Interests are personal, not gendered.",
    history: "There are many famous female scientists and mathematicians throughout history."
  },
  {
    myth: "Only boys are good at video games",
    truth: "Anyone can be good at games with practice and passion.",
    history: "Girls and women have made huge contributions to the gaming industry."
  },
  {
    myth: "Boys shouldn't take art or drama classes",
    truth: "Creative expression is for everyone. Some of the world's best actors and artists are men.",
    history: "Art and storytelling have been shared by all people throughout history."
  }
];

const activityQuizQuestions: QuizQuestion[] = [
  {
    question: "Can boys do ballet?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Yes! Ballet is for everyone and helps with strength and coordination."
  },
  {
    question: "Are girls good at science?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Yes! Girls and boys can both excel in science."
  },
  {
    question: "Can girls be good at video games?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Yes! Many professional gamers are women, and anyone can be good at games with practice."
  },
  {
    question: "Should boys be allowed to take art classes?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Yes! Art is for everyone, and many famous artists are men."
  }
];

const activityExplore = [
  "Many male football players take ballet to improve their agility.",
  "Girls have won top awards in math and science competitions.",
  "Activities are for everyone, regardless of gender.",
  "What activities do you enjoy that others might not expect?",
  "Why do you think people try to label activities by gender?",
  "How can we make sure everyone feels welcome to join any activity?"
];

const categories: Category[] = [
  { key: 'colors', label: 'Colors' },
  { key: 'objects', label: 'Objects' },
  { key: 'activities', label: 'Activities' }
];

function App() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home')
  const [currentCategory, setCurrentCategory] = useState<CategoryKey>('colors');
  const [currentSection, setCurrentSection] = useState<SectionKey>('myths');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Data selection based on category
  const getMyths = () => {
    if (currentCategory === 'colors') return colorMyths;
    if (currentCategory === 'objects') return objectMyths;
    if (currentCategory === 'activities') return activityMyths;
    return [];
  };
  const getQuiz = () => {
    if (currentCategory === 'colors') return colorQuizQuestions;
    if (currentCategory === 'objects') return objectQuizQuestions;
    if (currentCategory === 'activities') return activityQuizQuestions;
    return [];
  };
  const getExplore = () => {
    if (currentCategory === 'colors') return colorExplore;
    if (currentCategory === 'objects') return objectExplore;
    if (currentCategory === 'activities') return activityExplore;
    return [];
  };

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === getQuiz()[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < getQuiz().length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  // Reset quiz when category or section changes
  const handleSectionChange = (section: SectionKey) => {
    setCurrentSection(section);
    setCurrentQuestion(0);
    setScore(0);
    setShowExplanation(false);
  };
  const handleCategoryChange = (category: CategoryKey) => {
    setCurrentCategory(category);
    setCurrentSection('myths');
    setCurrentQuestion(0);
    setScore(0);
    setShowExplanation(false);
  };

  // Color data for color cards
  const colors: Color[] = [
    { 
      name: 'Red', 
      hex: '#FF0000', 
      description: 'A warm, energetic color that represents passion and excitement.',
      myth: 'Red is not just for sports cars! It\'s a color that everyone can enjoy, and it\'s been used in art and fashion for thousands of years.'
    },
    { 
      name: 'Blue', 
      hex: '#0000FF', 
      description: 'A cool, calming color that reminds us of the sky and ocean.',
      myth: 'Blue is not just for boys! In fact, until about 100 years ago, pink was considered a boy\'s color and blue was for girls!'
    },
    { 
      name: 'Green', 
      hex: '#00FF00', 
      description: 'A natural, peaceful color that represents growth and harmony.',
      myth: 'Green is not just for plants! It\'s a color that can be used in many creative ways, from art to fashion to home decor.'
    },
    { 
      name: 'Yellow', 
      hex: '#FFFF00', 
      description: 'A bright, cheerful color that brings sunshine and happiness.',
      myth: 'Yellow is not just for caution signs! It\'s a bright, happy color that can be used in many fun and creative ways.'
    },
    { 
      name: 'Purple', 
      hex: '#800080', 
      description: 'A royal, creative color that combines the calm of blue and the energy of red.',
      myth: 'Purple is not just for royalty! While it was once rare and expensive to make, today anyone can enjoy this magical color.'
    },
    { 
      name: 'Orange', 
      hex: '#FFA500', 
      description: 'A vibrant, enthusiastic color that combines the energy of red and the happiness of yellow.',
      myth: 'Orange is not just for traffic cones! It\'s a warm, inviting color that can make any space feel more energetic.'
    },
    { 
      name: 'Pink', 
      hex: '#FFC0CB', 
      description: 'A gentle, caring color that represents kindness and compassion.',
      myth: 'Pink is not just for girls! It\'s a color that everyone can enjoy, and it was actually considered a boy\'s color in the early 1900s!'
    },
    { 
      name: 'Teal', 
      hex: '#008080', 
      description: 'A sophisticated color that combines the calm of blue with the freshness of green.',
      myth: 'Teal is not just for bathrooms! It\'s a versatile color that can add elegance to any design.'
    },
    { 
      name: 'Gold', 
      hex: '#FFD700', 
      description: 'A luxurious color that represents success and achievement.',
      myth: 'Gold is not just for winners! It\'s a color that can add warmth and elegance to any design.'
    }
  ]

  return (
    <div className="app">
      <nav style={{
        backgroundColor: '#2c3e50',
        padding: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ color: 'white', margin: 0 }}>TrueColors4Kids</h1>
          <div>
            <button 
              onClick={() => setCurrentPage('home')}
              style={{
                backgroundColor: currentPage === 'home' ? '#3498db' : 'transparent',
                color: 'white',
                border: '1px solid white',
                padding: '0.5rem 1rem',
                marginRight: '1rem',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              style={{
                backgroundColor: currentPage === 'about' ? '#3498db' : 'transparent',
                color: 'white',
                border: '1px solid white',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              About
            </button>
          </div>
        </div>
      </nav>

      <main>
        {currentPage === 'home' ? (
          <div className="content-section">
            {/* Category Navigation */}
            <div className="category-nav">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`category-button ${currentCategory === cat.key ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Section Navigation */}
            <div className="section-nav">
              <button
                onClick={() => handleSectionChange('myths')}
                className={`section-button ${currentSection === 'myths' ? 'active' : ''}`}
              >
                Myths
              </button>
              <button
                onClick={() => handleSectionChange('quiz')}
                className={`section-button ${currentSection === 'quiz' ? 'active' : ''}`}
              >
                Quiz
              </button>
              <button
                onClick={() => handleSectionChange('explore')}
                className={`section-button ${currentSection === 'explore' ? 'active' : ''}`}
              >
                Explore
              </button>
            </div>

            {/* Section Content */}
            {currentSection === 'myths' && currentCategory !== 'colors' && (
              <section className="myths-section">
                <h2 style={{ color: '#e67e22', gridColumn: '1 / -1' }}>
                  {categories.find(c => c.key === currentCategory)?.label} Myths & Truths
                </h2>
                {getMyths().map((myth, index) => (
                  <div key={index} className="myth-card">
                    <h3>Myth: {myth.myth}</h3>
                    <p><strong>Truth:</strong> {myth.truth}</p>
                    <p><strong>History:</strong> {myth.history}</p>
                  </div>
                ))}
              </section>
            )}

            {currentSection === 'quiz' && (
              <section className="quiz-section">
                <h2 style={{ color: '#e67e22' }}>{categories.find(c => c.key === currentCategory)?.label} Quiz</h2>
                {currentQuestion < getQuiz().length ? (
                  <div className="quiz-card">
                    <h3>Question {currentQuestion + 1} of {getQuiz().length}</h3>
                    <p>{getQuiz()[currentQuestion].question}</p>
                    <div className="options">
                      {getQuiz()[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          disabled={showExplanation}
                          className="option-button"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {showExplanation && (
                      <div className="explanation">
                        <p>{getQuiz()[currentQuestion].explanation}</p>
                        <button onClick={nextQuestion} className="option-button">
                          {currentQuestion < getQuiz().length - 1 ? 'Next Question' : 'See Results'}
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="results">
                    <h3>Quiz Complete!</h3>
                    <p>Your score: {score} out of {getQuiz().length}</p>
                    <button 
                      onClick={() => {
                        setCurrentQuestion(0);
                        setScore(0);
                        setShowExplanation(false);
                      }}
                      className="option-button"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </section>
            )}

            {currentSection === 'explore' && (
              <section className="explore-section">
                <h2 style={{ color: '#e67e22' }}>Explore {categories.find(c => c.key === currentCategory)?.label}</h2>
                <div className="explore-card">
                  <ul>
                    {getExplore().map((fact, idx) => (
                      <li key={idx}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Show color cards for Colors category */}
            {currentCategory === 'colors' && (
              <>
                {currentSection === 'myths' && (
                  <div className="colors-layout">
                    <div className="myths-section">
                      <h2 style={{ color: '#e67e22' }}>Color Myths & Truths</h2>
                      {getMyths().map((myth, index) => (
                        <div key={index} className="myth-card">
                          <h3>Myth: {myth.myth}</h3>
                          <p><strong>Truth:</strong> {myth.truth}</p>
                          <p><strong>History:</strong> {myth.history}</p>
                        </div>
                      ))}
                    </div>
                    <div className="color-grid">
                      {colors.map(color => (
                        <ColorCard
                          key={color.name}
                          color={color}
                          onClick={() => setSelectedColor(color.name)}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {(currentSection === 'quiz' || currentSection === 'explore') && (
                  <div className="color-grid-container">
                    <div className="color-grid">
                      {colors.map(color => (
                        <ColorCard
                          key={color.name}
                          color={color}
                          onClick={() => setSelectedColor(color.name)}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {selectedColor && (
                  <ColorDetail
                    color={colors.find(c => c.name === selectedColor)!}
                    onClose={() => setSelectedColor(null)}
                  />
                )}
              </>
            )}
          </div>
        ) : (
          <About />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
