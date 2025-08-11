import { moviesApis } from "../config/http.js";

export function getPopularMovies() {
	return moviesApis.get("movie/popular");
}

export function getMovieDetails(movieId) {
	return moviesApis.get(`movie/${movieId}`);
}

export function getMovieCredits(movieId) {
	return moviesApis.get(`movie/${movieId}/credits`);
}
export function getMovieVideos(movieId) {
	return moviesApis.get(`movie/${movieId}/videos`);
}
export function getMovieReviews(movieId) {
	return moviesApis.get(`movie/${movieId}/reviews`);
}
export function getMovieImages(movieId) {
	return moviesApis.get(`movie/${movieId}/images`);
}
export function getMovieRecommendations(movieId) {
	return moviesApis.get(`movie/${movieId}/recommendations`);
}
export function getMovieSimilar(movieId) {
	return moviesApis.get(`movie/${movieId}/similar`);
}
export function getMovieKeywords(movieId) {
	return moviesApis.get(`movie/${movieId}/keywords`);
}
export function getMovieTranslations(movieId) {
	return moviesApis.get(`movie/${movieId}/translations`);
}
export function getMovieChanges(movieId) {
	return moviesApis.get(`movie/${movieId}/changes`);
}
export function getMovieLists(movieId) {
	return moviesApis.get(`movie/${movieId}/lists`);
}
export function getMovieWatchProviders(movieId) {
	return moviesApis.get(`movie/${movieId}/watch/providers`);
}
export function getMovieExternalIds(movieId) {
	return moviesApis.get(`movie/${movieId}/external_ids`);
}
export function getMovieReleaseDates(movieId) {
	return moviesApis.get(`movie/${movieId}/release_dates`);
}
export function getMovieAccountStates(movieId) {
	return moviesApis.get(`movie/${movieId}/account_states`);
}
