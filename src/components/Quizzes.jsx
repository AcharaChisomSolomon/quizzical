import Quiz from "./Quiz";

const Quizzes = () => { 
    const quizzes = [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "Hola", "Mars", "Mexico"],
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Mars", "Earth", "Saturn"],
        },
        {
          id: 3,
          question: "Who painted the Mona Lisa?",
          options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        },
        {
        id: 4,
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        },
        {
        id: 5,
        question: "What is the largest ocean in the world?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        },
    ];
    
    return (
      <div className="quizzes">
        {quizzes.map((q) => (
          <Quiz key={q.id} quiz={q} />
        ))}
        <div className="quizzes-btn_container">
          <p className="score-text">You scored 3/5 correct answers</p>
          <button className="quizzes-btn">Check answers</button>
        </div>
      </div>
    );
        

}

export default Quizzes;