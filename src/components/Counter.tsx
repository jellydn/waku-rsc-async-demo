"use client";

import { useState } from "react";
import { Box } from "./Box.js";

export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<Box>
			<p className="text-xl font-bold">Count: {count}</p>
			<button
				className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
				type="button"
				onClick={() => setCount((c) => c + 1)}
			>
				Increment
			</button>
		</Box>
	);
};
