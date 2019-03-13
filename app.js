$(document).ready(function(){

var searchTerm;
var recordsNumber;
var startYear;
var endYear;
var apiKey = "rcQPGG5PPWkZG0QVBCGythO81oAjiAc2";
var title ;
var byline;
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&begin_date=20120101&end_date=20130101&api-key=rcQPGG5PPWkZG0QVBCGythO81oAjiAc2



$("#search-btn").on("click", function {
    searchTerm = $("#search").val().trim();
    startYear = $("#start").val().trim();
    endYear = $("#end").val().trim();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      //
        .then(function(response) {
        var results=response.data;
        title = results.headline.main;
        byline = results.byline.original;


}












});