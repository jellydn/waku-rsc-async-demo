/// Async Server Component
/// <reference types="react/experimental" />
import { Suspense } from "react";
import { Header } from "../components/Header.js";
import { Separator } from "../components/Separator.js";
import { Counter } from "../components/Counter.js";
import { Box } from "../components/Box.js";
import { CountDown } from "../components/CountDown.js";
import { RandomBox } from "../components/RandomBox.js";
import { luckyNumber } from "../actions/winner.js";

type ServerFunction<T> = T extends (...args: infer A) => infer R
	? (...args: A) => Promise<R>
	: never;

const App = ({ name }: { name: string }) => {
	const date = new Date();
	date.setSeconds(date.getSeconds() + 30);
	return (
		<div className="container p-4 mx-auto border-2 border-blue-400 border-dashed">
			<Header site={name} />

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
			<Separator />

			<Box>
				<RandomBox
					generateLuckyNumber={
						luckyNumber as unknown as ServerFunction<typeof luckyNumber>
					}
				/>
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
