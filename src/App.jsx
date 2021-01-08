import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/index.css";
import "./assets/styles/style.css";
import { AnswersList } from "./components/index";
import { Answer } from "./components/index";

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
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers,
    });
  };

  componentDidMount() {
    this.initAnswer();
  }

  render() {
    return (
      <div>
        <section className="c-section"></section>
        <div className="c-box">
          {/* <Chats /> */}
          <AnswersList answers={this.state.answers} />
        </div>
      </div>
    );
  }
}
