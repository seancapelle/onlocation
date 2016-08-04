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


//Functions

var queryURL = "http://api.myapifilms.com/imdb/idIMDB?title=matrix&token=66a93a66-d0a3-4bcf-b682-329ad22dc9c3";
			   console.log(queryURL)

$.ajax({url: queryURL, method: 'GET'})
		.done(function(response) {

		console.log(response);
		
	
		});



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
//Display locationPic

