function start() {
  var userGame = prompt("What Videogame do you need?");

  while (userGame == null || userGame =="" || userGame == " ") {
    userGame = prompt("Please enter a Videogame. \n What Videogame do you need?");
  }
    if (userGame == "Fortnite" || userGame == "fortnite"){
    alert("You look like the type of guy who plays that")
    }
     if (userGame == "War Thunder" || userGame == "War thunder" || userGame == "war Thunder" || userGame == "war thunder"){
    alert("Josh this is an intervention")
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
