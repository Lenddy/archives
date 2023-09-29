const What_I_Do = () => {
	return (
		<div>
			<div className="whatIDo">
				<div className="whatIDo_top">
					<div className="text">
						<h1>What I Do</h1>
						{/* make this appear with a animation read bellow */}
						{/* <h1>full-stack engineer</h1>
						<h1>pc building</h1> */}
					</div>

					{/* make this have a banner on top that changes from What do i
					do --
					{">"} full-stack engineer --{">"} pc building --{">"}{" "}
					instructor (have a blur effect that follow the words and
					make the word appear from the left go past the middle of the
					screen then come back the blur effect should also do the
					same but delayed ) */}
				</div>

				<div className="whatIDo_middle">
					<div className="whatIDo_left">
						{" "}
						<h1>left</h1>
					</div>
					<div className="whatIDo_right">
						<h1>right</h1>
					</div>
					<div className="whatIDo_bottom">
						<h1>bottom</h1>
					</div>
				</div>

				{/* <ol>
					<li>
						i am a full stack web developer my job is to make the
						most perfect websites starting from you
						view,functionality and how the data is store in a db
						(keep adding to this later one )
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
