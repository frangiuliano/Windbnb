import React from "react";

import data from "../utils/stays.json";

import star from "../utils/images/star.svg";

function Home() {
  console.log(data);

  return (
    <div className="flex w-screen h-4/5 py-8 px-32">
      <div className="grid grid-cols-3 gap-6">
        {data.map((apartment) => {
          return (
            <div key={apartment.id} className="flex flex-col h-fit">
              <img
                className="rounded-lg h-96 object-cover"
                src={apartment.photo}
                alt="img not found"
              />
              <div className="flex flex-row justify-between items-center my-3">
                <div className="flex flex-row gap-3 items-center">
                  {apartment.superHost === true ? (
                    <p className="border-2 border-black rounded-2xl py-1 px-3 font-bold text-xs">
                      SUPER HOST
                    </p>
                  ) : null}
                  <p className="text-sm"> {apartment.type} </p>
                </div>
                <div className="flex flex-row gap-1">
                  <img width={17} height={17} src={star} alt="star icon" />
                  <p>{apartment.rating}</p>
                </div>
              </div>
              <p className="text-base font-bold">{apartment.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
