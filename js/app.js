$(function(){

  $(document).ready(function() {

    // call pagination script
    $('.pagination').customPaginate({
      itemsToPaginate : ".post",
      activeClass : "active-class"
    });
    


    // initialize your app with your soundclound client ID
    SC.initialize({
      client_id: '61cc2958b13a9f13c34631f8c95dbf8a'
    });





    $("#soundcloud-search").submit(function(event){
      event.preventDefault();

      // fetch search term from the text field
      var searchTerm = $("#search-term").val();
      console.log(searchTerm);

      // call search function and pass the search term as a parameter
      //check if term is not null
      if(searchTerm !== null) {
        search(searchTerm);
        $("#results-table tbody").html("");
        $("#search-term").val("");
      }
    });

    function displayResults(tracks){
      //// use jquery to create a new table row containing data received from the API
      $.each(tracks, function(index, track){
        $("#results-table tbody")
        .append("<tr>" + 
                "<td><img src=" + track.artwork_url + "/></td>" +
                "<td>" + track.title + "</td>" +
                "<td>" + track.genre + "</td>" +
                "<td id='track" + index + "'>" + track.genre + "</td>" +
                "</tr>");

        // embed song for each track
        SC.oEmbed(track.permalink_url, {
          element: document.getElementById("track" + index),
          maxheight: 150,
        });
      });
    }

    function search(term){

      SC.get('/tracks', {
        q: term, license: 'cc-by-sa'
      }).then(function(tracks) {
        console.log(tracks)
        displayResults(tracks);
      });
    }

  });
    
  


}(jQuery));
