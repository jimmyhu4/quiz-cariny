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

var min_possible_answer = Math.max(1, true_answer - 20);
var max_possible_answer = true_answer + 20;
var possible_answer1 = Math.floor(Math.random()* (max_possible_answer-min_possible_answer+1)) + min_possible_answer;
var possible_answer2 = Math.floor(Math.random()* (max_possible_answer-min_possible_answer+1)) + min_possible_answer;

function generate_random_question(){
    
    var question_info = new Array(4)

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
    
    var min_possible_answer = Math.max(1, true_answer - 20);
    var max_possible_answer = true_answer + 20;
    var possible_answer1 = Math.floor(Math.random()* (max_possible_answer-min_possible_answer+1)) + min_possible_answer;
    var possible_answer2 = Math.floor(Math.random()* (max_possible_answer-min_possible_answer+1)) + min_possible_answer;

    question_info[0] = int1.toString() + operators[opidx] + int2.toString();
    question_info[1] = true_answer.toString();
    question_info[2] = possible_answer1.toString();
    question_info[3] = possible_answer2.toString();
    return question_info
}

var question_info1 = generate_random_question();
var question_info2 = generate_random_question();

var quizQuestions = [
  {
      question: question_info1[0],
      answers: [
          {
              type: "Stark",
              content: question_info1[1]
              
          },
  
          {
              type: "Lannister",
              content: question_info1[2]
          },
          {
              type: "Targaryen",
              content: question_info1[3]
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
