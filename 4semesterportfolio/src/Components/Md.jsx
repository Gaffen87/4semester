import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Md = ({ post }) => {
	return (
		<div className="flex flex-col items-center">
			<ReactMarkdown
				className="max-w-sm sm:max-w-full bg-gray-100 bg-opacity-85 backdrop-blur mb-4 rounded-md p-8 prose-lg prose-a:text-blue-500 prose-a:underline prose-ul:list-disc"
				components={{
					code({ inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<SyntaxHighlighter
								style={style}
								language={match[1]}
								PreTag="div"
								{...props}
							>
								{String(children).replace(/\n$/, "")}
							</SyntaxHighlighter>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				}}
			>
				{post}
			</ReactMarkdown>
		</div>
	);
};

export default Md;
