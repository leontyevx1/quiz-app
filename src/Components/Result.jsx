import React from 'react';

const Result = ({questions, correct}) => {
    return (
        <div className="result">
            <div>
                {correct <=4
                    ? <img src="https://www.pinclipart.com/picdir/big/124-1245815_sad-emoji-clipart-huge-png-download.png"/>
                    : <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>}
            </div>
            <h2>Вы дали {correct} правильных ответа(ов) из {questions.length}</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

export default Result;