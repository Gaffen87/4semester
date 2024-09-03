import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="bg-gray-800 sticky top-0 z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex sm:flex-row flex-col items-center justify-between h-16">
					<div className="flex-shrink-0">
						<span className="text-white text-lg font-semibold">
							<Link to="/">Aske Lysgaard | Datamatiker studerende</Link>
						</span>
					</div>
					<div className="">
						<div className="sm:ml-10 flex items-baseline space-x-4">
							<NavLink
								to="/react"
								className={({ isActive }) =>
									isActive
										? "text-gray-500 hover:bg-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500"
										: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								}
							>
								React
							</NavLink>
							<NavLink
								to="/sikkerhed"
								className={({ isActive }) =>
									isActive
										? "text-gray-500 hover:bg-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500"
										: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								}
							>
								IT-Sikkerhed
							</NavLink>
							<NavLink
								to="/portfolio"
								className={({ isActive }) =>
									isActive
										? "text-gray-500 hover:bg-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500"
										: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								}
							>
								Portfolio
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
