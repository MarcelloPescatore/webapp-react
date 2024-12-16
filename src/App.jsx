import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import MoviesPage from './pages/MoviesPage'
import SingleMovie from './pages/SingleMovie'
import NotFound from './components/NotFound'
import { GlobalProvider } from './context/GlobalProvider'
import LoadingOverlay from './components/loaders/LoadingOverlay'




function App() {

  return (
    <>
      <GlobalProvider>
        <LoadingOverlay />
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<MoviesPage />} />
              <Route path='movies/:id' element={<SingleMovie />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
