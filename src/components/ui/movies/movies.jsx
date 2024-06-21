import { MoviesList } from '../../../mocks/movies'

import { CiSearch } from 'react-icons/ci'

import './movies.css'

export const Movies = () => {
    return (
        <div>
            <h3>Ação</h3>
            <CiSearch />
            {MoviesList.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.image} alt={movie.title} />
                    <p>{movie.description}</p>
                </div>
            ))}
        </div>
    )
}
