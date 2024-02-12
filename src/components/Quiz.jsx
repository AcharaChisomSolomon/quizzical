const Quiz = ({ quiz }) => { 
    const { question, potentialAnswers } = quiz

    return (
        <div className="quiz">
            <h3 className="quiz-question">{ question }</h3>
            <div className="quiz-options">
                {
                    potentialAnswers
                        .map(a =>
                            <span
                                key={a.id}
                                className="quiz-option"
                            >
                                {a.option}
                            </span>)
                }
            </div>
        </div>
    )
}

export default Quiz;