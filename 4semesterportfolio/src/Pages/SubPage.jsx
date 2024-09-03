import { NavLink, Outlet } from "react-router-dom";

const SubPage = ({ path }) => {
	return (
		<div>
			<nav className="bg-gray-700">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-center h-16">
						<div className="flex items-baseline space-x-4">
							<NavLink
								to={`${path}/læringsplan`}
								className={({ isActive }) =>
									isActive
										? "text-black hover:scale-110 px-3 py-2 rounded-md text-sm font-medium bg-gray-300 transition-all duration-500"
										: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:scale-110 transition-all duration-500"
								}
							>
								Læringsplan
							</NavLink>
							<NavLink
								to={`${path}/læringsmål`}
								className={({ isActive }) =>
									isActive
										? "text-black hover:scale-110 px-3 py-2 rounded-md text-sm font-medium bg-gray-300 transition-all duration-500"
										: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:scale-110 transition-all duration-500"
								}
							>
								Læringsmål
							</NavLink>
							<NavLink
								to={`${path}/blog`}
								className={({ isActive }) =>
									isActive
										? "text-black hover:scale-110 px-3 py-2 rounded-md text-sm font-medium bg-gray-300 transition-all duration-500"
										: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:scale-110 transition-all duration-500"
								}
							>
								Blog
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<Outlet />
			</div>
		</div>
	);
};

export default SubPage;
