//Color Bank
/*var colorRed    = "#e74c3c";
var colorOrange = "#e67e22";
var colorYellow = "#f1c40f";
var colorLightGreen = "#2ecc71";
var colorDarkGreen  = "#1abc9c";
var colorBlue   = "#3498db";
var colorPurple = "#9b59b6";
var colorSilver = "#95a5a6";

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.capAllWord = function(){
	var str = this;
	strArray = str.split(" ");
	for(var i = 0; i < strArray.length; i ++){
		strArray[i] = strArray[i].capitalizeFirstLetter();
	}
	str = strArray.join(" ");
	return str;
} */

//Personalization
var founder = "Austin Carvey";
var customer = "dancers";
var product = "tap shoes";
//business
var name = "TapsRUs";
//slogan
var subheading = "Tap your way to success!";
subheading = subheading.capAllWord();
// pic of people who would use this product
var mainImageURL = "http://k.b5z.net/i/u/2179443/i/San_TA88_Bojango.jpg";

//founder
var school = founder;
//founder blurb
var schoolSubheading = founder + " always imagined leveraging technology and business to serve " + customer + ". As Founder and CEO of " + name + ", and a lover of " + product + " and " + customer + ", " + founder + " is now at work imagining not just what " + product + " can be, but what they should be in order best support " + customer + ".";
//founder picture
var schoolImageURL = "https://lh5.googleusercontent.com/-69pgXW97y6o/AAAAAAAAAAI/AAAAAAAAAWg/43z6jsm8Mmo/photo.jpg"

// kind of business
var career = "Tap Shoes Supply Store";
// blurb about the services they provide
var careerSubheading = name + " was started because " + founder + " believes in getting quality " + product + " to " + customer + ", ensuring all " + customer + " get an equal chance at success. At " + name + " we believe that our success is about putting " + customer + " first, and becuase we listen and deliver on their needs, we will always outperform companies that don't truly care. ";
// image of customer or product
var careerImageURL = "http://www.mastersofamericantapdance.com/data/images/lane_alexander.jpg";

// DONT PUT ANYTHING HERE!
var hobbiesSubheading = '';

//famous person image
var hobbiesImageURL = "http://userscontent2.emaze.com/images/e5890483-8e22-44ce-8684-49557bb9a5ba/3e4e1fc4-c90d-47e9-bb96-981d84778579.jpg";
//famous person name
var famousName = 'Beyonce';

var color = colorPurple;
//colorRed, colorOrange, colorYellow,
//colorLightGreen, colorDarkGreen,
//colorBlue, colorPurple, colorSilver
var tweetBody = "I love supporting " + name + ", it's the best organization in the world! Plus the founder, " + founder +", is awesome.";

/*setTimeout(
	function(){
		//find tweet iframe
		var twt = $("iframe")[0];
		var bdy = $(twt).contents().find('body');

		// change picture
		var tpic = $(bdy).find(".Avatar")[0];
		$(tpic).attr("src",hobbiesImageURL);

		//change name and handle
		var tname = $(bdy).find(".p-name")[0];
		$(tname).html(famousName);
		var thandle = $(bdy).find(".Tweet-authorScreenName")[0];
		$(thandle).html("@" + famousName)

		//change tweet
		var tcontent = $(bdy).find(".Tweet-text")[0];
		$(tcontent).html(tweetBody);

		//change link
		var tlink = $(bdy).find(".Tweet-authorLink")[0];
		var tfollow = $(bdy).find(".FollowButton")[0];
		$(tlink).attr("href","http://twitter.com/" + famousName);
		$(tfollow).attr("href","http://twitter.com/" + famousName);

		//change time
		var ttime = $(bdy).find(".dt-updated")[0];
		$(ttime).html("10:31 PM - 8 April 2015");
	}, 500
) */
/*
//DO NOT CHANGE
//DO NOT CHANGE
//DO NOT CHANGE
//DO NOT CHANGE
//DO NOT CHANGE
//DO NOT CHANGE
//DO NOT CHANGE
$("#nav-name").html(name);
$("#name").html(name);
$("#footer-name").html(name);
$("#subheading").html(subheading);
$("#school").html(school);
$("#school-subheading").html(schoolSubheading);
$("#career").html(career);
$("#career-subheading").html(careerSubheading);
$("#hobbies-subheading").html(hobbiesSubheading);
//$("#section-one").css("background", color);
$("#section-two").css("background", color);
//$("#section-three").css("background", color);
$("#section-four").css("background", color);
$("#section-five").css("background", color);
$(".navbar-inverse").css("background", color);
$(".navbar-inverse").css("border-bottom-color", color);
$("title").html(name+" - "+subheading)
$("#main-image").css("background-image", "url("+mainImageURL+")");
$("#school-image").css("background-image", "url("+schoolImageURL+")");
$("#career-image").css("background-image", "url("+careerImageURL+")");
$("#hobbies-image").css("background-image", "url("+hobbiesImageURL+")"); */

