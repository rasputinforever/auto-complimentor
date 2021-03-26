// this is going to be a dictionary query
// https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key

import axios from "axios";
var APIKEY = config.MY_KEY;
const BASEURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};


