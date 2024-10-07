import { Button } from "@/components/ui/button";
import React from "react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
	const { toast } = useToast();
	const [isClicked, setIsClicked] = React.useState(false);
	const [isNextClicked, setIsNextClicked] = React.useState(false);
	const [isZoomed, setIsZoomed] = React.useState(false);
	const [sumClick, setSumClick] = React.useState(0);

	const [maxClick, setMaxClick] = React.useState(false);

	const listContent = [
		{
			url: "https://media.tenor.com/tqRmCBNb4nYAAAAi/tonton-tonton-friends.gif",
			text: "Hallo-hallo teman-teman",
		},
		{
			url: "https://media.tenor.com/_XdLMFuS74wAAAAi/peach-goma-fan-mouth-summer.gif",
			text: "Selamat ulang tahun ya..",
		},
		{
			url: "https://media.tenor.com/-a-lJorbzIIAAAAi/peach-and-goma.gif",
			text: "Semoga sehat selalu",
		},
	];

	const handleLoveClick = () => {
		setIsClicked(true);
		setTimeout(() => {
			setIsZoomed(true);
		}, 1000);
	};

	const handleNextClick = () => {
		if (sumClick === listContent.length - 1) {
			setMaxClick(true);
			setIsNextClicked(false);
		} else {
			setSumClick(sumClick + 1);
			setIsNextClicked(true);

			setTimeout(() => {
				setIsNextClicked(false);
				setIsZoomed(true);
			}, 1000);
		}
	};

	return (
		<div className="flex items-center justify-center w-full h-screen flex-col gap-32">
			<div className="w-full h-[40rem] flex items-center justify-center flex-col">
				<div
					className={`love-icon text-xl animate-pulse duration-1200 ${
						isClicked ? "hidden" : "flex"
					}`}
					onClick={handleLoveClick}>
					❤️
				</div>
				<div className={`love-icon zoom-out  ${isClicked ? "relative" : "hidden"}`}>❤️</div>
				{isZoomed && (
					<div
						className={`flex items-center justify-center flex-col gap-10 rounded-lg border shadow-xl w-[20rem] h-[25rem] ${
							isNextClicked ? "animation-card-right" : "animation-card-left"
						}`}>
						<span className="flex items-center justify-center flex-col gap-10">
							<div className="w-40 rounded-lg overflow-hidden">
								<img src={listContent[sumClick].url} alt="" />
							</div>
							<p>{listContent[sumClick].text}</p>
						</span>
					</div>
				)}
			</div>

			{!isZoomed ? (
				<p
					className={`font-semibold ${isClicked ? "animation-ease-bottom" : "relative"}`}
					onClick={() => {
						toast({
							description: "Yang diklik 💗love nya bukan textnya sayang 🥰",
						});
					}}>
					-- klik love nya --
				</p>
			) : (
				<div
					className={`bg-transparent flex gap-2 items-center justify-center py-1 px-2 rounded-sm cursor-pointer ${
						isZoomed ? "animate-in" : ""
					} `}
					onClick={handleNextClick}>
					<img
						src="https://media.tenor.com/KuW4uOyJB9IAAAAj/mochi-peach.gif"
						alt=""
						className="w-7 animate-pulse"
					/>
					<p className="font-semibold mt-1">lanjut</p>
					<img
						src="https://media.tenor.com/KuW4uOyJB9IAAAAj/mochi-peach.gif"
						alt=""
						className="w-7 animate-pulse"
					/>
				</div>
			)}
		</div>
	);
}
