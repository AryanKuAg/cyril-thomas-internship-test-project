import axios from 'axios';

async function getMovieById(id) { // Async function to get movie by id
    let rawResponseData ; 
    try {
      const response = await axios.get(`https://imdb-api.com/en/API/Title/k_oi97v6k0/${id}`);
      rawResponseData = response.data;
    } catch (error) {
      console.error(error);
    }
    if (rawResponseData){ // truthy value
        let filteredData = {};
        filteredData.title = rawResponseData.title;
        filteredData.movie_release_year = rawResponseData.year;
        filteredData.imdb_rating  = rawResponseData.rating;
        filteredData.genre = rawResponseData.genres;
        filteredData.summary = rawResponseData.plot;
        filteredData.duration = rawResponseData.runtimeStr;
        return filteredData; // Return the filtered data
    }else {
        return undefined;
    }
  }

export default getMovieById;    // export the function