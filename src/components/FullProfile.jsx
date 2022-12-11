import React from "react";

const FullProfile = (props) => {
	return (
		<div className="full-profile">
			<img src={props.image} alt="User" />
			<h1>{props.fullName}</h1>
			<p>Gender: {props.gender}</p>
			<p>Date of birth: {props.dob}</p>
			<p>Age: {props.age}</p>
			<p>Email: {props.email}</p>
			<p>Phone Number: {props.phone}</p>
			<p>City, Country: {props.fullLocation}</p>
			<p>Username: {props.username}</p>
			<button onClick={props.handleClick}>Close</button>
		</div>
	);
};

export default FullProfile;
