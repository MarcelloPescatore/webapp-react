import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import MoviesPage from './pages/MoviesPage'
import SingleMovie from './pages/SingleMovie'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path='movies/:id' element={<SingleMovie />} />
            <Route path='*' element={<h1>Page Not Found</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
