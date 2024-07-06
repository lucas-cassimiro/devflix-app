import { Header, Footer } from './components/ui'
import './styles/app.css'

import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
