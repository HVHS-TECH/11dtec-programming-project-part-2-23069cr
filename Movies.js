function start() {
  let genre = ["Action", "Comedy", "RomCom", "Horror", "Fantasy", "Family Friendly"]
  let action = ["Terminator", "John Wick", "Transformers", "Die Hard", "Bad Boys", "Commando", "Top Gun"];
  let comedy = ["Ace Ventura: Pet Detective", "The Mask", "The Cable Guy", "Dumb and Dumber", "Lair Lair", "Me, Myself and Irene", "Bruce Almighty"];
  let romcom = ["Pretty Woman", "The Proposal", "Love Actually", "Some Like It Hot", "Just like Heaven", "Crazy, Stupid, Love", "10 Thing I Hate About You"];
  let horror = ["Child's Play", "IT", "Friday The 13th", "Nightmare On Elm Street", "Saw", "Halloween", "The Texas Chainsaw Massacre"];
  let fantasy = ["Harry Potter and the Prisoner of Azkaban", "The Lord of the Rings: The Fellowship of the Ring", " Labyrinth", "The Never Ending Story", "Wicked", "The World's End", "How To Train Your Dragon"];
  let familyfriendly = ["Scooby Doo", "Shrek", "The Lion King", "How The Grinch Stole Christmas", "Paddington", "Frozen", "Spider-Man: Into The Spider-Verse"];
  let actionPrice = 15;
  let comedyPrice = 10;
  let romcomPrice = 2;
  let horrorPrice = 20;
  let fantasyPrice = 5;
  let familyFriendlyPrice = 8;

const value = genres.value;

  if(value == "action"){
    let message = "You chose " +genres.value+ " here are the movies:"
     for (i = 0; i < action.length; i++) {
    message = message + "\nMovie " + i +" is " +action[i];
     }
     alert(message)
  }

 if(value == "comedy"){
    let message = "You chose " +genres.value+ " here are the movies:"
     for (i = 0; i < comedy.length; i++) {
    message = message + "\nMovie " + i +" is " +comedy[i];
     }
     alert(message)
  }

 if(value == "romcom"){
    let message = "You chose " +genres.value+ " here are the movies:"
     for (i = 0; i < romcom.length; i++) {
    message = message + "\nMovie " + i +" is " +romcom[i];
     }
     alert(message)
  }

  if(value == "horror"){
    let message = "You chose " +genres.value+ " here are the movies:"
     for (i = 0; i < horror.length; i++) {
    message = message + "\nMovie " + i +" is " +horror[i];
     }
     alert(message)
  }

  if(value == "fantasy"){
    let message = "You chose " +genres.value+ " here are the movies:"
     for (i = 0; i < fantasy.length; i++) {
    message = message + "\nMovie " + i +" is " +fantasy[i];
     }
     alert(message)
  }

  if(value == "familyfriendly"){
    let message = "You chose " +genres.value+ " here are the movies:"
     for (i = 0; i < familyfriendly.length; i++) {
    message = message + "\nMovie " + i +" is " +familyfriendly[i];
     }
     alert(message)
  }

}




/*
| ||
|| |_
I'm at a Loss
*/
