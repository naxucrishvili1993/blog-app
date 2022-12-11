import React, { useState } from "react";

const InfoSection = (props) => {
	const [paragraph, setParagraph] = useState(<p>Hi, my name is</p>);
	const [fName, setFName] = useState(props.fullName);
	const [email, setEmail] = useState(props.email);
	const [dob, setDob] = useState(props.dob);
	const [location, setLocation] = useState(props.fullLocation);
	const [phoneNum, setPhoneNum] = useState(props.phone);
	const [heading, setHeading] = useState(fName);
	return (
		<div className="info">
			<p>{paragraph}</p>
			<h1>{heading}</h1>
			<div className="btn-section">
				<button
					onClick={() => {
						setParagraph(<p>Hi, my name is</p>);
						setFName((prevName) => prevName);
						setHeading(fName);
					}}>
					<i className="uil uil-user-circle"></i>
				</button>
				<button
					onClick={() => {
						setParagraph(<p>My email address is</p>);
						setEmail((prevEmail) => prevEmail);
						setHeading(email);
					}}>
					<i className="uil uil-envelope"></i>
				</button>
				<button
					onClick={() => {
						setParagraph(<p>My birthday is</p>);
						setDob((prevDob) => prevDob);
						setHeading(dob);
					}}>
					<i className="uil uil-calender"></i>
				</button>
				<button
					onClick={() => {
						setParagraph(<p>I live in</p>);
						setLocation((prevLocation) => prevLocation);
						setHeading(location);
					}}>
					<i className="uil uil-location-point"></i>
				</button>
				<button
					onClick={() => {
						setParagraph(<p>My phone number is</p>);
						setPhoneNum((prevNum) => prevNum);
						setHeading(phoneNum);
					}}>
					<i className="uil uil-phone"></i>
				</button>
			</div>
		</div>
	);
};

export default InfoSection;
