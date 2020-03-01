// var minimum = 1;
// var maximum = 100;
// var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// // swap integers to make sure int1 <= int2
// if (int1 < int2){
//     var tmp = int1
//     int1 = int2
//     int2 = tmp
// }
// var operators = [' + ', ' - ', ' x ', ' / '];
// var opidx = Math.floor(Math.random() * 4)

// if (opidx == 0){
//     var true_answer = int1 + int2;
// } else if (opidx == 1){
//     var true_answer = int1 - int2;
// } else if (opidx == 2){
//     var true_answer = int1 * int2;
// } else if (opidx == 3){
//     var true_answer = int1 / int2;
// }

// var min_possible_answer = Math.max(1, true_answer - 20);
// var max_possible_answer = true_answer + 20;
// var possible_answer1 = Math.floor(Math.random()* (max_possible_answer-min_possible_answer+1)) + min_possible_answer;
// var possible_answer2 = Math.floor(Math.random()* (max_possible_answer-min_possible_answer+1)) + min_possible_answer;

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
var question_info3 = generate_random_question();
var question_info4 = generate_random_question();
var question_info5 = generate_random_question();

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
    question: question_info2[0],
    answers: [
        {
            type: "Stark",
            content: question_info2[1]
            
        },

        {
            type: "Lannister",
            content: question_info2[2]
        },
        {
            type: "Targaryen",
            content: question_info2[3]
        }
    ]
  },
  {
    question: question_info3[0],
    answers: [
        {
            type: "Stark",
            content: question_info3[1]
            
        },

        {
            type: "Lannister",
            content: question_info3[2]
        },
        {
            type: "Targaryen",
            content: question_info3[3]
        }
    ]
  },
  {
    question: question_info4[0],
    answers: [
        {
            type: "Stark",
            content: question_info4[1]
            
        },

        {
            type: "Lannister",
            content: question_info4[2]
        },
        {
            type: "Targaryen",
            content: question_info4[3]
        }
    ]
  },
  {
    question: question_info5[0],
    answers: [
        {
            type: "Stark",
            content: question_info5[1]
            
        },

        {
            type: "Lannister",
            content: question_info5[2]
        },
        {
            type: "Targaryen",
            content: question_info5[3]
        }
    ]
  }
];
 
export default quizQuestions;
