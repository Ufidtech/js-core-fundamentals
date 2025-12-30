/** Sentence Maker Solution **/

// 1. Declare the variables using let
let adjective;
let noun;
let verb;
let place;
let adjective2;
let noun2;

// 2. Assign the initial string values
adjective = "fluffy";
noun = "kitten";
verb = "meowing";
place = "cardboard box";
adjective2 = "tiny";
noun2 = "tuna";

// 3. Declare firstStory and create the story using the template
let firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

// 4. Output the first story
console.log("First story: " + firstStory);

// 5. Assign new values to the variables
adjective = "brave";
noun = "toaster";
verb = "heating";
place = "kitchen counter";
adjective2 = "shiny";
noun2 = "bread";

// 6. Declare secondStory and create the new story using the same template
let secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

// 7. Output the second story
console.log("Second story: " + secondStory);
