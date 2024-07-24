import { Button } from "../components/ui/button"; // Import ShadCN Button component
import { Card } from "../components/ui/card"; // Import ShadCN Card component
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold mb-4 text-gray-800">
          HTTP Response Codes
        </h1>
        <p className="text-xl text-gray-600 mx-auto w-2/3">
          Learn about HTTP response codes and their crucial role in web
          communication. Discover how these codes inform you about the status of
          your requests, help diagnose issues, and guide the development of
          robust web applications.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <Card className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Search Codes
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Find specific HTTP response codes and their meanings.
          </p>
          <Link to="/search">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Search Now
            </Button>
          </Link>
        </Card>

        <Card className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Explore Lists
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Explore your saved lists of HTTP response codes.
          </p>
          <Link to="/lists">
            <Button className="bg-green-500 text-white hover:bg-green-600">
              Explore Lists
            </Button>
          </Link>
        </Card>

        <Card className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex-1 max-w-xs">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Why It Matters
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Understand the importance of HTTP response codes.
          </p>
          <Link to="/about">
            <Button className="bg-purple-500 text-white hover:bg-purple-600">
              Learn More
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;
