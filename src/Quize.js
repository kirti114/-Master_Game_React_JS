import React, { Component } from 'react';
import './assets/css/Index.css';
import quizService from "./quizService";
import QuestionBox from './components/QuestonBox';
import Result from './components/Result';

class Quize extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };
  getQuestion = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };
  computeAnswer = (text, correct) => {
    if (text == correct) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    })
  }
  playAgain=()=>{
     this.getQuestion();
     this.setState({
       score :0,
       responses : 0
     });
  };
  componentDidMount() {
    this.getQuestion();
  }
  render() {
    return (
      <div className="container">
        <div className="title">
          Master Game
        </div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={text => this.computeAnswer(text, correct)}
              />
            )
          )}
        {this.state.responses ===5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>): null}
      </div>
    );
  }
}


export default Quize;