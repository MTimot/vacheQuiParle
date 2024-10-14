import "dotenv/config";
import { say } from "cowsay";

console.log(
	say({
		text: `Je suis ${process.env.NAME} du campus de ${process.env.CAMPUS}`,
		e: "oO",
		T: "U ",
	}),
);
