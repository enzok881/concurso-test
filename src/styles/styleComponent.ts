import styled from "styled-components";

export const Body = styled.div`
	#quiz {
		background: #e3f6f5;
		width: 30rem;
		padding: 4rem;
		text-align: center;
	}

	.container-question {
		width: 100%;
	}

	.question-block {
		width: 100%;
		height: 100px;
		background-color: #f5f5f5;
		border: 1px solid black;
	}

	h1 {
		color: #57636e;
		font-size: 3rem;
		text-align: center;
		padding: 2px 0px;
		border-radius: 50px;
	}
	h2 {
		text-align: center;
	}

	#question {
		font-family: sans-serif;
		font-size: 1.7rem;
		color: #5a6772;
	}

	.buttons {
		margin-top: 30px;
		max-width: 600px;
		margin: 0 auto;
	}

	.button {
		background-color: #34a3a3;
		width: 250px;
		font-size: 20px;
		color: #fff;
		border-radius: 0.3rem;
		padding: 10px 20px;
		margin: 10px 40px 10px 0px;

		&:hover {
			background-color: #34a3f4;
		}
	}

	.incorrect {
		text-align: center;
		color: red;
	}
	footer p {
		text-align: center;
		padding-right: 70px;
		font-size: 1.4rem;
	}
	#final{
		text-align: center;
		padding-right: 70px;
		font-size: 1.4rem;
	}
`;