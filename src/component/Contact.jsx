import React, { useRef, useState } from "react";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mjvnnlgk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 1500);
      form.reset();
    } else {
      console.error("Form submission error:", response.statusText);
    }
  };

  return (
    <>
      <div className="flex justify-center bg-red-100 p-7" id="contact">
        <div className="w-[80vw] flex flex-col gap-4">
          <h1 className="font-mono text-3xl mb-4">Contact Me</h1>

          <div className="flex justify-around gap-10 items-center sm:flex-row flex-col">
            <div>
              <img
                src="contact.jpg"
                alt="contact us"
                className="rounded-md w-[200px] animate-pulse"
              />
            </div>

            <div className="flex-grow">
              {submitted && (
                <p className="text-green-500 mb-3 text-center">
                  message sent successfully!
                </p>
              )}
              <form
                onSubmit={handleSubmit}
                className="mb-5 flex flex-col gap-3 bg-red-50 p-6 rounded-lg"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="john"
                    className="w-[100%] rounded-md p-2 bg-red-200"
                    ref={nameRef}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@gmail.com"
                    className="w-[100%] rounded-md p-2 bg-red-200"
                    ref={emailRef}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    required
                    placeholder="something..."
                    className="w-[100%] rounded-md p-2 bg-red-200"
                    ref={messageRef}
                  />
                </div>

                <button className="bg-red-300 hover:bg-red-200 p-3 rounded-md mt-3 ">
                  Contact Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
