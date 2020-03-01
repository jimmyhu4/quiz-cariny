var minimum = 1;
var maximum = 100;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// swap integers to make sure int1 <= int2
if (int1 < int2){
    var tmp = int1
    int1 = int2
    int2 = tmp
}
var operators = [' + ', ' - ', ' x ', ' / '];
var opidx = Math.floor(Math.random() * 4)

if (opidx == 0){
    var true_answer = int1 + int2;
} else if (opidx == 1){
    var true_answer = int1 - int2;
} else if (opidx == 2){
    var true_answer = int1 * int2;
} else if (opidx == 3){
    var true_answer = int1 / int2;
}

var min_possible_answer = Math.max(1, true_answer - 20)
var max_possible_answer = true_answer + 20
var possible_answer1 = Math.floor(Math.random()* (max_possible_answer-min_possible_answer+1)) + min_possible_answer
var possible_answer2 = Math.floor(Math.random()* (max_possible_answer-min_possible_answer+1)) + min_possible_answer



var quizQuestions = [
  {
      question: "20 + 36 ",
      answers: [
          {
              type: "Stark",
              content: "46"
              
          },
  
 
          {
              type: "Lannister",
              content: "56"
          },
          {
              type: "Targaryen",
              content: "66"
          }
      ]
  },
  {
      question: int1.toString() + operators[opidx] + int2.toString() ,
      answers: [
          {
              type: "Stark",
              content: true_answer
          },
          {
              type: "Lannister",
              content: possible_answer1
          },
          {
              type: "Targaryen",
              content: possible_answer1
          }
      ]
  },
  {
      question: "Who's your favorite family member ?",
      answers: [
          {
              type: "Stark",
              content: "My Parent"
          },
          {
              type: "Lannister",
              content: "My Sibling"
          },
          {
              type: "Targaryen",
              content: "My Grandparent"
          }
      ]
  },
  {
      question: "Choose an element",
      answers: [
          {
              type: "Stark",
              content: "Water"
          },
          {
              type: "Lannister",
              content: "Air"
          },
          {
              type: "Targaryen",
              content: "Fire"
          }
      ]
  },
  {
      question: " Which Castle would you live in ? ",
      answers: [
          {
              type: "Stark",
              content: "Winterfell"
          },
          {
              type: "Lannister",
              content: "Casterly Rock"
          },
          {
              type: "Targaryen",
              content: "DragonStone"
          }
      ]
  }
];
 
export default quizQuestions;
