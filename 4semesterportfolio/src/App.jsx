import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="h-dvh flex flex-col">
			<NavBar />
			<div className="flex-1 bg-no-repeat bg-center bg-cover bg-fixed bg-[url(https://miro.medium.com/v2/resize:fit:1094/1*QFR92mUXfyh6Y_OeG-m0eA.jpeg)]">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
