function start() {
const genres = [
      "Action", "Comedy", "RomCom", "Horror", "Fantasy", "Family Friendly"
    ];

    const movies = {
      Action: ["Terminator", "John Wick", "Transformers", "Die Hard", "Bad Boys", "Commando", "Top Gun"],
      Comedy: ["Ace Ventura", "The Mask", "Dumb and Dumber", "Bruce Almighty"],
      RomCom: ["Pretty Woman", "Love Actually", "Just like Heaven", "10 Thing I Hate About You"],
      Horror: ["IT", "Saw", "Halloween", "The Texas Chainsaw Massacre"],
      Fantasy: ["Harry Potter", "Lord of the Rings", "Wicked"],
      "Family Friendly": ["Scooby Doo", "Shrek", "Frozen", "Paddington"]
    };

    const prices = {
      Action: 15,
      Comedy: 10,
      RomCom: 2,
      Horror: 20,
      Fantasy: 5,
      "Family Friendly": 8
    };

    const genreSelect = document.getElementById("genreSelect");

    // Fill dropdown
    genres.forEach(g => {
      const option = document.createElement("option");
      option.value = g;
      option.textContent = g;
      genreSelect.appendChild(option);
    });

    document.getElementById("genreForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const input = prompt("Enter a genre (e.g., Horror, Fantasy):");

      if (input && genres.some(g => g.toLowerCase() === input.toLowerCase())) {
        const matched = genres.find(g => g.toLowerCase() === input.toLowerCase());
        genreSelect.value = matched;
      } else {
        alert("Genre not found.");
      }
    });
}




/*
| ||
|| |_
I'm at a Loss
*/
