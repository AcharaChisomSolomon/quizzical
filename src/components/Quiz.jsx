const Quiz = ({ quiz, handleSelection }) => { 
    const { question, potentialAnswers } = quiz
    console.log(potentialAnswers)

    return (
        <div className="quiz">
            <h3 className="quiz-question">{ question }</h3>
            <div className="quiz-options">
                {
                    potentialAnswers
                        .map(a =>
                            <span
                                key={a.id}
                                className={a.isSelected ? "quiz-option selected" : "quiz-option"}
                                onClick={() => handleSelection(quiz.id, a.id)}
                            >
                                {a.option}
                            </span>)
                }
            </div>
        </div>
    )
}

export default Quiz;