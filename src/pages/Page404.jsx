import React from "react";

const Page404 = () => {
  return (
    <div className="mb-60">
      <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="relative">
            <div class="absolute">
              <div class="">
                <h1 class="my-2 text-gray-800 font-bold text-2xl">
                  Page 404
                  <br />
                  Looks like you've found the doorway to the great nothing
                </h1>
                <p class="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <button class="sm:w-full p-3  bg-blue-500 rounded-lg lg:w-auto my-2 border md py-4 px-8 text-center  text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                  Take me there!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
