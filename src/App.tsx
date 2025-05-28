import { useState } from 'react'
import './App.css'
import ColorCard from './components/ColorCard'
import ColorDetail from './components/ColorDetail'
import About from './components/About'

function App() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home')

  const colors = [
    { name: 'Red', hex: '#FF0000', description: 'A warm, energetic color' },
    { name: 'Blue', hex: '#0000FF', description: 'A cool, calming color' },
    { name: 'Green', hex: '#00FF00', description: 'A natural, peaceful color' },
    { name: 'Yellow', hex: '#FFFF00', description: 'A bright, cheerful color' },
    { name: 'Purple', hex: '#800080', description: 'A royal, creative color' },
    { name: 'Orange', hex: '#FFA500', description: 'A vibrant, enthusiastic color' }
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
