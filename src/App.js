
import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import got from './images/got.jpg';
import logo from './svg/logo.svg';
import './App.css';
 
class App extends Component {
 
 
 
 
  constructor(props) {
    super(props);
 
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        TrueAnswer: 0,
        FalseAnswer: 0
      },
      result: ''
    };
 
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
 
  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }
 
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
 
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
 
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
 
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
 
    return array;
  };
 
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
 
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }
 
  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
 
    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }
 
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
 
    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }
 
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
 
    //return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    return answersCount["TrueAnswer"]
  }
 
  setResults(result) {
    // if (result.length === 1) {
    //   this.setState({ result: result[0] });
    // } else {
    //   this.setState({ result: 'Undetermined' });
    // }
    if (result == 5) {
      this.setState({ result: "are Awesome! You got all 5 questions correct!" });
    } else if (result == 4){
      this.setState({ result: "did a very good job! You got 4 out of 5 questions correct!" });
    } else if (result == 3){
      this.setState({ result: "did a good job! You got 3 out of 5 questions correct." });
    } else if (result == 2){
      this.setState({ result: "did an OK job! You got 2 out of 5 questions correct." });
    } else if (result == 1){
      this.setState({ result: "still need practice! You got 1 out of 5 questions correct." });
    } else if (result == 0){
      this.setState({ result: "still need practice! I'm sorry that you missed all 5 questions." });
    } 
  }
 
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
 
  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <img src={got} className="App-img" alt="img" />
          
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
 
 
 
 
  }
 
}
 
export default App;