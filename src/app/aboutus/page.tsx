/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/common/layout/section/SectionTitle';

type Trustee = {
  name: string;
  image: string;
  designation: string;
  about: string[];
};

type About = {
  heading: string;
  paragraph: string[];
};

const Page: React.FC = () => {
  const [boardOfTrustees, setBoardOfTrustees] = useState<Trustee[]>([]);
  const [aboutData, setAboutData] = useState<About | null>(null);


  useEffect(() => {
    // Fetch data from the JSON file
    const fetchAboutUs = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Cloud-Premises/iccmw-app/refs/heads/main/data/assets/json/aboutPage/about.json'
        );
        const data = await response.json();
        setAboutData(data.about);
        setBoardOfTrustees(data.boardOfTrustees);
      } catch (error) {
        console.error('Error fetching board of trustees data:', error);
      }
    };

    fetchAboutUs();
  }, []);

  return (
    <div className="auto">
      {/* Page Title */}
      <SectionTitle title="about us" />

      <div className="w-full">
        {/* Heading Section */}
        <div className="h-auto max-w-screen-xl mx-auto p-4">
          <div className="w-full p-4 sm:flex sm:flex-col md:flex md:flex-col items-center justify-between gap-6">
            <div className="text-4xl font-bold capitalize">

              {
                aboutData && (
                  <h1 className="text-green-600 text-2xl text-center">
                      &quot; {aboutData.heading} &quot;
                  </h1>
                )}

            </div>
            <div className="flex flex-col gap-4">
              {
                aboutData ? (
                  aboutData.paragraph.map((text, index) => (
                    <p key={index} className="text-md">
                      {text}
                    </p>
                  ))
                ) : (
                  <div></div>
                )}

            </div>
          </div>
        </div>

        {/* Board of Trustees Section */}
        <div className="h-auto max-w-screen-xl mx-auto p-4">
          <div className="w-full p-4 sm:flex sm:flex-col md:flex md:flex-col items-center justify-between gap-6">
            <h1 className="text-3xl font-bold py-2 capitalize">Board of Trustees</h1>

            {/* Loop through Board of Trustees */}
            <div className="w-full flex flex-col gap-8">
              {boardOfTrustees.map((member, index) => (
                <div
                  key={index}
                  className="w-full rounded-xl border border-primary p-6 sm:flex sm:flex-col sm:items-center sm:gap-6 md:flex md:flex-row md:gap-12"
                >
                  {/* Member Image */}
                  <div className="w-72 h-72 flex-shrink-0">
                    <img
                      src={member.image}
                      className="w-full h-full object-cover rounded-lg"
                      alt={member.name}
                    />
                  </div>
                  {/* <div>
                    <img
                      src={member.image}

                      className="rounded-lg"
                      alt={member.name}
                    />
                  </div> */}

                  {/* Member Details */}
                  <div className="flex flex-col items-start gap-2">
                    {/* Name */}
                    <h1 className="text-lg font-bold text-green-600">{member.name}</h1>

                    {/* Designation */}
                    <h1 className="text-lg">{member.designation}</h1>

                    {/* Horizontal Line */}
                    <hr className="w-full border-primary" />

                    {/* About Paragraphs */}
                    <div className="flex flex-col gap-4">
                      {member.about.map((paragraph, idx) => (
                        <p key={idx} className="text-md">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
