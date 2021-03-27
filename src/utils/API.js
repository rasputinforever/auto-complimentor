// this is going to be a dictionary query
// https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key

import axios from "axios";

const { API_KEY } = require('./config.js')

const BASEURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

export default {
  search: function(query) {
    console.log(BASEURL + query + API_KEY)
    return axios.get(BASEURL + query + API_KEY);
  }
};


