function start() {
  var userMovie = prompt("What movie do you need?");

  while (userMovie == null || userMovie =="" || userMovie == " ") {
    userMovie = prompt("Please enter a movie. \n What movie do you need?");
  }
  alert("You are now renting " + userMovie)
  var club = prompt("Would you like a Club Penguin membership card to go along with your purchase?\nYes or no")

  while (club == null || club =="" || club == " ") {
    club = prompt("Decide, yes or no");
  }
  if (club == "Yes" || club == "yes"){
    alert("Here you go")
  } 
if (club == "No" || club == "no") {
  alert("Aww man")
}
}

 /* 
 | ||
 || |_
 I'm at a Loss
 */
