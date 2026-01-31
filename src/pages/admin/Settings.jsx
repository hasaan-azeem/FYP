import React, { useState } from "react";

const Setting = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, password });
  }

  return (
    
      <div className="max-w-full mx-auto mt-2 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
        <form onClick={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="analyst@webxguard.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Change Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="********"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-[#10B981] text-white rounded-md hover:bg-[#1EC8A0] focus:outline-none transition">
            Save Changes
          </button>
        </form>
      </div>
  );
};

export default Setting;
