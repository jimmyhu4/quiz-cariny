var minimum = 1;
var maximum = 100;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
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
              content: "3"
          },
          {
              type: "Targaryen",
              content: "5"
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
