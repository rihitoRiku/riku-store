import React from 'react';

const FixedTimeline = () => {
  const items = [
    {
      title: '$2400, Design changes',
      date: '22 DEC 7:20 PM',
    },
    {
      title: 'New order #1832412',
      date: '21 DEC 11 PM',
    },
    {
      title: 'Payment completed for order #4395133',
      date: '20 DEC 2:20 AM',
    }
  ];

  return (
    <div className="max-w-md mx-auto relative">
      {/* The vertical line */}
      <div className="absolute left-1/2 md:left-12 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-700"></div>
      
      {/* Timeline items */}
      <div className="relative">
        {items.map((item, index) => (
          <div key={index} className={`mx-auto max-w-[24rem] md:max-w-full relative ${index === items.length - 1 ? '' : 'mb-12'}`}>
            {/* Box container that covers the line */}
            <div className="bg-white dark:bg-neutral-900 border dark:border-neutral-800 rounded-lg p-4 relative z-10">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm">{item.date}</p>
            </div>
            
            {/* Circle connector (optional) */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-200 rounded-full z-20"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedTimeline;