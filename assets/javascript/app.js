//Variables 

//"Page one" (index) variables
//countryPick
//statePick
//moviePick
//queryURL

//"Page two" (list) variables
//response.data
//locationPic

//"Page three" (movie) variables
//posterImage
//plot
//trailer
//movieName

var movieList = [];

//Functions
//Search by movie
var movieSearch = function(){
	//Take user input and add "+"" between each word
	var moviePick = "batman".split(' ').join('+'); //#moviePick.val();
	//API URL with user's movie
	var queryURL = "http://api.myapifilms.com/imdb/idIMDB?title=" + moviePick + "&token=66a93a66-d0a3-4bcf-b682-329ad22dc9c3";

	//Ajax call
	$.ajax({url: queryURL, method: 'GET'})
		//Ajax response
		.done(function(response) {

			console.log(response);

			//Create movie object
			var movie = {
				title: response.data.movies[0].title,
				year: response.data.movies[0].year,
				rating: response.data.movies[0].rated,
				plot: response.data.movies[0].simplePlot,
				poster: response.data.movies[0].urlPoster,
				location: response.data.movies[0].filmingLocations.toString(), 
			};

			console.log(movie.location);
			//Push movie properties
			//movie.title
			//movie.year
			//movie.rating
			//movie.plot
			//movie.poster
			//movie.location
		
	});
}
//Search by location
var locationSearch = function(){
	var locationPick = "England".split(' ').join('+');
	var queryURL = "http://api.myapifilms.com/imdb/idIMDB?title=batman&token=66a93a66-d0a3-4bcf-b682-329ad22dc9c3";

		$.ajax({url: queryURL, method: 'GET'})
		
			.done(function(response) {

			locationCheck(response, locationPick);
			
		});
};

var locationCheck = function(response, locationPick) {

	console.log(response);

	for(i = 0; i < response.data.movies[0].filmingLocations.length; i++){


		if (locationPick.indexOf(response.data.movies[0].filmingLocations[i])){

			
			
		}
		else {
			
			movieList.push(response.data.movies[0].title);
			console.log(movieList);
		}
	}


}

//Call search functions
locationSearch();
// movieSearch();

//object { "Guatemala":[], "Brazil": []   }
//data.movies[0].filmingLocations[1]

var places = { "Guatemala": ["star wars", "batman"] };

//data.movies[0].filmingLocations[1]   //Guatemala

//if object key contains Guatemala skip and just add originalTitle to its array
//if object key doesn't contain Guatemala (and initialize as array object), add it as a key and at originalTitle to its array



//if Guatamal  ( txtbox.val() if that is in places object(any of the keys) then print out that array)



//"Page one" (index) functions
//onClick to submit 
	//get .val() input
	//Ajax call

//"Page two" (list) functions
//Push movie titles to a "well"
//Display locationPic
//onClick to select moviePick
	//Ajax call

//"Page three" (movie) functions
//Push poster and trailer variables to a div
//Get poster


//Display locationPic

//www.omdbapi.com/?s=star+wars

//http://www.imdb.com/xml/find?q=starwars

