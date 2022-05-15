import { useEffect, useState } from "react";
import "./App.css";
import { Body } from "./styles/styleComponent";
import { data } from "./data";
import { QuestionInterface } from "./models/questionInterface";

function App() {
	const [nivel, setNivel] = useState<number>(1);
	const [actualQuestion, setActualQuestion] = useState<QuestionInterface>();
	const [puntaje, setPuntaje] = useState(0);

	useEffect(() => {
		const newArreglo = getRandomQuestionsByNivel();
		setActualQuestion(newArreglo);
	}, [nivel]);

	const getRandomQuestionsByNivel = () => {
		const arrayByDificultad = data.filter((item) => item.dificultad === nivel);
		const myRandom = Math.floor(Math.random() * arrayByDificultad.length);
		return arrayByDificultad[myRandom];
	};

	const clickButtonAnswer = (item: string) => {
		if (actualQuestion?.respuesta === item) {
			if (nivel === 5) {
				setNivel(0);
			} else {
				setNivel(nivel + 1);
				setPuntaje(puntaje + actualQuestion.dificultad);
			}
		} else {
			setNivel(0);
		}
	};

	return (
		<Body>
			{nivel === 0 ? (
				<>
					<h1>El juego ha terminado</h1>
					<hr />
					<p id="final">Tu puntaje final es : {puntaje}</p>
				</>
			) : (
				actualQuestion && (
					<>
						<h1>Concurso </h1>
						<hr />

						<h2>{actualQuestion?.categoría}</h2>
						<h1 id="question">{actualQuestion?.pregunta}</h1>

						<div className="buttons">
							{actualQuestion.opciones.map((item, index) => (
								<button
									key={`option-${index}`}
									className="button"
									onClick={() => clickButtonAnswer(item)}>
									{item}
								</button>
							))}
						</div>

						<hr
							style={{
								marginTop: "50px",
							}}
						/>

						<footer>
							<p>Pregunta {nivel} de 5 </p>
						</footer>
					</>
				)
			)}
		</Body>
	);
}

export default App;