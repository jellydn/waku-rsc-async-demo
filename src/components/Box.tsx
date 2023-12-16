import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function Box({ children }: Props) {
	return (
		<div className="container p-4 mx-auto">
			<h3 className="mt-2 text-lg font-semibold">
				⬇ This is a client component
			</h3>
			<div className="p-4 mt-2 rounded-md border-2 border-blue-500 bg-sky-50">
				{children}
			</div>
		</div>
	);
}
