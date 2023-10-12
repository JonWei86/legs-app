import React, { useRef, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FiGithub, FiPrinter } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const About = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target.message.value);
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    );
    setFormValues({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="p-3"
      //className="flex flex-col justify-between bg-[#3CA1FF] rounded-3xl border-4 w-9/12 drop-shadow-bigbox"
    >
      <Link to="/" className="flex justify-end right-0 mt-2 mr-2">
        <IoMdCloseCircleOutline className="text-4xl text-[#e9e9e9] bg-[#FB4D3D] rounded-full border-[3px] border-[#0A2342] drop-shadow-button hover:drop-shadow-buttonhov hover:border-[#45ff2c]" />
      </Link>
      <div>
        <h1 className="font-['KidsMagazine'] text-[#e9e9e9] text-4xl p-2 text-stroke-title drop-shadow-title">
          ABOUT
        </h1>
        <div className="flex justify-center drop-shadow-box">
          <div className="m-3 flex bg-[#1D82E0] border-4 rounded-xl w-8/12">
            <p className="text-l m-5 text-[#e9e9e9] font-['KidsMagazine'] text-stroke-body ">
              Hello! My name is Jon, a Program Developer looking to spread the
              joys of darts through programming. Thanks for Using the App!
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[#e9e9e9] text-4xl p-5 text-stroke font-['KidsMagazine'] text-stroke-title drop-shadow-title">
          Contact Me
        </h1>
        <div className="flex justify-center drop-shadow-box">
          <div className="bg-[#1D82E0] border-4 rounded-xl w-8/12">
            <div className="m-5">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col w-2/5">
                    <label
                      htmlFor="name"
                      className="flex text-l font-['KidsMagazine'] text-stroke-body mb-1 text-[#e9e9e9]"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={(e) =>
                        setFormValues({ ...formValues, name: e.target.value })
                      }
                      placeholder="Enter Your Name"
                      className="w-full rounded-sm pl-1"
                    />
                  </div>
                  <div className="flex flex-col w-2/5">
                    <label
                      htmlFor="email"
                      className="flex text-l font-['KidsMagazine'] text-stroke-body mb-1 text-[#e9e9e9]"
                    >
                      EMAIL:
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formValues.email}
                      onChange={(e) =>
                        setFormValues({ ...formValues, email: e.target.value })
                      }
                      placeholder="Enter Your Email"
                      className="w-full rounded-sm pl-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    htmlFor="message"
                    className="flex text-l font-['KidsMagazine'] text-stroke-body justify-start mb-1 text-[#e9e9e9]"
                  >
                    Message:
                  </label>
                  <div>
                    <textarea
                      type="text"
                      name="message"
                      value={formValues.message}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          message: e.target.value,
                        })
                      }
                      placeholder="Send me a message!"
                      className="flex w-full rounded pl-1"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  className="mt-3 px-3 py-2 font-[KidsMagazine] text-sm border-[3.5px] text-[#e9e9e9] text-stroke-body bg-[#FFBA49] rounded-md drop-shadow-button hover:drop-shadow-buttonhov hover:text-base hover:border-[#45ff2c]"
                  value="SEND"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Link
          to="https://www.facebook.com/jhay.whey"
          className="text-2xl rounded-full text-[#e9e9e9] bg-[#0A2342] p-2 mx-2 border-[3px] drop-shadow-button hover:drop-shadow-buttonhov hover:border-[#45ff2c] hover:text-[#45ff2c]"
        >
          <BiLogoFacebook />
        </Link>
        <Link
          to="https://github.com/JonWei86"
          className="text-2xl rounded-full text-[#e9e9e9] bg-[#0A2342] p-2 mx-2 border-[3px] drop-shadow-button hover:drop-shadow-buttonhov hover:border-[#45ff2c] hover:text-[#45ff2c]"
        >
          <FiGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/wei-jon/"
          className="text-2xl rounded-full text-[#e9e9e9] bg-[#0A2342] p-2 mx-2 border-[3px] drop-shadow-button hover:drop-shadow-buttonhov hover:border-[#45ff2c] hover:text-[#45ff2c]"
        >
          <BiLogoLinkedin />
        </Link>
      </div>
      <div>
        <button
          type="button"
          className="m-5 rounded-lg  text-[#e9e9e9] bg-[#FB4D3D] p-3 px-4 border-4 border-[#e9e9e9] w-36 drop-shadow-button hover:drop-shadow-buttonhov hover:border-[#45ff2c]"
        >
          <Link
            to="/"
            className="flex justify-center font-[KidsMagazine] text-stroke-body"
          >
            CLOSE
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
