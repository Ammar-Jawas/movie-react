import './App.css'
// import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Details from './components/Details'
import Movies from './components/Movies'


// const queryClient = new QueryClient()

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="movie/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
