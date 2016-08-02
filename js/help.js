//Personalization

// name of person
var firstName = "Michael";
var lastName = "Schwartz";
var fullName = firstName + " " + lastName;

//pic of person
var benefitImageURL = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAaoAAAAJDA4Mzg3MWI1LTRkN2EtNDk4Ny04YjRkLWNjNjdkODVlNWU4NA.jpg";

// decription for image
var benefitPhotoDescription = fullName +" " + "named best photographer of the year.";

// Paragraph 1 Info

//net worth of person
var netWorth = "$10,000,000";

//movements/causes they support
var movement1 = "Music education";
var movement2 = "Cultural education";

// Paragraph 2 Info

//activities
var activity1 = "attending the theater";
var activity2 = "hiking in mountains";
var activity3 = "eating out at fancy restaurants";

//favorite food & drink
var food = "salad";
var drink = "drink of water";

//area person lives in
var area = "Upper West Side in New York City";
var areaReason = "it's convienent and accessible";

// interesting fact
var interestingFact = "he loves to dance";

//Paragraph 3 Info

//what person finds inpsiration from & reason for that
var inspirationThing = "blacks in technology";
var inspirationReason = "he supports the uplifiting of everybody";

// what person likes the most about all star Code
var favoriteThing = "he's the photographer";
var favoriteThingReason = "he can catch all the great moments in action";

// favorite celeberity of person
var benefitTweetCelebrityText = firstName + " is such an awesome inspiration to me! From the causes he supports to the wonder and interest in All Star Code. I can't wait to meet them someday.";
var benefitTweetCelebrityName = "Beyonce";
var benefitTweetCelebrityHandle = "@Beyonce";
var benefitTweetCelebrityAvatar = "https://pbs.twimg.com/profile_images/724054682579161088/3GgLeR65.jpg";


// heading for benefitPhotoDescription
var benefitHeading = fullName + " Wows at All Star Code Benefit";


//benefit pargraph one
var benefitParagraph1 = "EAST HAMPTONS, N.Y. — August 6th, " + fullName + " was named the top benefactor of the All Star Code 2016 Benefit. " + lastName + " had donated a grand total of over " + netWorth + ".";
benefitParagraph1 += " Hosted at Christina Lewis Halpern’s summer home in the East Hamptons, " + lastName + " is well known for their participation in various movements, including " + movement1 + ", and " + movement2 + ".";
benefitParagraph1 += " They have shown unwavering support, and have been a huge proponent of All Star Code since the beginning.";

//benefit paragraph two
var benefitParagraph2 = "On the weekends and in their freetime, " + firstName + " can be found " + activity1 + ".";
benefitParagraph2 += " They also enjoy " + activity2 + " and " + activity3 + ". " + firstName + " enjoys " + food + " with a refreshing " + drink+ ". ";
benefitParagraph2 += firstName + " lives in " + area + ", which they enjoy living in because " + areaReason + "." + " One thing that many don't know about " + firstName + " is that " + interestingFact + ".";

//benefit paragraph three
var benefitParagraph3 = "One of the things that " + lastName + " finds inspiration from is " + inspirationThing + " because " + inspirationReason + ".";
benefitParagraph3 += lastName + " uses this inspiration to help out different causes, such as that of All Star Code.";
benefitParagraph3 += " One of " + lastName + "'s" + " favorite things about All Star Code is that " + favoriteThing + ".";
benefitParagraph3 += " They find this so great because " + favoriteThingReason + ".";




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
