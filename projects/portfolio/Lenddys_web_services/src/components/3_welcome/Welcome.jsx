const Welcome = () => {
	return (
		<>
			<div className="welcome">
				<div className="welcomeLeft">
					<h1 className="welcomeMessage">
						{/* (make the words clickable and
						have an image on click) */}
						The place where you turn your ideas into reality welcome
						to Lenddy's web services
					</h1>

					<div className="subheader">
						<p>
							yo yo the name is Lenddy i like making web sites and
							apps that will sut your needs using the best
							technologies so what is your next big idea and when
							do you want to make it happen ?
						</p>
					</div>

					<div className="welcomeBtn">
						<button>to go see my resume</button>
						<button>to contact me</button>
						<button>go see my github</button>
						<button>go see the live projects</button>
					</div>
				</div>

				<div className="welcomeRight">
					<ol>
						<li>
							logo (make the it a circle and add box shadow or a
							blur effect(make it have the tree color in a loop
							that will change between the tree) )
						</li>
						<li>
							Like what you see (click here(this will be a btn
							that the use will be able to click one make an on
							hover event that changes the color of the btn )) to
							find out who made it
						</li>
					</ol>
				</div>
			</div>
		</>
	);
};

export default Welcome;
