import { WEDDING_CONFIG } from '@/constants';
import React from 'react';

const monthNames = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

function getOrdinal(n: number) {
  if (n > 3 && n < 21) return 'TH';
  switch (n % 10) {
    case 1:
      return 'ST';
    case 2:
      return 'ND';
    case 3:
      return 'RD';
    default:
      return 'TH';
  }
}

const DateDisplay: React.FC = () => {
  const dateObj = new Date(WEDDING_CONFIG.date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();

  return (
    <div className='text-gray-700 max-w-sm mx-auto p-4'>
      {/* <div className='text-center text-xs tracking-widest uppercase mb-1'>
        {monthNames[month].slice(0, 3)}
      </div> */}
      <div className='flex items-center justify-center space-x-2'>
        <div className='flex-grow border-t border-gray-400'></div>
        <div className='text-sm tracking-widest uppercase'>
          {monthNames[month]}
        </div>
        <div className='font-serif text-5xl font-medium leading-none -mt-2'>
          {day}
        </div>
        <div className='text-sm self-start mt-1'>{getOrdinal(day)}</div>
        <div className='text-sm tracking-widest uppercase'>{year}</div>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
      <div className='text-center text-xs tracking-widest uppercase mt-1'>
        Okinawa
      </div>
    </div>
  );
};

export default DateDisplay;
