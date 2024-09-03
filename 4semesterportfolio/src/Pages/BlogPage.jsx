import AnimatedLayout from "../Components/AnimatedLayout";
import Md from "../Components/Md";
import { useEffect, useState } from "react";

const BlogPage = ({ subject, files, path }) => {
	const [posts, setPosts] = useState([]);
	console.log(files);

	useEffect(() => {
		setPosts([]);
		files.forEach((file) => {
			fetch(`/Posts/${path}/${subject}/${file}`)
				.then((response) => response.text())
				.then((text) => {
					setPosts((prev) => {
						if (!prev.includes(text)) {
							return [...prev, text];
						}
						return prev;
					});
				});
		});
	}, [files, path, subject]);

	return (
		<AnimatedLayout>
			<div className="flex flex-col items-center">
				{posts.map((post, index) => (
					<Md key={index} post={post} />
				))}
			</div>
		</AnimatedLayout>
	);
};

export default BlogPage;
