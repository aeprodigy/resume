import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  h-screen bg-black flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/58faf08b-8b68-4841-9dbf-bc2eb29ee3da"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400 text-gray-300 ">
            Contact
          </p>
          <p className="text-gray-300 p-4">
            Submit the for or Send me an Email - mikeapple056@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccdf] p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="my-4 p-2 bg-[#ccdf]"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="bg-[#ccdf] p-2 "
          name="meassage"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#8892b0] hover:border-[#8892b0] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
