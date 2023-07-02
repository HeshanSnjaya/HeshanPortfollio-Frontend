import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/c57dbc39-27ca-4f77-bcd1-7ea153741a83"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 pt-8">
          <p className="text-4xl font-bold text-gray-300 inline border-b-4 border-pink-600">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-700 hover:border-blue-700 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
