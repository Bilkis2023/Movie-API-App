// Initial array of movies
var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];


// http://www.omdbapi.com/?i=tt3896198&apikey=fb9bf8f1


// Display Movie Info function, and re-renders the HTML to display the appropriate content:


function displayMovieInfo() {
    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=fb9bf8f1";

    // Create a fetch call for the specific movie button being clicked
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //   create a div to hold the movie
            var movieDiv = $("<div class='movie' >");

            // storing the Rating data
            var rating = data.rating;

            // Creating an Element to have the rating displayed
            var pOne = $("<p>").text("Rating: " + rating);

            // Displaying the rating
            movieDiv.append(pOne);

            // Storing the release year
            var released = data.Released;

            // Creating an Element to hold released year
            var pTwo = $("<p>").text("Released:" + released);

            // Display the Released year
            movieDiv.append(pTwo);

            // Storing the plot
            var plot = data.plot;

            // Creating an Element to hold the plot
            var pThree = $("<p>").text("Plot:" + plot);

            // Append the plot to the div
            movieDiv.append(pThree);

            // Retriving the URL for image
            var imgURL = data.poster;

            // Create an Element to hold the img
            var image = $("<img>").attr("src", imgURL);


            // Append the image to the div
            movieDiv.append(image);


            //  Putting the entire movie above the previous movie
            $("#movies-view").prepend(movieDiv);

        });
}

// Function for displaying movie data:
function renderButton() {
    // Deleting the movies prior to adding a new movie
    // (This is necesseray, otherwise you will have the repeat buttons)
    $("#buttons-view").empty();

    // Looping through the arry of movies
    for (var i = 0; i < movies.lenght; i++) {
        // Then Dynamically generating a buttons for each movie in the movies array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag.(<button></button>) 
        var a = $("<button>");

        // Add a class movie-btn to our button
        a.addClass("movie-btn");

        // Adding a data attribute 
        a.attr("data-name", movies[i]);

        // Providing the initial button text
        a.text(movies[i]);

        // Adding thin button to the buttons-view div
        $("#buttons-view").append(a);
    }
}




