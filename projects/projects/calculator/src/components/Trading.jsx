import axios from "axios";
import { useState } from "react";
// import Alpaca from "@alpacahq/alpaca-trade-api";

const Trading = () => {
	const [info, setInfo] = useState([]);

	axios
		.get("https://binance.com/api/v3/exchangeInfo")
		.then((res) => console.log(res))
		.then((err) => console.log(err));

	return <div>Alpaca API Example</div>;
};

export default Trading;
