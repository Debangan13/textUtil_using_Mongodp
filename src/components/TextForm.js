import React, { useState } from "react";

export default function TextForm(props) {

	const [text, setText] = useState("");
	const upperCase = () => {
		console.log("upperCase was clicked");
		setText(text.toUpperCase());
		props.showAlert('converted to upper case','success')
	};
	
	const lowerCase = () => {
		console.log("lowercase was clicked");
		setText(text.toLowerCase());
		props.showAlert('converted to lower case','success')
	};

	const handleOnChange = (event) => {
		console.log("on change");
		setText(event.target.value);
	};
	// text = 'new text' wrong way to change the state
	// setText('new text') correct way to change the state
	return (
		<>
			<div className='container' style={{color: props.mode === "dark" ? 'white': '#042743'}}>
				<h1>{props.heading}</h1>
				<div className='mb-3'>
					<textarea
						id='mybox'
						value={text}
						onChange={handleOnChange}
						className='form-control'
						rows='6'
						style={{
							backgroundColor: props.mode === "dark" ? "#13466e" : "white",
							color: props.mode === "dark" ? 'white': '#042743'							
						}}
					></textarea>
				</div>
				<button className='btn btn-primary mx-1' onClick={upperCase}>
					Uppercase
				</button>
				<button className='btn btn-primary mx-1' onClick={lowerCase}>
					Lowercase
				</button>
			</div>
			<div className='container' style={{color: props.mode === "dark" ? 'white': '#042743'}}>
				<h1>You text summary</h1>
				<p>
					{text.split(" ").filter((ele)=> {return ele.length!==0}).length} word and {text.length} characters
				</p>
			</div>
		</>
	);
}
