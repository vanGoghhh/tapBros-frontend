import React, { useState } from "react";
import "./nameScreen.scss";

const NameScreen = () => {
	const [userName, setUserName] = useState("");

	// send userName to server
	const handleSubmit = () => {};
	return (
		<div className="tb-name-screen__container">
			<div className="tb-name-screen__container__input-box">
				<div className="tb-name-screen__container__input-box__title">
					Enter username
				</div>
				<form className="tb-name-screen__container__input-box__input">
					<input
						onChange={(e) => setUserName(e.target.value)}
						placeholder="Enter Name"
						className="tb-name-screen__container__input-box__input__textfield"
					/>
					<button
						type="submit"
						onClick={handleSubmit}
						className="tb-name-screen__container__input-box__input__submit-button"
					>
						Enter Name
					</button>
					<button className="tb-name-screen__container__input-box__input__back-button">
						Back
					</button>
				</form>
			</div>
		</div>
	);
};

export default NameScreen;
