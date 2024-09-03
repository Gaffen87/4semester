import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyArxG8OsSsjjUFmG0LirT_URwMBUatf7wQ",
	authDomain: "askelysgaard-6f50f.firebaseapp.com",
	projectId: "askelysgaard-6f50f",
	storageBucket: "askelysgaard-6f50f.appspot.com",
	messagingSenderId: "947287628834",
	appId: "1:947287628834:web:6e96d02f6d6a1af1c27e7b",
	measurementId: "G-13T6VVGX6D",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getDocuments = async (subject) => {
	const docs = [];
	const blogDocId = "W7xmCIi7S8SeapDYsUOU";

	const query = await getDocs(collection(db, "blogs", blogDocId, subject));
	query.forEach((doc) => {
		docs.push({ id: doc.id, ...doc.data() });
	});

	return docs;
};
