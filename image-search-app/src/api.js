import axios from "axios";

const SearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID e46UeeuQ2UbuBtR0afdh25BlKoOxvsWNDEKmYc3sJxI', 
        },
        params: {
            query: term,
        },
    });
    return response.data.results
};

export default SearchImages;