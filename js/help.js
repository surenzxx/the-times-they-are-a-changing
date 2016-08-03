//Personalization
// name of person
var firstName = "Ann Marie";
var lastName = "Scallies";
var fullName = firstName + " " + lastName;
// Gender
var male = false;

var gender = male;
var heShe;
var hisHer;
if(gender===true) {
  heShe = "he";
  hisHer = "his";
}
else {
  heShe = "she";
  hisHer = "her";
}


var benefitHeading = fullName + " Named the Most Interesting Person In the World";

//pic of person
var benefitImageURL = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/099/2b3/0e95462.jpg";

// decription for image
var benefitPhotoDescription = fullName +" " + "named most interesting person";

// Paragraph 1 Info

//net worth of person
// the movement ( START WITH A VERB)
var movementTheyLike = " Starting a museum that has every art peice that has ever existed, even art peices created by animals. This is the first program that allowed animals to submit art pieces";

//animals that they like
var Animal1andShoeBrand = "Asics the Cat";
var Animal2 = "Dogs";

// Paragraph 2 Info

//activities
var activity1 = "running";
var activity2 = "Horseback Riding";
var activity3 = "taking art classes";

//favorite food & drink
var food = "Sushi";
var drink = "drink of lemonade";

//area person lives in
var area = "Carol Gardens";
var areaReason = "it's convienent and accessible";

// interesting fact
var interestingFact = " was part of the first class at Yale that allowed women";

// //Paragraph 3 Info
//
// //what person finds inpsiration from & reason for that
// var inspirationThing = "";
// var inspirationReason = "he supports the uplifiting of everybody";
//
// // what person likes the most about all star Code
// var favoriteThing = "he's the photographer";
// var favoriteThingReason = "he can catch all the great moments in action";

// favorite celeberity of person
var benefitTweetCelebrityText = firstName + " is such an awesome inspiration to me! From the causes he supports to the wonder and interest in All Star Code. I can't wait to meet them someday.";
var benefitTweetCelebrityName = "JMichelle Obama";
var benefitTweetCelebrityHandle = "@michelleobama";
var benefitTweetCelebrityAvatar = "https://pbs.twimg.com/profile_images/507610912933441538/HCKhYoBO.png";


// heading for benefitPhotoDescription


//benefit pargraph one
var benefitParagraph1 = "EAST HAMPTONS, N.Y. — August 6th, " + fullName + " was recently named one of the most interesting people in the world. " + lastName + " beat billions of other people for the title, for " + hisHer + " work" + movementTheyLike + ".";
benefitParagraph1 += " The activities of " + lastName + " were done in dedication to " + hisHer + " pet " + Animal1andShoeBrand + ", and " + Animal2 + ", which " + heShe + " believe will be one of man's best friends in the next ten years, when the alien overlords from Mars take over.";

//benefit paragraph two
var benefitParagraph2 = "On the weekends and in " + hisHer + " freetime, " + firstName + " can be found " + activity1 + ". ";
benefitParagraph2 +=  heShe + " also enjoys " + activity2 + " and " + activity3 + ". " + firstName + " enjoys " + food + " with a refreshing " + drink+ " and " + heShe + " is originally from " + area + ". ";
benefitParagraph2 += firstName + " plans to move to Mars with " + hisHer + " pet " + Animal1andShoeBrand + "." + " One thing that many don't know about " + firstName + " is that " + interestingFact + ". It's clear that the world's choice for most interesting person was a very good one.";

//benefit paragraph three
// var benefitParagraph3 = "One of the things that " + lastName + " finds inspiration from is " + inspirationThing + " because " + inspirationReason + ".";
// benefitParagraph3 += lastName + " uses this inspiration to help out different causes, such as that of All Star Code.";
// benefitParagraph3 += " One of " + lastName + "'s" + " favorite things about All Star Code is that " + favoriteThing + ".";
// benefitParagraph3 += " They find this so great because " + favoriteThingReason + ".";




//Benefit Information
$("#benefitHeading").append(benefitHeading);
$("#benefitParagraph1").append(benefitParagraph1);
$("#benefitParagraph2").append(benefitParagraph2);
$("#benefitParagraph3").append(benefitParagraph3);
$("#benefitPhotoDescription").append(benefitPhotoDescription);
// calls the src attribute of benefitImageURL IMG tag and appends the variable to src
$("#benefitImageURL").attr("src", benefitImageURL);

//Twitter Information
$("#benefitTweetCelebrityText").append(benefitTweetCelebrityText);
$("#benefitTweetCelebrityName").append(benefitTweetCelebrityName);
$("#benefitTweetCelebrityHandle").append(benefitTweetCelebrityHandle);
//calls the src attribute of the celberityAvatar and appends the variable to src
$("#benefitTweetCelebrityAvatar").attr("src", benefitTweetCelebrityAvatar);
