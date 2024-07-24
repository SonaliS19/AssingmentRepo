// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          About HTTP
        </h1>
        <p className="text-lg text-gray-600">
          HTTP (Hypertext Transfer Protocol) is the foundation of data
          communication on the World Wide Web. It is an application layer
          protocol that facilitates the transfer of data between a client (like
          a web browser) and a server. HTTP defines methods for requests and
          responses, such as GET, POST, PUT, and DELETE.
        </p>
      </header>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">HTTP Methods</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>GET:</strong> Requests data from a specified resource.
          </li>
          <li>
            <strong>POST:</strong> Submits data to be processed to a specified
            resource.
          </li>
          <li>
            <strong>PUT:</strong> Updates a current resource with new data.
          </li>
          <li>
            <strong>DELETE:</strong> Deletes the specified resource.
          </li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          API Used for Fetching Data
        </h2>
        <p className="text-base text-gray-600">
          This project uses a mock HTTP API to fetch and display response codes.
          You can find more details about this API below.
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>
            <strong>API URL:</strong>{" "}
            <a
              href="https://http.dog"
              className="text-blue-500 hover:underline"
            >
              https://http.dog
            </a>
          </li>
          <li>
            <strong>Description:</strong> Provides images and data related to
            HTTP response codes. Useful for testing and visualizing different
            HTTP response scenarios.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
