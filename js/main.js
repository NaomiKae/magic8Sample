var answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
];
window.onload = function () {
  var eight = document.getElementById("eight");

  var answer = document.getElementById("answer");

  var eightball = document.getElementById("eight-ball");
  var question = document.getElementById("question");

  eightball.addEventListener("click", function () {
    if (question.value.length < 1) {
      alert("enter a question!");
      //if the value in the input form section is left empty, then an alert will pop up.
    } else {
      eight.innertext = "";
      //the inner text that will be displayed equals the statements typed in the quotes above.
      var num = Math.floor(Math.random() * Math.floor(answers.length));
      //the number variable equals any whole number out of the total number of possiblities ex. 0-20. To find which number will be displayed, math random function will choose any number from the var answers list that is rounded down to the nearest whole number.

      answer.innerText = answers[num];
      //inside the "answer" div, the response displayed will equal the number that is randomly picked out of the 20 possibilities of results.
    }
  });
};
// Thanks to Magic 8 ball Tutorial on SSaurel's Channel
