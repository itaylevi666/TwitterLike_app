import axios from 'axios';

const url = 'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/';

export async function getTweet() {
  const response = await axios.get(`${url}/tweet`);
  return response.data;
}

export async function createTweet(tweet) {
  const response = await axios.post(`${url}/tweet`,tweet );
  return response.data;
}



