// please add your own API key if you are running this on your local machine

import axios from "axios";

const { API_KEY } = require('./config.js')

const BASEURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + API_KEY);
  }
};


