import get_movie_by_id from './get_movie_by_id.js'
import url_to_movie_id_list from './url_to_movie_id_list.js';

const chart_url = process.argv[2];
const items_count = process.argv[3];

(async () =>{
    let movie_id_list = await url_to_movie_id_list(chart_url.toString());
    let movie_list = [];

    for (let i = 0 ; i < items_count ; i++){
        let movie = await get_movie_by_id(movie_id_list[i]);
        movie_list.push(movie);
    }

    console.log(JSON.stringify(movie_list));

})();
