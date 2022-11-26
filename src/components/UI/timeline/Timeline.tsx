import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.scss';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      text: 'Software Engineer',
      date: 'Nov 2018',
      category: {
        tag: 'University',
        color: '#018f69',
      },
    },
    {
      id: 2,
      text: 'Software Engineer',
      date: 'Nov 2018',
      category: {
        tag: 'University',
        color: '#018f69',
      },
    },
    {
      id: 3,
      text: 'Software Engineer',
      date: 'Nov 2018',
      category: {
        tag: 'University',
        color: '#018f69',
      },
    },
    {
      id: 4,
      text: 'Software Engineer',
      date: 'Nov 2018',
      category: {
        tag: 'University',
        color: '#018f69',
      },
    },
  ];

  return (
    <div className="timeline-container">
      {timelineData.map((data) => (
        <TimelineItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Timeline;
