import Container from "@/components/layout/container";
import HeadingPara from "@/components/layout/heading";
import Section from "@/components/layout/section-box";
import Image from "next/image";
import React from "react";

const AccrelerateSection = () => {
     const ImagesData= [
    {
      src: "/images/gnImage11.png",},
    {
      src: "/images/gnImage12.png",},
    {
      src: "/images/gnImage13.png",},
    {
      src: "/images/gnImage14.png",},
    {
      src: "/images/gnImage15.png",},
    {
      src: "/images/gnImage16.png",},
    {
      src: "/images/gnImage17.png",},
    {
      src: "/images/gnImage18.png",},
  
  ]
  return (
    <Section className="text-center bg-[#252525]">
      <Container>
        <HeadingPara
          title={`Built for Scale`}
          para={`Your business requires not just everything essential, but also the innovation, precision, and dedication that go far beyond expectations to ensure lasting success and growth.`}
          highlightText={`Built`}
          classNamePara="font-semibold text-center text-white"
          classNameHeading="text-white"
          sectionHeading
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(283px,1fr))] gap-8 py-10">
          {ImagesData.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AccrelerateSection;
