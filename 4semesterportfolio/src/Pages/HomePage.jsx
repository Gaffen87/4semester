import { FaLinkedin, FaGithub } from "react-icons/fa";

const HomePage = () => {
	return (
		<div className="flex flex-col h-full justify-center ">
			<main className="w-full mx-auto px-4 py-12 flex flex-col items-center bg-black bg-opacity-50 backdrop-blur-lg">
				<h1 className="text-4xl font-bold text-white mb-4 text-center">
					Portefølje til 4. semester
				</h1>
				<div className="flex space-x-40 mt-16">
					<a
						className="text-blue-300 text-xl flex flex-col items-center hover:text-white hover:scale-150 transition-all duration-1000 *:hover:-translate-y-2"
						href="https://www.linkedin.com/in/aske-lysgaard/"
					>
						<span className="text-white transition-all duration-1000">
							<FaLinkedin size={50} />
						</span>
						LinkedIn
					</a>
					<a
						className="text-blue-300 text-xl flex flex-col items-center hover:text-white hover:scale-150 transition-all duration-1000 *:hover:-translate-y-2"
						href="https://github.com/Gaffen87"
					>
						<span className="text-white transition-all duration-1000">
							<FaGithub size={50} />
						</span>
						Github
					</a>
				</div>
			</main>
		</div>
	);
};

export default HomePage;
