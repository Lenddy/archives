import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ["en", "es"],
		fallbackLng: "en",
		detection: {
			order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
			caches: ["cookie"],
		},
		backend: {
			loadPath: "./src/components/languages/{{lng}}/translation.json",
		},
		react: { useSuspense: false },
	});
const loadingMarkup = (
	<div
		className="py-4 text-center"
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: "#00ffff",
			fontSize: "200px",
		}}
	>
		<h3>Loading..</h3>
	</div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Suspense fallback={loadingMarkup}>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</Suspense>
);
