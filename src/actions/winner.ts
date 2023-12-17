"use server";

export const luckyNumber = (name: string) =>
	`Hello ${name} from server, your lucky number is ${Math.floor(
		Math.random() * 100,
	)}.`;
