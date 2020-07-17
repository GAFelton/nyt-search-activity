$(document).ready(function () {

var nytAPIKey = "ArZ61DBpDLUgKD0uZOIYcvLXHCmtc8qR";

var searchTerm = $("#search-term-entry").val().trim();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTerm + "&api-key=" + nytAPIKey;

$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response) {
    
    $("form").on("submit", function() {
      
      var recordNumber = $("record-number").val();
    
      for (i = 0; i < recordNumber; i++) {

        $("top-articles").append(response.docs[i]);

    }

  })

  });
});