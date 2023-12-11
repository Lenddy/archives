import { useState } from "react";

const Test = () => {
	const [activeOption, setActiveOption] = useState(1);

	const handleOptionClick = (option) => {
		setActiveOption(option);
	};
	return (
		<div className="project_container">
			<div className="options">
				<div
					className={`option ${activeOption === 1 ? "active" : ""}`}
					onClick={() => handleOptionClick(1)}
					// style="--optionBackground: url(https://raw.githubusercontent.com/Programith/Images/main/background_01.jpg);"
				>
					<div className="label">
						<div className="icon">
							<i className="fas fa-walking"></i>
						</div>
						<div className="info">
							<div className="main">Ultricies</div>
							<div className="sub">Elit ut aliquam purus sit</div>
						</div>
					</div>
				</div>
				<div
					className={`option ${activeOption === 2 ? "active" : ""}`}
					onClick={() => handleOptionClick(2)}
					// style="--optionBackground: url(https://raw.githubusercontent.com/Programith/Images/main/background_02.jpg);"
				>
					<div className="label">
						<div className="icon">
							<i className="fas fa-snowflake"></i>
						</div>
						<div className="info">
							<div className="main">Luctus</div>
							<div className="sub">
								Arcu cursus vitae congue mauris
							</div>
						</div>
					</div>
				</div>
				<div
					className={`option ${activeOption === 3 ? "active" : ""}`}
					onClick={() => handleOptionClick(3)}
					// style="--optionBackground: url(https://raw.githubusercontent.com/Programith/Images/main/background_03.jpg);"
				>
					<div className="label">
						<div className="icon">
							<i className="fas fa-tree"></i>
						</div>
						<div className="info">
							<div className="main">Purus</div>
							<div className="sub">
								Neque vitae tempus quam pellentesque
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;

{
	/* <script>
$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
});
</script> */
}
