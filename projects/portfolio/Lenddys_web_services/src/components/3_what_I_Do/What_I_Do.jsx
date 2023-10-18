const What_I_Do = () => {
	return (
		<div>
			<div className="whatIDo hidden">
				<div className="whatIDo_top">
					<div className="text">
						<h1>
							My Experience
							{/* {what_I_Do ? "is visible" : "not visible"} */}
						</h1>
						{/* make this appear with a animation read bellow */}
						{/* <h1>full-stack engineer</h1>
						<h1>pc building</h1> */}
					</div>

					{/* make this have a banner on top that changes from What do i
					do --
					{">"} full-stack engineer --{">"} pc building --{">"}{" "}
					Tutor (have a blur effect that follow the words and
					make the word appear from the left go past the middle of the
					screen then come back the blur effect should also do the
					same but delayed ) */}
				</div>

				<div className="whatIDo_middle">
					<div className="whatIDo_left">
						<h1>full-stack Developer</h1>
						{/* <p>
							i am a full stack web developer my job is to make
							websites the will adapt to your wants and needs
							starting from the visual interface(front end ),
							functionality(back-end), and how the data is
							stored(data base)
						</p> */}
						<p>
							{" "}
							As a full-stack developer,my role is to craft
							websites that adapt to your preferences, starting
							from the front-end visual interface, progressing
							through back-end functionalities, and extending to
							robust database management. my key responsibilities
							involve designing visually appealing and
							user-friendly front-end interfaces, developing the
							back-end logic, including server-side processes and
							APIs, and ensuring efficient and secure data storage
							in databases. Additionally, i create and maintain
							web services to facilitate seamless communication
							between these components. My work extends to adding
							new features, rigorous testing, bug fixing, and
							collaborating with cross-functional teams on diverse
							projects. In essence, i am the architect of digital
							solutions, ensuring they align with clients' needs
							and deliver top-notch user experiences while
							maintaining functionality and data integrity.
						</p>
					</div>
					<div className="whatIDo_right">
						<div>
							<h1>PC Builder</h1>
							<p>
								As a PC builder enthusiast who makes custom
								personal computers (PCs) tailored to you
								specifications. my expertise spans to component
								selection, assembly, and system optimization. PC
								builders begin by meticulously choosing CPU,
								GPU, motherboard, RAM, storage, and other
								components based on performance, compatibility,
								and budget considerations.I will install the
								operating system and drivers, rigorously test
								each aspect to confirm flawless functionality.
								In addition to building new PCs, i also provide
								upgrade and repair services, staying updated
								with the latest hardware and software trends.
								delivering systems optimized for gaming, content
								creation, professional work, and more.
							</p>
						</div>
					</div>
				</div>
				<div className="whatIDo_bottom">
					<h1>Tutor</h1>
					<p>
						{/* i will be able to help you get a basic understanding of
						wed development and pc building to the point where you
						can doit on your own */}
						As a tutor, my focus is to guide you to have a
						fundamentals understanding of web development. Together,
						we will embark on a journey that equips you with the
						knowledge and skills to confidently navigate the world
						of web development at its core. Through hands-on
						learning , you'll build a solid foundation, enabling you
						to master the essentials of web development. We'll start
						with HTML and CSS, the building blocks of the web, and
						them move into JavaScript and other key technologies,
						giving you the proficiency needed to create captivating
						websites and dynamic web applications. By the end of our
						journey, you will possess the confidence and know-how to
						tackle web development projects independently, setting
						you on a path to explore endless opportunities for
						innovation and self-reliance in this field.
					</p>
				</div>

				{/* <ol>
					<li>
						
					</li>
					<li>talk about what front back and dbs are </li>
					<li>talk about building computer </li>
					<li>
						talk abut teaching(instructing) and researching
						technologies that the user might be interested on
					</li>
				</ol> */}
			</div>
		</div>
	);
};

export default What_I_Do;
