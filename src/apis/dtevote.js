import axios from 'axios';

export default axios.create({
  // production deployment of https://github.com/dashevo/vote-collector
  baseURL: 'https://dtevoteapi.dashevo.org',

  // below for local development, for more info see:
  // https://github.com/dashevo/vote-collector
  //
  // baseURL: 'http://127.0.0.1:7001',
});
