import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/authContext';
import NavBar from './components/navbar'
import Footer from './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <App />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  </StrictMode>
)

reportWebVitals