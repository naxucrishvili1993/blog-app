import React, { useState } from "react";
import FullProfile from "./FullProfile";
import Navbar from "./Navbar";

const InfoSection = (props) => {
	const [paragraph, setParagraph] = useState(<p>Hi, my name is</p>);
	const [fName, setFName] = useState(props.fullName);
	const [email, setEmail] = useState(props.email);
	const [dob, setDob] = useState(props.dob);
	const [location, setLocation] = useState(props.fullLocation);
	const [phoneNum, setPhoneNum] = useState(props.phone);
	const [heading, setHeading] = useState(fName);
	const [active, setActive] = useState(false);

	active
		? document.body.classList.add("no-scroll")
		: document.body.classList.remove("no-scroll");

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
			<button
				className="profile-toggler-btn"
				onClick={() => {
					setActive((prev) => !prev);
					props.handleClick();
				}}>
				View Full Info
			</button>
			<div className={active ? "active" : "none"}>
				<FullProfile
					image={props.photo}
					fullName={fName}
					gender={props.gender}
					dob={props.dob}
					age={props.age}
					email={email}
					phone={phoneNum}
					fullLocation={location}
					username={props.username}
					handleClick={() => {
						setActive(!active);
					}}
				/>
			</div>
		</div>
	);
};

export default InfoSection;
