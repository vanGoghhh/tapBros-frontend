import React, { useState } from 'react';
import './nameScreen.css';

const NameScreen = () => {
	const [userName, setUserName] = useState('');

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
					></input>
					<button type="submit" onClick={handleSubmit}></button>
					<button>Back</button>
				</form>
			</div>
		</div>
	);
};

export default NameScreen;
