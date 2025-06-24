"use client";

import React from "react";
import Image from "next/image";
import Container from "./container";
import Section from "./section-box";

const ImageTextBlack = ({ sectionsData }) => {
  return (
    <Section className="bg-[#252525] py-6 md:py-10">
      <Container className="space-y-10">
        {sectionsData.map((section, index) => (
          <div key={index} className="space-y-6">
            {/* Heading outside the white box */}
            {section.heading && (
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-4xl font-semibold">
                  {section.heading}
                </h2>
                {section.subheading && (
                  <p className="text-lg md:text-xl mt-2">
                    {section.subheading}
                  </p>
                )}
              </div>
            )}

            {/* White rounded box */}
            <div className="bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center">
              {/* Text Section */}
              <div className="flex-1 space-y-4">
                <h3 className="text-black text-lg md:text-xl font-bold">
                  {section.title}
                </h3>
                <p className="text-black text-base md:text-lg">
                  {section.para}
                </p>
                {section.bulletPoints && (
                  <ul className="list-disc pl-5 space-y-1 text-black text-sm md:text-base">
                    {section.bulletPoints.map((point, idx) => (
                      <li key={idx}>
                        <strong>{point.bold}</strong> {point.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="rounded-3xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default ImageTextBlack;
