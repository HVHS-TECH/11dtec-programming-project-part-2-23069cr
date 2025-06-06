function start() {
  var userGame = prompt("What Videogame do you need?");

  while (userGame == null || userGame =="" || userGame == " ") {
    userMovie = prompt("Please enter a Videogame. \n What Videogame do you need?");
  }
  alert("You are now renting " + userGame)
  var club = prompt("Would you like a Club Penguin membership card to go along with your purchase?\nYes or no")

  while (club == null || club =="" || club == " ") {
    club = prompt("Decide, yes or no");
  }
  if (club == "Yes" || club == "yes"){
    alert("Here you go")
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
