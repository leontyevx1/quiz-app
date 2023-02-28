import './index.scss';
import {useState} from "react";
import questions from "./State/state";
import Result from "./Components/Result";
import Game from "./Components/Game";

function App() {

    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];

    return (
        <div className="App">
            {
                step !== questions.length
                    ? <Game step={step}
                            setStep={setStep}
                            question={question}
                            setCorrect={setCorrect}
                            correct={correct}
                    />
                    : <Result correct={correct}
                              questions={questions}/>
            }

        </div>
    );
}

export default App;
