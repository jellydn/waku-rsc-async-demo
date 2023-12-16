"use client";

import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="container p-4 mx-auto">
			<div className="p-4 m-4 rounded-md border-2 border-blue-500">
				<p className="text-xl font-bold">Count: {count}</p>
				<button
					className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
					type="button"
					onClick={() => setCount((c) => c + 1)}
				>
					Increment
				</button>
				<h3 className="mt-4 text-lg font-semibold">
					This is a client component.
				</h3>
			</div>
		</div>
	);
};
