import React from "react";
import { IoMdRemoveCircle, IoMdAddCircle, IoMdCreate } from "react-icons/io";

const Home = () => {
  const scoreOptions = [
    {
      label: <span>Beat</span>,
      value: { beat: true },
      selectedBackgroundColor: "#e9e9e9",
    },
    {
      label: "Match",
      value: "match",
      selectedBackgroundColor: "#e9e9e9",
    },
  ];

  const initialSelectedScoreIndex = scoreOptions.findIndex(
    ({ value }) => value === "beat"
  );
  return (
    <div className="p-10">
      <h1 className="font-['KidsMagazine'] text-4xl text-[#e9e9e9] text-stroke-title drop-shadow-title">
        Start A Game:
      </h1>
      <div className="m-3  flex flex-col bg-[#1D82E0] border-4 rounded-xl justify-center p-4">
        <div className="">
          <span className="font-['KidsMagazine'] text-xl text-[#e9e9e9] text-stroke-body">
            Beat Match
          </span>
          <div style={{ width: 100, height: 30 }}></div>
          <span className="font-['KidsMagazine'] text-xl text-[#e9e9e9] text-stroke-body">
            The Score
          </span>
        </div>
        <div className="">
          <span className="font-['KidsMagazine'] text-xl text-[#e9e9e9] text-stroke-body">
            Random Shoot For
          </span>
          <span className="font-['KidsMagazine'] text-xl text-[#e9e9e9] text-stroke-body">
            Starting #
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <h2 className="font-['KidsMagazine'] text-xl text-[#e9e9e9] text-stroke-body pt-1">
            NUMBER OF LEGS:
          </h2>
          <div className="pl-2">
            <select className="font-['KidsMagazine'] text-[#e9e9e9] text-stroke-body text-center rounded-md border-[2.5px] border-black text-l">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <div className="border-4 rounded-lg bg-[#1D82E0]">
        <div>
          <h2 className="font-['KidsMagazine'] text-[#e9e9e9] text-stroke-body text-2xl pt-4">
            Players:
          </h2>
          <div className="flex m-3 justify-between">
            <p className="font-['KidsMagazine'] text-[#e9e9e9] text-stroke-body p-1">
              1. Player 1
            </p>
            <div className="flex flex-row">
              <div className="h-min rounded-full border-2 border-black mr-3 drop-shadow-smbutton hover:drop-shadow-smbuttonhov hover:border-[#45ff2c] ">
                <IoMdCreate className="text-[1.2rem] text-[#e9e9e9] bg-[#FFBA49] rounded-full border-2 p-[0.75px] hover:text-[1.5rem]" />
              </div>
              <IoMdRemoveCircle className="text-2xl bg-[#e9e9e9] border-2 border-black rounded-full m-0 text-[#FB4D3D] drop-shadow-smbutton hover:drop-shadow-smbuttonhov hover:border-[#45ff2c] hover:text-3xl" />
            </div>
          </div>
          <div className="flex m-3">
            <IoMdAddCircle className="text-2xl bg-[#e9e9e9] border-2 border-black rounded-full m-0 text-[#78BC61] drop-shadow-smbutton hover:border-[#45ff2c] hover:drop-shadow-smuttonhov hover:text-3xl" />
            <p className="font-['KidsMagazine'] text-[#e9e9e9] text-stroke-body p-1">
              Add A Player
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="mt-5 rounded-lg text-[#e9e9e9] py-2 px-5 border-4 border-[#e9e9e9] bg-[#78BC61] drop-shadow-button hover:drop-shadow-buttonhov hover:bg-[#45ff2c] hover:text-xl"
      >
        <p className="font-[KidsMagazine] text-stroke-body  hover:bg-[#45ff2c]">
          START
        </p>
      </button>
    </div>
  );
};

export default Home;
