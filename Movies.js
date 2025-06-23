function start() {
  let genre = [" Action", " Comedy", " RomCom", " Horror", " Fantasy", " Family Friendly"]
  let action = ["Terminator", "John Wick", "Transformers", "Die Hard", "Bad Boys", "Commando", "Top Gun"];
  let comedy = ["Ace Ventura: Pet Detective", "The Mask", "The Cable Guy", "Dumb and Dumber", "Lair Lair", "Me, Myself and Irene", "Bruce Almighty"];
  let romcom = ["Pretty Woman", "The Proposal", "Love Actually", "Some Like It Hot", "Just like Heaven", "Crazy, Stupid, Love", "10 Thing I Hate About You"];
  let horror = ["Child's Play", "IT", "Friday The 13th", "Nightmare On Elm Street", "Saw", "Halloween", "The Texas Chainsaw Massacre"];
  let fantasy = ["Harry Potter and the Prisoner of Azkaban", "The Lord of the Rings: The Fellowship of the Ring", " Labyrinth", "The Never Ending Story", "Wicked", "The World's End", "How To Train Your Dragon"];
  let familyfriendly = ["Scooby Doo", "Shrek", "The Lion King", "How The Grinch Stole Christmas", "Paddington", "Frozen", "Spider-Man: Into The Spider-Verse"];
userPrice = 0;
  let actionPrice = 15;
  let comedyPrice = 10;
  let romcomPrice = 2;
  let horrorPrice = 20;
  let fantasyPrice = 5;
  let familyFriendlyPrice = 8;





  /*
  Action starting
  */
  var userMovie = prompt("What movie do you want? \n \nAction: " + action + "\n \nComedy: " + comedy + "\n \nRomCom: " + romcom + "\n \nHorror: " + horror + "\n \nFantasy: " + fantasy + "\n \nFamily Friendly: " + familyfriendly);

  console.log("first ask result: " + userMovie)
  while (userMovie !== "Terminator" && userMovie !== "John Wick" && userMovie !== "Transformers" && userMovie !== "Die Hard" && userMovie !== "Bad Boys" && userMovie !== "Commando" && userMovie !== "Top Gun" && userMovie !== "Ace Ventura: Pet Detective" && userMovie !== "The Mask" && userMovie !== "The Cable Guy" && userMovie !== "Dumb and Dumber" && userMovie !== "Lair Lair" && userMovie !== "Me, Myself and Irene" && userMovie !== "Bruce Almighty" && userMovie == null || userMovie == "" || userMovie == " ") {
    userMovie = prompt("Either you typed the name incorrectly or we don't have that movie, please choose one of these here movies.\n \nAction:" + action + "\n \nComedy:" + comedy + "\n \nRomCom:" + romcom + "\n \nHorror:" + Horror + "\n \nFantasy:" + fantasy + "\n \nFamily Friendly:" + familyfriendly)
    console.log("while trap: " + userMovie)
  }

  console.log("Checking: " + userMovie);
  if (action.includes(userMovie)) {
    alert("You are now renting the action movie: \n" + userMovie + "\nPrice:" +actionPrice);
  }

  if (comedy.includes(userMovie)) {
    userMovie = alert("You are now renting the comedy movie: \n" + userMovie + "\nPrice:" +comedyPrice);
  }

  if (romcom.includes(userMovie)) {
    userMovie = alert("You are now renting the RomCom movie: \n" + userMovie + "\nPrice:" +romcomPrice);
  }

  if (horror.includes(userMovie)) {
    userMovie = alert("You are now renting the Horror movie: \n" + userMovie + "\nPrice:" +horrorPrice);
  }

  if (fantasy.includes(userMovie)) {
    userMovie = alert("You are now renting the Fantasy movie: \n" + userMovie + "\nPrice:" +fantasyPrice);
  }

  if (familyfriendly.includes(userMovie)) {
    userMovie = alert("You are now renting the Horror movie: \n" + userMovie + "\nPrice:" +familyFriendlyPrice);
  }

  var club = prompt("Would you like a Club Penguin membership card to go along with your purchase? It's only an extra $5\nYes or no");

  while (club == null || club =="" || club == " ") {
    club = prompt("Decide, yes or no");
  }
  if (club == "Yes" || club == "yes"){
    alert("Here you go \nrice:" +);
  } 
if (club == "No" || club == "no") {
  alert("I won't be able to feed my kids tonight thanks to you.");
}
}
  /*
    action ends
  */




/*
| ||
|| |_
I'm at a Loss
*/
