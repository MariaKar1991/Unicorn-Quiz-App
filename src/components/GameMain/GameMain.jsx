import Progress from "../Progress/Progress";
import Questions from "../Questions/Questions";
import { QuizContainerContext } from "../../QuizContainerContext";
import { useContext } from "react";
import "./GameMain.css";

export default function GameMain() {
  const { questions, currentQuestionIndex } = useContext(QuizContainerContext);
  const currentQuestion = questions[currentQuestionIndex];


  return (
    <div className="container-main">
      <img
        className="unicorn-pc"
        src="/public/images/unicorn-pc.jpg"
        alt="Unicorn PC"
        loading="lazy"
      />
      <Questions key={currentQuestion.id} question={currentQuestion} />
      <Progress />
    </div>
  );
}
