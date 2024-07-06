import { movies } from '../mocks/movies'
import { Carousel } from '../lib/carousel'

export const Movies = () => {
    const actionMovies = movies.filter(movie => movie.categorie.includes('Ação'))
    const ficcaoCientifica = movies.filter(movie => movie.categorie.includes('Ficção científica'))

    return (
        <>
            <Carousel categorie='Ação' movies={actionMovies} />
            <Carousel categorie='Ficção Científica' movies={ficcaoCientifica} />
        </>
    )
}