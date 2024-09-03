import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import "./index.css";
import HomePage from "./Pages/HomePage.jsx";
import SubPage from "./Pages/SubPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import fileList from "./FileList.js";

const reactBlogs = fileList.Blogs.React;
const reactGoals = fileList.Goals.React;
const reactPlans = fileList.Plans.React;
const securityBlogs = fileList.Blogs.Security;
const securityGoals = fileList.Goals.Security;
const securityPlans = fileList.Plans.Security;

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/react",
				element: <SubPage path="/react" />,
				children: [
					{
						path: "/react/læringsplan",
						element: (
							<BlogPage path="Plans" subject="React" files={reactPlans} />
						),
					},
					{
						path: "/react/læringsmål",
						element: (
							<BlogPage path="Goals" subject="React" files={reactGoals} />
						),
					},
					{
						path: "/react/blog",
						element: (
							<BlogPage path="Blogs" subject="React" files={reactBlogs} />
						),
					},
				],
			},
			{
				path: "/sikkerhed",
				element: <SubPage path="/sikkerhed" />,
				children: [
					{
						path: "/sikkerhed/læringsplan",
						element: (
							<BlogPage path="Plans" subject="Security" files={securityPlans} />
						),
					},
					{
						path: "/sikkerhed/læringsmål",
						element: (
							<BlogPage path="Goals" subject="Security" files={securityGoals} />
						),
					},
					{
						path: "/sikkerhed/blog",
						element: (
							<BlogPage path="Blogs" subject="Security" files={securityBlogs} />
						),
					},
				],
			},
			{
				path: "/portfolio",
				element: <h1 className="text-center text-3xl pt-10">Portfolio Page</h1>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
