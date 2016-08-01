var colorRed    = "#e74c3c";
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
}

setTimeout(
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
)

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
$("#hobbies-image").css("background-image", "url("+hobbiesImageURL+")");

