import { PriceBenefits } from "./pricebenefit";
import { useState } from "react";
import { Accordion } from "./accordion";
import { Section, SectionView } from "./animation";
import { RegForm } from "./form";
import { useModal } from "../context/ModalContext";
import { TypeAnimation } from "react-type-animation";
import { office, faq } from "../data /datas";

export const Pricing = () => {
  const [plan, setPlan] = useState("daily");

  const { openModal } = useModal();

  const handleWeekly = () => {
    setPlan("weekly");
  };

  const handleDaily = () => {
    setPlan("daily");
  };

  const handleMonthly = () => {
    setPlan("monthly");
  };

  // Virtual office object

  return (
    <div>
      <SectionView>
        <div className="py-41">
          <div className="max-w-177 mx-auto flex flex-col gap-4">
            <h1 className="font-display text-4xl/15 md:text-7xl/20 font-bold text-center mx-auto">
              {" "}
              Plan that scale with{" "}
              <TypeAnimation
                sequence={["You", 2000, "", 1000]}
                speed={300}
                repeat={Infinity}
                cursor={false}
                className="text-[#FF6B00]"
              />
            </h1>
            <p className="text-center text-lg/7 mt-2 ">
              No hidden fees. No long-term contracts. Just a professional space
              to do your best work.
            </p>
          </div>
          {/* office use pricing */}
          <div className=" flex flex-col  gap-6 items-center mt-16">
            <div className="flex flex-col md:flex-row gap-5">
              {office
                .filter((items) => items.tag === "freelancers / remote workers")
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col max-w-86 gap-4 border-[#A0ABC0] border rounded bg-white py-6 px-4"
                  >
                    {/* heading part */}
                    <div>
                      <h3 className="font-bold ">{item.title}</h3>
                      <p className="bg-[#E2E7F0] font-medium rounded-2xl text-sm px-2 inline-block">
                        {item.tag}
                      </p>
                    </div>
                    <p>{item.description}</p>
                    <p className="font-bold text-3xl animate-price font-display">
                      {item.price}
                      <span className="font-medium text-[#A0ABC0]">
                        {item.duration ? `/${item.duration}` : ""}
                      </span>
                    </p>

                    <PriceBenefits />
                    <button
                      onClick={() => openModal(<RegForm />)}
                      className="bg-black text-white py-3 rounded-lg px-auto font-display cursor-pointer hover:bg-[#FF6B00]"
                    >
                      Book a Tour
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </SectionView>

      {/* Virtual office section */}

      <section>
        <div className="flex flex-col gap-16 pt-20 pb-30">
          <div className="max-w-177 mx-auto flex flex-col gap-4">
            <h2 className="font-display text-5xl/15 font-bold text-center mx-auto px-20">
              {" "}
              Virtual Office
            </h2>
            <p className="text-center text-lg/7 mt-2 px-25">
              Establish a professional presence with our virtual office.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {office
              .filter((items) => items.tag === "virtual office")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 p-6 bg-white rounded-lg border border-[#A0ABC0]"
                >
                  <p className="text-3xl font-bold font-display">
                    ₦{item.price}
                    <span className="font-medium text-[#A0ABC0]">
                      /{item.duration}
                    </span>
                  </p>
                  <PriceBenefits />
                  <button
                    onClick={() => openModal(<RegForm />)}
                    className="bg-black text-white py-3 mt-25 rounded-lg px-auto hover:bg-[#FF6B00] cursor-pointer font-display"
                  >
                    Book a Tour
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Accordion section */}
      <Section>
        <div className="max-w-160 flex flex-col items-center mx-auto gap-10 py-20">
          <h2 className="text-3xl font-bold font-display">FAQs</h2>
          <Accordion item={faq} />
        </div>
      </Section>
    </div>
  );
};
