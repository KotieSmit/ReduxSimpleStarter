import axios from 'axios';
import { values } from 'redux-form';


const root_url='http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=ks213';

export const FETCH_POSTS='fetch_posts';
export const CREATE_POST = 'create_post'

export function fetchPosts(){
    console.log("fetchPosts()")
    const request = axios.get(root_url + '/posts' + API_KEY)
    
    var result = {
        type: FETCH_POSTS,
        payload: request
    }

    console.log("result :  ",result)
    return result
}

export function createPost(values,callback){
    const request = axios.post(root_url + '/posts' + API_KEY, values)
    .then(()=> callback());
    return {
        type: CREATE_POST,
        payload: request
    }
}