import { useMovies } from "../hooks/useMovies";

export function Movies() {
	const movies = useMovies().movies;
	return (
		<section>
			<h1>Filmes Populares</h1>

			<ul>
				{movies.map((movie) => (
					<li>
						{movie.title} - {movie.release_date}
					</li>
				))}
			</ul>
		</section>
	);
}
