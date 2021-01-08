import React from "react";
import "./codeScreen.css"
import "./codeScreen.scss";

const CodeScreen = () => {
	const [gameCode, setGameCode] = useState("");

	// send userName to server
	const handleSubmit = () => {};
	return (
		<div className="tb-code-screen__container">
			<div className="tb-code-screen__container__input-box">
				<div className="tb-code-screen__container__input-box__title">
					Enter username
				</div>
				<form className="tb-code-screen__container__input-box__input">
					<input
						onChange={(e) => setUserName(e.target.value)}
						placeholder="Enter Name"
						className="tb-code-screen__container__input-box__input__textfield"
					/>
					<button
						type="submit"
						onClick={handleSubmit}
						className="tb-code-screen__container__input-box__input__submit-button"
					>
						Enter Name
					</button>
					<button className="tb-code-screen__container__input-box__input__back-button">
						Back
					</button>
				</form>
			</div>
		</div>
	);
};

export default CodeScreen