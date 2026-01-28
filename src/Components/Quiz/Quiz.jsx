import React from "react";

const Quiz = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Quiz App</h1>

      <hr className="mb-4" />


      <h2 className="text-xl font-semibold mb-4">
        Which device is required for the internet connection .?
      </h2>

      <ul className="space-y-2 mb-4">
        <li className="p-2 border rounded">Modem  </li>
        <li className="p-2 border rounded">Router </li>
        <li className="p-2 border rounded">LAN Cable  </li>
        <li className="p-2 border rounded">Pen Drive  </li>
      </ul>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Next..
      </button>

      <div className="text-sm text-gray-500 mt-4">1 of 5 questions .</div>
    </div>
  );
};

export default Quiz;
