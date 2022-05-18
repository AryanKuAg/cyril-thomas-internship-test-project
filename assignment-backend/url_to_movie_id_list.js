import axios from 'axios';

// data-tconst="\w*"

async function url_to_movie_id_list (url) {
    
    let rawHtmlContent;
    let rawIdList = [];
    let pureIdList = [];

    try{
    rawHtmlContent = await axios.get(url);
    // console.log(rawHtmlContent.data);
    rawIdList = rawHtmlContent.data.match(/data-tconst="\w*"/ig) // list of raw movie ids

    for(let i of rawIdList){
        try{
            pureIdList.push(i.replace('data-tconst="','').replace('"',''));
        }catch(_){}
    }

    }catch(error){
        console.error(error);
    }
    return pureIdList;
}

export default url_to_movie_id_list;