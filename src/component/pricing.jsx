import { PriceBenefits } from "./pricebenefit";
import { useState } from "react";
import { Accordion } from "./accordion";
import { Section } from "./animation";
import { RegForm } from "./form";
import { useModal } from "../context/ModalContext";
import { TypeAnimation } from "react-type-animation";
import { Type } from "lucide-react";

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
  const virtualOffice = [
    {
      price: "15,000",
      duration: "3Months",
    },
    {
      price: "30,000",
      duration: "6Months",
    },
    {
      price: "60,000",
      duration: "12Months",
    },
  ];

  // regular office object
  const office = [
    {
      title: "Hot Desk",
      tag: "freelancers",
      description:
        "Flexible day and week passes for short-term access. Perfect for occasional visits or consecutive workdays.",
      daily: "2,000",
      weekly: "7,000",
      monthly: "21,000",
    },

    {
      title: "Dedicated Desk",
      tag: "Remote Workers",
      description:
        "Try our day or week passes for flexible, short-term access whenever you need a professional workspace.",
      daily: "3,500",
      weekly: "12,000",
      monthly: "36,000",
    },
  ];

  // Accordion object

  const faq = [
    {
      title: "What happens if there's a power cut?",
      content:
        "We have industrial-grade backup generators and solar inverters to ensure zero downtime.",
    },

    {
      title: "How fast is the Internet?",
      content:
        "We have industrial-grade backup generators and solar inverters to ensure zero downtime.",
    },

    {
      title: "Is the workspace secure?",
      content:
        "We have industrial-grade backup generators and solar inverters to ensure zero downtime.",
    },

    {
      title: "Are there any hidden service charge?",
      content:
        "We have industrial-grade backup generators and solar inverters to ensure zero downtime.",
    },
  ];

  return (
    <div>
      <Section>
        <div className="py-41">
          <div className="max-w-177 mx-auto flex flex-col gap-4">
            <h1 className="font-display text-4xl/15 md:text-7xl/15 font-bold text-center mx-auto">
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
          <div className=" flex flex-col gap-6 items-center mt-16">
            <div className="flex gap-6 p-2 bg-[#E2E7F0]">
              <div
                className={` ${plan === "daily" ? "bg-white shadow-md" : ""} cursor-pointer transition-all ease-in-out duration-300 py-2 px-7`}
                onClick={handleDaily}
              >
                Daily
              </div>
              <div
                className={` ${plan === "weekly" ? "bg-white shadow-md" : ""}  cursor-pointer transition-all ease-in-out duration-300 py-2 px-7`}
                onClick={handleWeekly}
              >
                Weekly
              </div>
              <div
                className={` ${plan === "monthly" ? "bg-white shadow-md" : ""}  cursor-pointer transition-all ease-in-out duration-300 py-2 px-7`}
                onClick={handleMonthly}
              >
                Monthly
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {office.map((item) => (
                <div className="flex flex-col max-w-86 gap-4 border-[#A0ABC0] border rounded bg-white py-6 px-4">
                  {/* heading part */}
                  <div>
                    <h3 className="font-bold ">{item.title}</h3>
                    <p className="bg-[#E2E7F0] font-medium rounded-2xl text-sm px-2 inline-block">
                      {item.tag}
                    </p>
                  </div>
                  <p>{item.description}</p>
                  <p
                    key={plan}
                    className="font-bold text-3xl animate-price font-display"
                  >
                    {`₦ ${plan === "daily" ? item.daily : plan === "weekly" ? item.weekly : plan === "monthly" ? item.monthly : ""}`}
                    <span className="font-medium text-[#A0ABC0]">
                      /{" "}
                      {plan === "daily"
                        ? "Day"
                        : plan === "weekly"
                          ? "Week"
                          : plan === "monthly"
                            ? "Month"
                            : ""}
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
      </Section>

      {/* Virtual office section */}

      <Section>
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
            {virtualOffice.map((item) => (
              <div className="flex flex-col gap-4 p-6 bg-white rounded-lg border border-[#A0ABC0]">
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
      </Section>

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
