import React from 'react';
import './TimelineItem.scss';

type DataProps = {
  data: {
    text?: string;
    date?: string;
    category?: { tag: string; color: string };
  };
};

const TimelineItem = ({ data }: DataProps) => (
  <div className="timeline-item">
    <div className="timeline-item__content">
      <div className="timeline-item__title">
        {' '}
        <span className="tag" style={{ background: data.category?.color }}>
          {data.category?.tag}
        </span>
        <time>{data.date}</time>
      </div>

      <p>{data.text}</p>
      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;
