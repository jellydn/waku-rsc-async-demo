/// Async Server Component
/// <reference types="react/experimental" />
import { Suspense } from "react";

import { Counter } from "./Counter.js";
import { CountDown } from "./CountDown.js";
import { Box } from "./Box.js";
import { Separator } from "./Separator.js";

const App = ({ name }: { name: string }) => {
	const date = new Date();
	date.setSeconds(date.getSeconds() + 10);
	return (
		<div className="container p-4 mx-auto border-2 border-blue-400 border-dashed">
			<h1 className="text-3xl font-bold underline">Hello {name}!!</h1>
			<h3 className="text-lg">This is a server component.</h3>
			<Suspense fallback="Pending...">
				<ServerMessage />
			</Suspense>
			<Separator />
			<Counter />
			<Separator />
			<Box>
				<p className="text-xl font-bold">Count down</p>
				<p>
					The big event is happening <CountDown target={date.toISOString()} />.
				</p>
			</Box>
		</div>
	);
};

const ServerMessage = async () => {
	const createdAt = await new Promise<string>((resolve) =>
		setTimeout(() => {
			resolve(new Date().toLocaleTimeString());
		}, 2000),
	);
	return (
		<p className="p-2 mt-4 bg-green-200 animate-bounce">
			Hello from server at {createdAt}
		</p>
	);
};

export default App;
