import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0, x: 0, y: 20, filter: "blur(20px)" },
	enter: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
	exit: { opacity: 0, x: 0, y: 20, filter: "blur(20px)" },
};

const AnimatedLayout = ({ children }) => {
	return (
		<motion.div
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ duration: 0.5, type: "easeInOut" }}
			className="relative"
		>
			{children}
		</motion.div>
	);
};

export default AnimatedLayout;
