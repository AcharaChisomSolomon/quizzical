import Quiz from "./Quiz";

const Quizzes = ({ quizzes }) => { 
    
    return (
      <div className="quizzes">
            {
                quizzes.map((q, i) => (
                    <Quiz
                        key={q.id}
                        quiz={q}
                    />
                ))
            }
        <div className="quizzes-btn_container">
          <p className="score-text">You scored 3/5 correct answers</p>
          <button className="quizzes-btn">Check answers</button>
        </div>
      </div>
    );
        

}

export default Quizzes;