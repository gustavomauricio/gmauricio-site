import React, { useState } from "react";

const SUCCESS_MESSAGE = "Thanks for reaching out!";
const FORM_SUBMIT_ERROR_MESSAGE = "Something went wrong";

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const SubmitForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsEmailError(true);
      return;
    }

    setIsLoading(true);

    fetch("https://solway-firth.netlify.app/.netlify/functions/contact", {
      method: "post",
      body: JSON.stringify({
        name: name,
        email: email,
        body: description,
      }),
    })
      .then(function (response) {
        if (response.status === 200) {
          setFormMessage(SUCCESS_MESSAGE);
        } else {
          setFormMessage(FORM_SUBMIT_ERROR_MESSAGE);
        }

        setIsLoading(false);
      })
      .catch(function () {
        setIsLoading(false);
        setFormMessage(FORM_SUBMIT_ERROR_MESSAGE);
      });
  };

  const buttonDisabled =
    !name || !email || !description || isEmailError || isLoading;

  if (formMessage === SUCCESS_MESSAGE) {
    return <p>{formMessage}</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="mb-3 p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mb-3">
          <input
            className="p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setIsEmailError(false);
              setEmail(e.target.value);
            }}
          />
          {isEmailError && (
            <p className=" text-red-500 pl-2 pt-1">
              Please, enter a valid email
            </p>
          )}
        </div>
        <textarea
          className="mb-3 p-2"
          placeholder="Please include any relevant details"
          rows={8}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className=" bg-pink-400 hover:bg-pink-600 disabled:cursor-auto disabled:opacity-50 cursor-pointer rounded-xl uppercase text-white py-2 px-10"
          type="submit"
          disabled={buttonDisabled}
        >
          Submit
        </button>
      </form>
      {formMessage && <p>{formMessage}</p>}
    </>
  );
};

export default SubmitForm;
