import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Legal from './pages/Legal'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-grow pt-16"> {/* Add padding top to account for fixed navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
