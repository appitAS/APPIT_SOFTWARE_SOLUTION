"use client";

import Section from "../../../layout/section-box";
import Container from "../../../layout/container";
import Image from "next/image";

const CountryStats = () => {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#252525]">
            With over <span className="text-[#EC1C26]">10 million+</span> jobs
            listed and growing
          </h2>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 justify-center">
          {[
            {
              country: "United Arab Emirates",
              flag: "/images/united-arab-emirates.png",
              jobs: "100K+",
              bg: "bg-[#F38181]",
            },
            {
              country: "Saudi Arabia",
              flag: "/images/saudi-arabia.png",
              jobs: "150K+",
              bg: "bg-[#58B19F]",
            },
            {
              country: "Qatar",
              flag: "/images/qatar.png",
              jobs: "50K+",
              bg: "bg-[#EACBD2]",
            },
            {
              country: "India",
              flag: "/images/india.png",
              jobs: "80K+",
              bg: "bg-[#F9C66D]",
            },
            {
              country: "USA",
              flag: "/images/united-stats.png",
              jobs: "10K+",
              bg: "bg-[#A3C8FF]",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 flex flex-col justify-center items-center text-center ${item.bg}`}
            >
              <Image
                src={item.flag}
                alt={item.country}
                width={48}
                height={32}
                className="mb-4 rounded object-cover"
              />
              <h4 className="font-bold text-lg text-black">{item.country}</h4>
              <p className="font-medium text-sm text-black">{item.jobs}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <Image
              src="/images/workisy logo-01.png"
              alt="Workisy Logo"
              width={160}
              height={50}
              className="mb-6 mx-auto lg:mx-0"
            />
            <Image
              src="/images/workisy-unique.svg"
              alt="AI Process Graphic"
              width={480}
              height={480}
              className="mx-auto"
            />
          </div>

          <div className="flex-1">
            <p className="text-sm sm:text-base md:text-lg leading-[1.6] max-w-2xl text-[#252525]">
              Workisy is an AI-Driven Talent Acquisition job portal designed to
              simplify and accelerate the hiring process for both employers and
              job seekers. With a database of over 10 million+ jobs and growing,
              Workisy leverages cutting-edge Artificial Intelligence to match
              the right talent and the right opportunities in real-time.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CountryStats;
