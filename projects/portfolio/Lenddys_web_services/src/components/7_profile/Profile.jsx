import { useState } from "react";
import Lenddy from "../../assets/Lenddy.jpg";

// ?
// ?
// ?
// ?
// ?
// ?
// ?
// ?
// ?

// make the containers align    and make the show more be slower not instant with ease in and out maybe ?????

const Profile = () => {
	const [showMore, setShowMore] = useState(false);

	const fullParagraphStyles = {
		WebkitLineClamp: 12,
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
		display: "-webkit-box",
	};
	return (
		<div className="profile">
			<div className="profile_top">
				<h1>Hello There 👋🏼</h1>
			</div>
			<div className="profileContainer">
				<div className="content_container">
					<div
						className="profile_left"
						style={showMore ? { height: "750px" } : null}
					>
						<h1>About me i am Lenddy Morales</h1>
						<p style={showMore ? null : fullParagraphStyles}>
							I'm a 19-year-old Dominican boy who can barly dance
							bachata I reside in the United States and some day
							might move to Puerto rico. I embarked on my journey
							into higher education at the age of 17 with a major
							in computer engineering. However, I soon realized
							that the traditional college teaching approach
							didn't align with my learning style. <br /> I made
							the bold decision to drop out and seek alternative
							paths to gain knowledge. Just a month later, I
							joined a coding boot camp called{""}
							<a href="https://www.codingdojo.com/">
								Coding Dojo
							</a>
							{""}. This intensive four-month program pushed me to
							my limits as I strived to keep up with the
							fast-paced learning environment. Many nights were
							spent burning the midnight oil, often going to bed
							at 4 am and waking up at 11 am. Through laughter,
							tears, and forming strong friendships, I persevered,
							and it has paid off. I am now proud to call myself a
							full-stack developer.
							<br />
							<a href="https://www.codingdojo.com/">
								Coding Dojo
							</a>{" "}
							taught me invaluable skills, including thriving in
							high-pressure situations, both individually and as
							part of a cohort. I learned the importance of
							seeking help when needed and offering assistance to
							others. It ingrained in me the habit of learning
							from my mistakes and continually expanding my
							knowledge. <br /> My ultimate goal is to return to
							college one day and resume my computer engineering
							studies, with a possible focus on also becoming a
							game developer or even exploring carpentry.
							<br />
							In my free time, I indulge in my passion for video
							Games, Basketball, Baseball, Anime, Manga , Rock
							,Pop and Salsa . If any of this resonates with you
							or piques your interest, feel free to send me a
							message. Don't hesitate
						</p>
						<button
							className="btn"
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? "Show Less" : "Show More"}
						</button>
					</div>
					<div className="profile_center">
						<img src={Lenddy} alt=" profile picture" />
					</div>
					{/*make use of the resize attribute in css to be able to make the picture smaller or bigger*/}
					<div className="profile_right">
						<h1>Contact Me</h1>

						<textarea
							name=""
							id=""
							cols="65"
							rows="20"
							placeholder="Insert Your Message Here"
						></textarea>
						<button className="btn"> Send Message</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
