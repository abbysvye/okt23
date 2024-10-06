import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import React from "react";
import AOS from "aos";

export default function Home() {
	const [isClicked, setIsClicked] = React.useState(false);
	const [isNextClicked, setIsNextClicked] = React.useState(false);
	const [isZoomed, setIsZoomed] = React.useState(false);

	const handleLoveClick = () => {
		setIsClicked(true);
		setTimeout(() => {
			setIsZoomed(true);
		}, 1000);
	};

	const handleNextClick = () => {
		setIsNextClicked(true);
		setTimeout(() => {
			setIsNextClicked(false);
			setIsZoomed(true);
		}, 1000);
	};

	return (
		<div className="love-container flex items-center justify-center w-full h-screen">
			{!isClicked && (
				<div className="love-icon" onClick={handleLoveClick}>
					❤️
				</div>
			)}
			{isClicked && <div className="love-icon zoom-out">❤️</div>}
			{isZoomed && (
				<span className="h-screen flex items-center justify-center flex-col gap-40">
					<Card className={`${isNextClicked ? "animation-card" : ""}`}>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>
								Card
								<img src="https://tenor.com/pQmy9i3Y1cg.gif" alt="" />
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Card Content</p>
						</CardContent>
						<CardFooter>
							<p>Card Footer</p>
						</CardFooter>
					</Card>

					<Button onClick={handleNextClick} variant={"outline"}>
						Click Me
					</Button>
				</span>
			)}
		</div>
	);
}
