import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import User from "./components/User";
import "./App.css";

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("https://randomuser.me/api/?results=30")
			.then((res) => {
				setData(res.data.results);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="container">
			{data.map((el, index) => {
				return (
					<User
						key={index}
						dob={el.dob.date.slice(0, 10)}
						photo={el.picture.large}
						fname={el.name.first}
						lname={el.name.last}
						gender={el.gender}
						state={el.location.state}
						city={el.location.city}
						email={el.email}
						phone={el.phone}
					/>
				);
			})}
		</div>
	);
};

export default App;
