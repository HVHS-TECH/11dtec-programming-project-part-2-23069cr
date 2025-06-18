function start() {
let genre = [" Action", " Comedy", " RomCom", " Horror", " Fantasy", " Family Friendly"]
let action = [" Terminator", " John Wick", " Transformers", " Die Hard", " Bad Boys", " Commando", " Top Gun"];
let comedy = [" Ace Ventura: Pet Detective", " The Mask", " The Cable Guy", " Dumb and Dumber", " Lair Lair", " Me, Myself and Irene", " Bruce Almighty"];
let romcom = [" Pretty Woman", " The Proposal", " Love Actually", " Some Like It Hot", " Just like Heaven", " Crazy, Stupid, Love", " 10 Thing I Hate About You"];
let horror = [" Child's Play", " IT", " Friday The 13th", " Nightmare On Elm Street", " Saw", " Halloween", " The Texas Chainsaw Massacre"];
let fantasy = [" Harry Potter and the Prisoner of Azkaban", " The Lord of the Rings: The Fellowship of the Ring", " Labyrinth", " The Never Ending Story", " Wicked", " The World's End", " How To Train Your Dragon"];
let familyfriendly = [" Scooby Doo", " Shrek", " The Lion King", " How The Grinch Stole Christmas", " Paddington", " Frozen", " Spider-Man: Into The Spider-Verse"];

let actionPrice = 15;
let comedyPrice = 10;
let romcomPrice = 2;
let horrorPrice = 20;
let fantasyPrice = 5;
let familyFriendlyPrice = 8;





  /*
  Action starting
  */
var userMovie = prompt("What movie do you need? \n \nAction:" +action+ "\n \nComedy:" +comedy+ "\n \nRomCom:" +romcom+ "\n \nHorror:" +horror+ "\n \nFantasy:" +fantasy+ "\n \nFamily Friendly:" +familyfriendly);

   console.log("first ask result: " + userMovie)
  while (userMovie !== "Terminator" && userMovie !== "John Wick" && userMovie !== "Transformers" && userMovie !== "Die Hard" && userMovie !== "Bad Boys" && userMovie !== "Commando" && userMovie !== "Top Gun" && userMovie !== "Ace Ventura: Pet Detective" && userMovie !== "The Mask" && userMovie !== "The Cable Guy" && userMovie !== "Dumb and Dumber" && userMovie !== "Lair Lair" && userMovie !== "Me, Myself and Irene" && userMovie !== "Bruce Almighty" && userMovie == null || userMovie == "" || userMovie == " "){
    userMovie = prompt("Either you typed the name incorrectly or we don't have that movie, please choose one of these here movies.\n \nAction:" +action+ "\n \nComedy:" +comedy+ "\n \nRomCom:" +romcom+ "\n \nHorror:" +Horror+ "\n \nFantasy:" +fantasy+ "\n \nFamily Friendly:" +familyfriendly)
    console.log("while trap: " + userMovie)
  }

  console.log("Checking: " + userMovie)
if (userMovie == "Terminator" || userMovie == "John Wick" || userMovie == "Transformers" || userMovie == "Die Hard" || userMovie == "Bad Boys" || userMovie == "Commando" || userMovie == "Top Gun"){
    userMovie = alert("You are now renting the action movie: \n" + userMovie)
  }

if (userMovie == "Ace Ventura: Pet Detective" || userMovie == "The Mask" || userMovie == "The Cable Guy" || userMovie == "Dumb and Dumber" || userMovie == "Lair Lair" || userMovie == "Me, Myself and Irene" || userMovie == "Bruce Almighty"){
    userMovie = alert("You are now renting the comedy movie: \n" +userMovie)
  }

if (userMovie == "Pretty Woman" || userMovie == "The Proposal" || userMovie == "Love Actually" || userMovie == "Some Like It Hot" || userMovie == "Just like Heaven" || userMovie == "Crazy, Stupid, Love" || userMovie == "10 Thing I Hate About You"){
    userMovie = alert("You are now renting the RomCom movie: \n" +userMovie)
  }

if (userMovie == "Child's Play" || userMovie == "IT" || userMovie == "Friday The 13th" || userMovie == "Nightmare On Elm Street" || userMovie == "Saw" || userMovie == "Halloween" || userMovie == "The Texas Chainsaw Massacre"){
    userMovie = alert("You are now renting the Horror movie: \n" +userMovie)
  }
/*
  action ends
*/
 



  var club = prompt("Would you like a Club Penguin membership card to go along with your purchase?\nYes or no")

  while (club == null || club =="" || club == " ") {
    club = prompt("Decide, yes or no");
  }
  if (club == "Yes" || club == "yes"){
    alert("Here you go \n Price: ")
  } 
if (club == "No" || club == "no") {
  alert("I won't be able to feed my kids tonight thanks to you.")
}
}

 /* 
 | ||
 || |_
 I'm at a Loss
 */
