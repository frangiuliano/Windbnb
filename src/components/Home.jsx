import React from "react";

import data from "../utils/stays.json";

import star from "../utils/images/star.svg";

function Home() {
  console.log(data);

  return (
    <div className="flex w-screen h-4/5 px-8">
      <div className="grid grid-cols-3 gap-6">
        {data.map((apartment) => {
          return (
            <div key={apartment.id} className="flex flex-col h-fit">
              <img
                className="rounded-lg"
                src={apartment.photo}
                alt="img not found"
              />
              <div className="flex flex-row justify-between items-center my-3">
                {apartment.superHost === true ? (
                  <p className="border-2 rounded-xl py-1 px-3 font-bold text-sm">
                    {" "}
                    SUPER HOST{" "}
                  </p>
                ) : null}
                <p> {apartment.type} </p>
                <div className="flex flex-row gap-1">
                  <img width={15} height={15} src={star} alt="star icon" />
                  <p>{apartment.rating}</p>
                </div>
              </div>
              <p className="text-sm font-bold">{apartment.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
