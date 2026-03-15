import React from "react";
import { audience, homeSvg } from "../data /datas";
import { Mail } from "lucide-react";

export const Home = () => {
  return (
    <div className="mt-28">
      {/* Hero Section */}
      <section>
        <div className="max-w-177 mx-auto flex flex-col gap-4">
          <h1 className="font-display text-5xl/15 font-bold text-center mx-auto">
            {" "}
            This Is Where Your Best Work Happens
          </h1>
          <p className="text-center text-lg/7 mt-2">
            Join Gbagada’s premier workspace designed for freelancers,
            entrepreneurs, and growing teams. Trade the distractions for a
            community that fuels your focus.
          </p>

          <div className="flex gap-4 justify-center mt-4 ">
            <button className="rounded py-3 px-10 text-xl bg-black text-white border-2 hover:bg-[#FF6B00]">
              Book a Tour
            </button>
            <button className="rounded py-3 px-10 text-xl  border-2">
              View pricing
            </button>
          </div>
        </div>
        <img src="/conference_table.png" alt="" className="my-20" />
      </section>

      {/* Audience section*/}

      <section className="py-20">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold">Audience</h2>
          <p className="font-body my-1">
            Build for businesses of different sizes
          </p>
        </div>

        {/* Image section box */}
        <div className="md:flex justify-between">
          {/* first audience image and text */}
          {audience.map((item) => (
            <div className="max-w-[334Px] flex flex-col gap-3 text-center">
              <div className="relative group hover:mx-0.5 hover:my-0.5 ease-in-out">
                <img
                  src={item.image}
                  alt={item.description}
                  className="object-cover transition-transform opacity-100 duration-300 group-hover:opacity-50"
                />
                {/* Image Overlay */}
                <div className="bg-black absolute inset-0 bg-opacity-0 transition-opacity opacity-0 duration-300 group-hover:opacity-60 flex items-end justify-center p-6 rounded">
                  <p className="text-white text-left">{item.text}</p>
                </div>
              </div>
              <h3 className="font-display font-3xl font-bold mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}

      <section className="py-20">
        <h2 className="text-4xl text-center font-bold mb-16 font-display">
          Features
        </h2>
        <div className="flex justify-between">
          <img src="/assets/desk.png" alt="" className="max-w-131.5" />
          <div className="grid grid-cols-3 max-w-113.75 gap-3 text-center">
            {homeSvg.map((item) => (
              <div className="flex flex-col gap-3 justify-center items-center">
                <img
                  src={item.svg}
                  alt={item.description}
                  className="w-30 h-30"
                />
                <p className="font-normal font-body text-[18px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
