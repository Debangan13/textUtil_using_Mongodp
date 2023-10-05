import React from "react";

export default function About(props) {
	// useState for style
	// const [myStyle, setStyle] = useState({
	// 	color: "white",
	// 	backgroundColor: "black",
	// });

	// useState for Bth
	// const [btntext, setBtnText] = useState("dark mode");

	// const toggleStyle = () => {
	// 	if (myStyle.color === "white") {
	// 		setStyle({
	// 			color: "black",
	// 			backgroundColor: "white",
	// 		});
	// 		setBtnText("dark mode");
	// 	} else {
	// 		setStyle({
	// 			color: "white",
	// 			backgroundColor: "black",
	// 		});
	// 		setBtnText("light mode");
	// 	}
	// };

	let myStyle = {
		color: props.mode === "dark" ? 'white' : '#272057',
		backgroundColor: props.mode === "dark" ? '#272057' : 'white'
	}

	return (
		<div className='container' style={myStyle}>
			<div className='accordion accordion-flush' id='accordionFlushExample'>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='flush-headingOne'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseOne'
							aria-expanded='false'
							aria-controls='flush-collapseOne'
							style={myStyle}
						>
							Accordion Item #1
						</button>
					</h2>
					<div
						id='flush-collapseOne'
						className='accordion-collapse collapse'
						aria-labelledby='flush-headingOne'
						data-bs-parent='#accordionFlushExample'
					>
						<div className='accordion-body' style={myStyle}>
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> className. This is
							the first item's accordion body.
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='flush-headingTwo'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseTwo'
							aria-expanded='false'
							aria-controls='flush-collapseTwo'
							style={myStyle}
						>
							Accordion Item #2
						</button>
					</h2>
					<div
						id='flush-collapseTwo'
						className='accordion-collapse collapse'
						aria-labelledby='flush-headingTwo'
						data-bs-parent='#accordionFlushExample'
					>
						<div className='accordion-body' style={myStyle}>
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> className. This is
							the second item's accordion body. Let's imagine this being filled
							with some actual content.
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='flush-headingThree'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseThree'
							aria-expanded='false'
							aria-controls='flush-collapseThree'
							style={myStyle}
						>
							Accordion Item #3
						</button>
					</h2>
					<div
						id='flush-collapseThree'
						className='accordion-collapse collapse'
						aria-labelledby='flush-headingThree'
						data-bs-parent='#accordionFlushExample'
					>
						<div className='accordion-body' style={myStyle}>
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> className. This is
							the third item's accordion body. Nothing more exciting happening
							here in terms of content, but just filling up the space to make it
							look, at least at first glance, a bit more representative of how
							this would look in a real-world application.
						</div>
					</div>
				</div>
			</div>
			{/* <button type='button' className='btn btn-primary' onClick={toggleStyle}>
				{btnText}
			</button> */}
		</div>
	);
}
