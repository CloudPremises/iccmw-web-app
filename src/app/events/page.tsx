'use client';

import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/common/layout/section/SectionTitle';
import Loading from '../loading';
import PrimaryCarousel from '@/components/common/dataDisplay/carousel/PrimaryCarousel';

interface EventDate {
  month: string;
  day: number;
  year: number;
}

interface Event {
  id: string;
  title: string;
  images: string[];
  date: EventDate;
  [key: string]: unknown;
}

const Page = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Cloud-Premises/iccmw-app/refs/heads/main/data/assets/json/eventPage/eventPage.json'
        ); // Replace with your JSON link
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data: { events: Event[] } = await response.json();
        setEvents(data.events || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Function to compare dates (to sort events by date)
  const compareDate = (a: EventDate, b: EventDate): number => {
    // Compare by year
    if (a.year !== b.year) return a.year - b.year;
    // Compare by month (convert month name to number)
    const monthOrder: { [key: string]: number } = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    };
    if (monthOrder[a.month] !== monthOrder[b.month]) {
      return monthOrder[a.month] - monthOrder[b.month];
    }
    // Compare by day
    return a.day - b.day;
  };

  // Sort the events based on the event date
  const sortedEvents = events.sort((a, b) => compareDate(b.date, a.date));

  const formatDate = (date: EventDate): string => {
    return `${date.month}, ${date.day}, ${date.year}`;
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Page Title */}
      <SectionTitle title="events" />

      {/* Page Body */}
      <div className="max-w-screen-xl m-auto flex justify-center flex-wrap gap-6 p-4">
        {/* Event Cards */}

        {sortedEvents.map((event) => (
          <div
            key={event.id || Math.random().toString(36).substr(2, 9)} // Fallback for unique key
            className="flex flex-col gap-4 w-96 p-4 border border-primary rounded-xl hover:shadow-xl cursor-pointer"
          >
            <div className="flex flex-col">
              <h1 className="font-roboto font-bold text-lg text-color-secondary">
                {event.title}
              </h1>
              <h1 className="font-roboto text-lg">{formatDate(event.date)}</h1>
            </div>
            <div className="event-card">
              {/* Pass the images array to the Carousel component */}
              <PrimaryCarousel slides={event.images} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
