import html from "../../assets/tech_logos/html5-color.svg";
import css from "../../assets/tech_logos/Css3-color.svg";
import js from "../../assets/tech_logos/javascript-color.svg";
import py from "../../assets/tech_logos/python-color.svg";
import csharp from "../../assets/tech_logos/csharp-color.svg";
import react from "../../assets/tech_logos/react-color.svg";
import flask from "../../assets/tech_logos/flask-color.svg";
import dotnet from "../../assets/tech_logos/dotnet-color.svg";
import node from "../../assets/tech_logos/nodedotjs-color.svg";
import mysql from "../../assets/tech_logos/mysql-color.svg";
import mongodb from "../../assets/tech_logos/mongodb-color.svg";

const Tools = () => {
	return (
		<div className="tool_container">
			<h1>Tools</h1>
			<div className="tools">
				{/* make a grid with the technologies that you know make an animation
			that will make the picture items appear in random order if you want
			you can have a description of them make a like to tell the use what
			every technology is so you might want to make a link to their home
			page get the icons from https://simpleicons.org/ */}

				{/*!!!! use the blinc effect from anima.net */}

				{/* languages */}
				<div className="languages">
					<a
						href="https://www.w3schools.com/html/html_intro.asp"
						target="_blank"
						rel="noreferrer"
					>
						<div className="tech_logos">
							<img src={html} alt="" />
							<p>HTML</p>
						</div>
					</a>

					<a
						href="https://www.w3schools.com/html/html_intro.asp"
						target="_blank"
						rel="noreferrer"
					>
						<div className="tech_logos">
							<img src={css} alt="" />
							<p>CSS</p>
						</div>
					</a>

					<a
						href="https://www.w3schools.com/html/html_intro.asp"
						target="_blank"
						rel="noreferrer"
					>
						<div className="tech_logos">
							<img src={js} alt="" />
							<p>JAVASCRIPT</p>
						</div>
					</a>
					<div className="tech_logos">
						<img src={py} alt="" />
						<p>PYTHON</p>
					</div>
					<div className="tech_logos">
						<img src={csharp} alt="" />
						<p>C SHARP</p>
					</div>
				</div>

				{/* frame works and libraries*/}
				<div className="frameworks_libraries">
					<div className="tech_logos">
						<img src={react} alt="" />
						<p>REACT</p>
					</div>
					<div className="tech_logos">
						<img src={flask} alt="" />
						<p>FLASK</p>
					</div>
					<div className="tech_logos">
						<img src={dotnet} alt="" />
						<p>DOT NET</p>
					</div>
					<div className="tech_logos">
						<img src={node} alt="" />
						<p>NODEJS</p>
					</div>
				</div>
				{/* dbs*/}
				<div className="databases">
					<div className="tech_logos">
						<img src={mysql} alt="" />
						<p>MySQL</p>
					</div>
					<div className="tech_logos">
						<img src={mongodb} alt="" />
						<p>MONGODB</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tools;
