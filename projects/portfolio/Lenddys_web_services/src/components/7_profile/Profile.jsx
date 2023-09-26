import Lenddy from "../../assets/Lenddy.jpg";

const Profile = () => {
	return (
		<>
			<div className="mainTopContainer">
				<div className="top_main_top"> hello</div>
				<div className="lcr_container">
					<div className="top_main_left"> hello</div>
					<div className="top_main_center">
						<img src={Lenddy} alt=" profile picture" />
					</div>
					{/* make use of the resize attribute in css to be able to make the picture smaller or bigger */}
					<div className="top_main_right">errrr</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
