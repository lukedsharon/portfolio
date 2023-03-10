import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import QuoteLeft2 from "public/logos/quote-left2.svg";
import QuoteRight from "public/logos/quote-right.svg";

const TESTAMONIALS_CONTENT = [
  {
    name: "Rob Tull",
    quote:
      "Luke joined us fresh out of college and on the back of a summer internship he did for our company. He reported directly to me during both that internship and while working full time and was a tremendous asset to our team during that time. Luke was humble, faithful, diligent, and always ready to learn. He tackled multiple new programming languages and platforms during his time with us and quickly established that he could be trusted to carry new projects through to completion. His work with Salesforce, integrator.io, Google Sheets, and JavaScript has created lasting value for our organization. He built new tools, customized our systems, wrote automations, and integrated data in ways we'll benefit from for a long time. This all while having a great attitude and building relationships with his team members. I would unreservedly recommend Luke as a developer or systems administrator, with the added value of his financial skills and awareness. I'm sure he will be a blessing to the organizations he works for in the future.",
    position: "CIO and Director of Project Management",
    company: "Classy Llama",
  },
  {
    name: "Sarah Hayden, CPA",
    quote:
      "I’ve had the pleasure of working with Luke over the past five years. I managed Luke directly at the Keeter Center, and I worked alongside him at College of the Ozarks and Classy Llama. It’s been impressive watching him develop and perfect his technical programming skills while maintaining his knowledge of accounting and combining the two to be an indomitable force. I have trusted Luke to patiently work through problems and implement effective solutions. He has assisted me on several occasions to help streamline financial processes with technology, and I’ve counted on him to help me critically think through issues. He is a team-player, trustworthy, a quick learner, and consistently shows up with a positive attitude. I highly recommend Luke as a developer who is self-disciplined, analytical, and eager to learn. I’m grateful to have worked with Luke, and any company will be lucky to have him on their team.",
    position: "Director of Finance",
    company: "Classy Llama",
  },
  {
    name: "Rhonda Dawes",
    quote:
      "I'm one of the project managers Luke used to provide assistance to, usually when I was in the middle of a technology pickle. His mild manner and reassurance that a resolution would be provided put me at ease and allowed me to move on to my next task. He was quick to address issues or escalate if he needed a second opinion. He's one of those rare finds, if you have an opportunity to employ or work with Luke you will get to experience his expertise, humility, sincerity, resourcefulness, focus and servant spirit.",
    position: "Expert Project Manager",
    company: "Classy Llama",
  },
  {
    name: "Michael Maust",
    quote:
      "I had the opportunity to get to know Luke while at college. He is a truly exceptional and highly intelligent individual. He brings a high level of excellence to any role that he is in and is very apt at solving difficult problems while maintaining awareness of the larger picture at hand. I remember during his computer science capstone project, Luke would spend almost every waking moment building out his project to perfection. He built out an entire accounting platform from scratch. And from scratch, I mean from scratch - he literally built his own authentication/user management system simply because he wanted to better understand how those systems operated. While other students may have put in a few dozen hours, Luke put in over 240+ hours within a single semester. Luke is a great developer who is eager to learn and grow. Hire Luke. You won’t regret it.",
    position: "Front End Developer",
    company: "ConGenius",
  },
];

const StageLookup: any = {
  "/about#slide1": [2, TESTAMONIALS_CONTENT.length],
  "/about": [2, TESTAMONIALS_CONTENT.length],
  "/about#slide2": [3, 1],
  "/about#slide3": [4, 2],
  "/about#slide4": [1, 3],
};

function Testamonials() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-1 grid-cols-12">
      <button
        className=" btn btn-circle col-start-1 col-end-3 sm:col-start-1 sm:col-end-2 justify-self-end self-center mr-1"
        onClick={() =>
          router.push(`about#slide${StageLookup[router.asPath][1]}`)
        }
      >
        ❮
      </button>
      <div className="carousel max-w-[1200px] col-start-3 col-end-11 sm:col-start-2 sm:col-end-12 rounded-2xl">
        {TESTAMONIALS_CONTENT.map((testamonials, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item w-full bg-base-200 flex flex-col py-3"
          >
            <div className="flex mb-3">
              {/* <Image src={QuoteLeft2} alt="asdf" width={75} /> */}
              <section className="grid grid-cols-12">
                <p className="mx-6 mt-6 line-clamp-3 col-span-12">
                  {testamonials.quote}
                </p>
                <label
                  htmlFor={`testamonial-modal-${index}`}
                  className=" w-fit hover:cursor-pointer col-start-11 sm:col-start-12 font-bold text-accent hover:text-accent-focus"
                >
                  Read More
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id={`testamonial-modal-${index}`}
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <p className="py-4">{`"${testamonials.quote}"`}</p>
                    <span className=" flex justify-end pr-6">
                      - {testamonials.name}, {testamonials.position} @{" "}
                      {testamonials.company}
                    </span>
                    <div className="modal-action">
                      <label
                        htmlFor={`testamonial-modal-${index}`}
                        className="btn"
                      >
                        Done
                      </label>
                    </div>
                  </div>
                </div>
              </section>
              {/* <Image src={QuoteRight} alt="asdf" width={75} /> */}
            </div>
            <span className=" flex justify-end p-6 lg:pr-6">
              - {testamonials.name}, {testamonials.position} @{" "}
              {testamonials.company}
            </span>
          </div>
        ))}
      </div>
      <button
        className="btn btn-circle col-start-11 sm:col-start-12 sm:col-end-12 self-center ml-1"
        onClick={() =>
          router.push(`about#slide${StageLookup[router.asPath][0]}`)
        }
      >
        ❯
      </button>
    </div>
  );
}

export default Testamonials;
