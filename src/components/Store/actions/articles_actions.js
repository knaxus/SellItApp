import {
    GET_ARTICLES
} from '../types';
import { FIREBASEURL } from "../../utils/misc";

import axios from 'axios';

export function getArticles(category) {
    let URL = `${FIREBASEURL}/articles.json`;
    if(category !== 'All') {
        URL = `${URL}/?orderBy=\"category\"&equalTo=\"${category}\"`;
    }

    const request = axios(URL).then(response => {
            const articles = [];

            for(let key in response.data) {
                articles.push({
                    ...response.data[key],
                    id: key
                });
            }
            return articles;
        });
    
    return {
        type: GET_ARTICLES,
        payload: request
    }
}
