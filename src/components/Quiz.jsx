const Quiz = ({ quiz }) => { 
    const { question, options } = quiz

    return (
        <div className="quiz">
            <h3 className="quiz-question">{ question }</h3>
            <div className="quiz-options">
                {options.map((o, i) => <span key={i} className="quiz-option">{ o }</span>)}
            </div>
        </div>
    )
}

export default Quiz;