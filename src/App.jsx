import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/index.css";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      ope: false,
    };
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question",
    });
    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
      case /^http*/.test(nextQuestionId):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.click();
        break;
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: "answer",
        });

        this.setState({
          chats: chats,
        });
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  };

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  render() {
    return (
      <div>
        <section className="c-section"></section>
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList
            answers={this.state.answers}
            select={this.selectAnswer}
          />
        </div>
      </div>
    );
  }
}
