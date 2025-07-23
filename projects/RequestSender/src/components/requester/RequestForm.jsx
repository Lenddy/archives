import React from "react";

function RequestForm() {
	return (
		<div className="Container-request-form">
			<form className="request-form">
				<h2>Request Form</h2>
				<div className="request-form-name-date-union request-form-union" request-form-union>
					<input type="date" name="" id="" />

					<select name="" id="" className="request-form-select-name">
						<option selected disabled value="">
							Select Name
						</option>
						<option value="name 1">name 1</option>
						<option value="name 2">name 2</option>
						<option value="name 3">name 3</option>
						<option value="name 4">name 4</option>
						<option value="name 5">name 5</option>
					</select>
				</div>

				<div className="request-form-amount-item-union request-form-union">
					<div className="">
						<input type="number" name="" id="" placeholder="Enter Quantity" />
					</div>

					<div className="">
						<select name="" id="">
							<option selected disabled value="">
								Select Item
							</option>
							<option value="item 1">item 1</option>
							<option value="item 2">item 2</option>
							<option value="item 3">item 3</option>
							<option value="item 4">item 4</option>
							<option value="item 5">item 5</option>
						</select>
					</div>
				</div>
			</form>
		</div>
	);
}

export default RequestForm;
