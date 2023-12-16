"use client";

import { useState, useTransition } from "react";

export const RandomBox = ({
	generateLuckyNumber,
}: {
	generateLuckyNumber: (name: string) => Promise<string>;
}) => {
	const [text, setText] = useState<string | Promise<string>>("");
	const [isPending, startTransition] = useTransition();
	const handleClick = () => {
		startTransition(() => {
			setText(generateLuckyNumber("IT Man"));
		});
	};
	return (
		<div className="p-4">
			<p>
				<button
					className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
					type="button"
					onClick={handleClick}
				>
					{text ? text : "Press me!"}
				</button>{" "}
				{isPending ? "Pending..." : ""}
			</p>
		</div>
	);
};
