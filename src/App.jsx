import { Header } from './components/ui'
import './styles/app.css'

import { Carousel } from './lib/carousel'
import { movies } from './mocks/movies'


function App() {
  return (
    <>
      <Header />
      <Carousel categorie='Ação'  movies={movies}  />
      <Carousel categorie='Romance' movies={movies} />
    </>
  )
}

export default App
