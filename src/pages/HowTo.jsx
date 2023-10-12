import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const howTo = () => {
  return (
    <div className="flex flex-col p-3">
      <Link to="/" className="flex justify-end right-0 mt-2 mr-2">
        <IoMdCloseCircleOutline className="text-4xl text-[#e9e9e9] bg-[#FB4D3D] rounded-full border-[3px] border-[#0A2342] drop-shadow-button hover:drop-shadow-buttonhov hover:border-[#45ff2c] hover:text-[42px]" />
      </Link>
      <h1 className="font-['KidsMagazine'] text-[#e9e9e9] text-4xl p-2 text-stroke-title drop-shadow-title mb-5">
        How To Play
      </h1>
      <div className="m-3 bg-[#1D82E0] border-4 rounded-xl">
        <p className="p-4 font-['KidsMagazine'] text-[#e9e9e9] text-stroke-body text-center">
          Legs is a game where Players Take turns attempting to Beat or Match
          the current Score. If the Current player fails to do so they Lose a
          Leg (mark/point/strike) and the next player tries. Once a player has
          Lost all their Legs (Usually 3 to 5 legs) they are considered out.
          Last Player Standing Wins!
        </p>
      </div>
      <div>
        <button
          type="button"
          className="m-5 rounded-lg  text-[#e9e9e9] bg-[#FB4D3D]  border-4 border-[#e9e9e9] drop-shadow-button hover:drop-shadow-buttonhov hover:border-[#45ff2c] hover:text-xl"
        >
          <Link
            to="/"
            className="flex justify-center font-[KidsMagazine] text-stroke-body py-2 px-3 "
          >
            CLOSE
          </Link>
        </button>
      </div>
    </div>
  );
};

export default howTo;
