document.addEventListener("DOMContentLoaded", () => {
  const candidates = parseInt(prompt("Number of candidates: "));
  const candidatesArray = [];

  let index = 0;

  while (index < candidates) {
    const promp_name = prompt(`Name of candidate number ${index + 1}: `);

    let candidateObj = {
      name: `${promp_name}`,
      votes: 0,
    };

    candidatesArray.push(candidateObj);
    index++;
  }

  const names = [];

  candidatesArray.forEach((candidate) => {
    names.push(candidate.name);
  });

  //   ASK EACH CANDIDATE WHO TO VOTE FOR
  candidatesArray.forEach((candidate) => {
    const vote = prompt(
      `Who do you want to vote for ${candidate.name}? \n OPTIONS: ${names}`
    );

    // Iterate through the array and check for the name
    for (let person of candidatesArray) {
      if (person.name.toLowerCase() == vote) {
        person.votes += 1; // Increment the votes
        break; // Exit the loop once a match is found
      } else {
        break;
      }
    }
  });

  let winner = candidatesArray[0];
  for (let person of candidatesArray) {
    if (person.votes > winner.votes) {
      winner = person;
    }
  }

  console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

  // Step 3: Print all results
  console.log("Results:");
  candidatesArray.forEach((person) => {
    console.log(`${person.name}: ${person.votes} votes`);
  });

});
