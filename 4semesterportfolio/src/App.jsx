import NavBar from "./Components/NavBar";
import { FaArrowUpLong } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="h-dvh flex flex-col">
			<NavBar />
			<div className="flex-1 bg-no-repeat bg-center bg-cover bg-fixed bg-[url(https://miro.medium.com/v2/resize:fit:1094/1*QFR92mUXfyh6Y_OeG-m0eA.jpeg)]">
				<Outlet />
				<button
					onClick={() => {
						scrollTo({ top: 0, behavior: "smooth" });
					}}
					className="bg-gray-600 rounded-full w-20 h-20 fixed bottom-10 right-32 items-center justify-center opacity-65 hover:animate-bounce hidden sm:flex"
				>
					<FaArrowUpLong size={50} className="text-white" />
				</button>
			</div>
		</div>
	);
}

export default App;
