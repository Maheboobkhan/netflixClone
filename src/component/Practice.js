const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "b043066bd9ac13dc0af3f46e69506e42";

const allApi = {
  fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${apiKey}`,
  fetchNetflixTrending: `${baseUrl}/trending/all/week?api_key=${apiKey}`,
  fetchNetflixTopRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}`,
  fetchNetflixAction: `${baseUrl}/discover/movie?api_key=${apiKey}`,
  fetchNetflixHorror: `${baseUrl}/discover/movie?api_key=${apiKey}`,
};

export default allApi;
