function start() {
let genre = [" Action", " Comedy", " RomCom", " Horror", " Fantasy", " Family Friendly"]
let action = ["Terminator", "John Wick", "Transformers", "Die Hard", "Bad Boys", "Commando", "Top Gun"];
let comedy = ["Ace Ventura: Pet Detective", "The Mask", "The Cable Guy", "Dumb and Dumber", "Lair Lair", "Me, Myself and Irene", "Bruce Almighty"];
let romcom = ["Pretty Woman", "The Proposal", "Love Actually", "Some Like It Hot", "Just like Heaven", "Crazy, Stupid, Love", "10 Thing I Hate About You"];
let Horror = ["Child's Play", "IT", "Friday The 13th", "Nightmare On Elm Street", "Saw", "Halloween", "The Texas Chainsaw Massacre"];
let fanatsy = ["Harry Potter and the Prisoner of Azkaban", "The Lord of the Rings: The Fellowship of the Ring", "Labyrinth", "The Never Ending Story", "Wicked", "The World's End", "How To Train Your Dragon"];
let familyfriendly = ["Scooby Doo", "Shrek", "The Lion King", "How The Grinch Stole Christmas", "Paddington", "Frozen", "Spider-Man: Into The Spider-Verse"];
  var userGenre = prompt("What genre do you need?" +genre);
while (userGenre == null || userGenre == "" || userGenre == " ") {
    userGenre = prompt("Please enter a genre. \n What genre do you need?" +genre);
  }
  if (userGenre == "Action" || userGenre == "Comedy" || userGenre== "RomCom" || userGenre == "Horror" || userGenre == "Fantasy" || userGenre == "Family Friendly")
  while (userMovie == null || userMovie == "" || userMovie == " ") {
    userMovie = prompt("Please enter a movie. \n What movie do you need?");
  }

 alert("You are now renting " + userMovie + "\n Price: " )

  var club = prompt("Would you like a Club Penguin membership card to go along with your purchase?\nYes or no")

  while (club == null || club =="" || club == " ") {
    club = prompt("Decide, yes or no");
  }
  if (club == "Yes" || club == "yes"){
    alert("Here you go \n Price: " + price)
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
