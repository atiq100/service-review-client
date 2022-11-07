import React from "react";

const Statistic = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-white rounded-sm shadow-md">
      <div class="grid row-gap-8 sm:grid-cols-3">
        <div class="text-center">
          <h6 class="text-5xl font-bold text-sky-400">14K</h6>
          <p class="font-bold">Happy Clients</p>
        </div>
        <div class="text-center">
          <h6 class="text-5xl font-bold text-sky-400">10</h6>
          <p class="font-bold">Years Of Experience</p>
        </div>
        <div class="text-center">
          <h6 class="text-5xl font-bold text-sky-400">20</h6>
          <p class="font-bold">Honorable Prizes</p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
