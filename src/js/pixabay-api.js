import axios from "axios"

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "53482364-9a18e1e8aa6a751435db46016";

function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query, 
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    return axios.get(BASE_URL, {
        params: params,
    })
    .then(response => response.data)
}

export { getImagesByQuery };