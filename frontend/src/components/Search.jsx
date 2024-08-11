// src/components/Search.js
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Input } from "../components/ui/input";
import Modal from "../components/ui/Modal";
import ResponseCard from "./ResponseCard";
import axiosInstance from "@/axiosInstance";
import data from "../assets/data.json"; // Importing the JSON data
import toast from "react-hot-toast"; // Import toast

const Search = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = Object.entries(data);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setResults(items);
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    if (value.trim() === "") {
      setQuery("");
      setResults(items);
      return;
    } else {
      setQuery(value);
    }

    // regex for searching
    if (value && value !== "x") {
      const regexPattern = value.replace(/x/g, "\\d");
      const regex = new RegExp(`^${regexPattern}`, "i");

      const filteredResults = items.filter(
        ([key, description]) =>
          regex.test(key) ||
          description.toLowerCase().includes(value.toLowerCase()),
      );
      setResults(filteredResults);
    } else {
      setResults(items);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults(items);
    toast.success("Search cleared!");
  };

  const saveResults = async () => {
    if (!name) {
      toast.error("Please enter a name for the list");
      return;
    }
    const res = await axiosInstance.post("/list/save", {
      name,
      id: user.data.user._id,
      items: results.map(([id, name]) => ({
        id,
        name,
        image: `https://http.dog/${id}.jpg`,
      })),
    });

    if (res.data) {
      toast.success("Results saved successfully");
    } else {
      toast.error("Failed to save results");
    }
    setIsModalOpen(false);
    setName("");
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Search Page</h1>
      <p className="text-lg mb-4">
        Use the search feature to find specific items.
      </p>
      <div className="mb-6 flex justify-center items-center space-x-4">
        <Input
          value={query}
          onChange={handleSearch}
          placeholder="Search for an item..."
          className="border p-2 rounded w-3/4"
        />

        <Button
          onClick={() => setIsModalOpen(true)}
          variant="default"
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          Save
        </Button>

        <Button onClick={clearSearch} variant="destructive">
          Clear
        </Button>
      </div>
      {query && (
        <p className="text-lg font-bold text-gray-700">
          {results.length} results found
        </p>
      )}
      <div className="grid grid-cols-4 gap-4">
        {results.map(([key, description]) => (
          <ResponseCard
            key={key}
            code={key}
            title={description}
            image={`https://http.dog/${key}.jpg`} // Update to use dynamic image URL
          />
        ))}
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Save Results</h2>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name for the list"
          className="border p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end space-x-2">
          <Button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </Button>
          <Button
            onClick={saveResults}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Search;
