import axios from "axios";
const baseUrl = "https://www.metaweather.com/api/";
const ipBasrUrl = "http://ipinfo.io";

const getIPInfo = async (url) => {
  try{
    const response = await axios.get(`${ipBasrUrl}`);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const get = async (url) => {
  try{
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const put = async (url,user) => {
  try{
    const response = await axios.put(`${baseUrl}${url}`,user);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const remove = async (url) => {
  try{
    const response = await axios.delete(`${baseUrl}${url}`);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const create = (url,user) => {
  try{
    const response = axios.post(`${baseUrl}${url}`,user);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}
export default { get, put, remove, create, getIPInfo }
