import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reduxexample from "./components/Reduxexample";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		// mode === 'light'
		//     ? setMode('dark')
		//     : setMode('light')
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#042743";
			showAlert("dark mode has been enable", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("light mode has been enable", "success");
		}
	};
	return (
		<>
			<Router>
				<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className='container'>
					<Switch>
						<Route exact path='/about'>
							<About mode={mode} />
						</Route>
						<Route exact path='/'>
							<TextForm
								showAlert={showAlert}
								heading='Enter the text to analyze'
								mode={mode}
							/>
						</Route>
						<Route exact path='/reduxexample'>
							<Reduxexample/>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
