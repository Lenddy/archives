import Logo from "../../assets/LM.png";

const Welcome = () => {
	return (
		<>
			<div className="welcome">
				<div className="welcomeLeft">
					<h1 className="welcomeMessage">
						{/* (make the words clickable and
						have an image on click) */}
						The Place To Turn Your Ideas Into Reality Welcome To
						Lenddy's Web Services
					</h1>

					<div className="subheader">
						<p>
							Yo Yo the name is Lenddy I like making web sites and
							apps that will sut your needs using the best
							technologies , so what is your next big idea and
							when do you want to make it happen ?
						</p>
					</div>

					<div className="welcomeBtn">
						{/*  */}
						<button>View Resume</button>
						<button>Github</button>
						<button>Projects</button>
						<button>Contact Me</button>
					</div>
				</div>

				<div className="welcomeRight">
					<img className="logo" src={Logo} alt="logo" />
					<p>
						Like the logo{" "}
						<span>
							<a
								href="https://instagram.com/merv_agency?igshid=OGQ5ZDc2ODk2ZA=="
								target="_blank"
								rel="noreferrer"
							>
								click here
							</a>
						</span>{" "}
						to see who made it
					</p>
					{/* <ol>
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
					</ol> */}
				</div>
			</div>
		</>
	);
};

export default Welcome;
