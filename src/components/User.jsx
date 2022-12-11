import React from "react";
import InfoSection from "./InfoSection";

const User = (props) => {
	return (
		<div className="user">
			<div className="wrapper">
				<img src={props.photo} alt="User" />
				<InfoSection
					fullName={`${props.fname} ${props.lname}`}
					email={props.email}
					dob={props.dob}
					fullLocation={props.state + ", " + props.city}
					phone={props.phone}
				/>
			</div>
		</div>
	);
};

export default User;
