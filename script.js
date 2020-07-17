$(document).ready(function () {

var nytAPIKey = "ArZ61DBpDLUgKD0uZOIYcvLXHCmtc8qR";


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTerm + "&api-key=" + nytAPIKey;

$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response) {

  });
}