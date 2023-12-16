import { lazy } from "react";
import { defineEntries } from "waku/server";
import logger from "./logger.js";

const App = lazy(() => import("./routes/index.js"));
const About = lazy(() => import("./routes/about.js"));

export default defineEntries(
	// renderEntries
	async (input) => {
		logger.info("renderEntries", { input });
		return {
			App: <App name={input || "Waku RSC Demo"} />,
			About: <About />,
		};
	},
	// getBuildConfig
	async () => {
		logger.info("getBuildConfig");
		return {
			"/": {
				entries: [[""]],
			},
		};
	},
	// getSsrConfig
	async (pathStr) => {
		logger.info("getSsrConfig", { pathStr });
		switch (pathStr) {
			case "/":
				return {
					input: "",
					unstable_render: ({ createElement, Slot }) =>
						createElement(Slot, { id: "App" }),
				};
			case "/about":
				return {
					input: "",
					unstable_render: ({ createElement, Slot }) =>
						createElement(Slot, { id: "About" }),
				};
			default:
				return null;
		}
	},
);
