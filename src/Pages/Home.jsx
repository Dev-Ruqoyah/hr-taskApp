import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-2xl p-6 text-center bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">Question App</h1>
        <p className="mt-4 text-lg text-gray-600">
          Create, manage, and export your own set of questions in PDF format. A simple and efficient way to structure quizzes and assessments.
        </p>
        <Link to="/create-questions">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
