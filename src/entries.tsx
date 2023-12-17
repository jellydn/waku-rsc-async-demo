import { lazy } from "react";
import { defineEntries } from "waku/server";

const App = lazy(() => import("./routes/index.js"));

// TODO: Will revise this again after https://github.com/dai-shi/waku/issues/246
export default defineEntries(
	// renderEntries
	async (input) => {
		return {
			App: <App name={input || "Waku RSC Demo"} />,
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
			default:
				return null;
		}
	},
);
