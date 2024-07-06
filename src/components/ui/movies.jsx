import { Link } from 'react-router-dom'

export const Movies = ({ movies }) => {
    return (
        <Link to={`/movies/${movies.id}`} key={movies.id}>
            <div className='p-10'>
                <img src={movies.image} alt={movies.title} className='w-[300px] h-[300px]' />
            </div>
        </Link>
    )
}
