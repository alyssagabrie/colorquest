import { useState } from 'react'
import './App.css'
import ColorCard from './components/ColorCard'
import ColorDetail from './components/ColorDetail'
import About from './components/About'

function App() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home')

  const colors = [
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
          <h1 style={{ color: 'white', margin: 0 }}>ColorQuest</h1>
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

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {currentPage === 'home' ? (
          <>
            <div className="color-grid">
              {colors.map(color => (
                <ColorCard
                  key={color.name}
                  color={color}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
            {selectedColor && (
              <ColorDetail
                color={colors.find(c => c.name === selectedColor)!}
                onClose={() => setSelectedColor(null)}
              />
            )}
          </>
        ) : (
          <About />
        )}
      </main>
    </div>
  )
}

export default App
