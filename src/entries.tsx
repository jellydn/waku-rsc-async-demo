import { lazy } from "react";
import { defineEntries } from "waku/server";

const App = lazy(() => import("./routes/index.js"));
const About = lazy(() => import("./routes/about.js"));

export default defineEntries(
	// renderEntries
	async (input) => {
		return {
			App: <App name={input || "Waku RSC Demo"} />,
			About: <About />,
		};
	},
	// getBuildConfig
	async () => {
		return {
			"/": {
				entries: [[""]],
			},
		};
	},
	// getSsrConfig
	async (pathStr) => {
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
