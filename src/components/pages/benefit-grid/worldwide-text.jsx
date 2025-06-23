import React from 'react';
import Section from '../../layout/section-box';
import Container from '../../layout/container';

const WorldwideTrusted = ({ heading }) => {
  if (!heading?.title || !heading?.highlightText) return null;

  const [before, after] = heading.title.split(heading.highlightText);

  return (
    <Section className="!py-1 !mb-0"> {/* Force min spacing */}
      <Container className="!mb-0">
        <div className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
          {before}
          <span className="text-blue-800">{heading.highlightText}</span>
          {after}
        </div>
      </Container>
    </Section>
  );
};

export default WorldwideTrusted;
