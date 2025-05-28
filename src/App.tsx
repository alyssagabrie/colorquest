import { useState } from 'react'
import ColorCard from './components/ColorCard'
import ColorDetail from './components/ColorDetail'
import './App.css'

interface Color {
  name: string
  hex: string
  meaning: string
  mythBusting: string
}

const colors: Color[] = [
  {
    name: 'Red',
    hex: '#FF0000',
    meaning: 'Red is the color of energy, passion, and excitement! It can make us feel strong and powerful. In many cultures, red is a lucky color that brings good fortune.',
    mythBusting: 'Red is not just for sports cars! It\'s a color that everyone can enjoy, and it\'s been used in art and fashion for thousands of years.'
  },
  {
    name: 'Blue',
    hex: '#0000FF',
    meaning: 'Blue is the color of calmness and peace. It reminds us of the sky and ocean. Many people find blue relaxing and it can help us feel more peaceful.',
    mythBusting: 'Blue is not just for boys! In fact, until about 100 years ago, pink was considered a boy\'s color and blue was for girls!'
  },
  {
    name: 'Green',
    hex: '#00FF00',
    meaning: 'Green is the color of nature and growth. It represents new beginnings and can make us feel refreshed and energized.',
    mythBusting: 'Green is not just for plants! It\'s a color that can be used in many creative ways, from art to fashion to home decor.'
  },
  {
    name: 'Yellow',
    hex: '#FFFF00',
    meaning: 'Yellow is the color of sunshine and happiness! It can make us feel cheerful and full of energy.',
    mythBusting: 'Yellow is not just for caution signs! It\'s a bright, happy color that can be used in many fun and creative ways.'
  },
  {
    name: 'Purple',
    hex: '#800080',
    meaning: 'Purple is the color of creativity and imagination. It combines the calm of blue and the energy of red.',
    mythBusting: 'Purple is not just for royalty! While it was once rare and expensive to make, today anyone can enjoy this magical color.'
  },
  {
    name: 'Pink',
    hex: '#FFC0CB',
    meaning: 'Pink is the color of kindness and compassion. It can make us feel gentle and caring.',
    mythBusting: 'Pink is not just for girls! It\'s a color that everyone can enjoy, and it was actually considered a boy\'s color in the early 1900s!'
  }
]

function App() {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null)

  return (
    <div className="App">
      <header style={{
        backgroundColor: '#4CAF50',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>ColorQuest</h1>
        <p style={{ fontSize: '24px', margin: '10px 0 0 0' }}>Discover the Magic of Colors!</p>
      </header>

      {selectedColor ? (
        <ColorDetail
          color={selectedColor}
          onBack={() => setSelectedColor(null)}
        />
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {colors.map((color) => (
            <ColorCard
              key={color.name}
              name={color.name}
              color={color.hex}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
