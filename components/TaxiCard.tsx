import React from 'react';
import { Taxi } from '../types';

interface TaxiCardProps {
  taxi: Taxi;
}

const TaxiCard: React.FC<TaxiCardProps> = ({ taxi }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="h-24 bg-slate-100 dark:bg-slate-700 flex items-center justify-center p-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8587/8587864.png"
          alt="Biểu tượng taxi"
          className="h-16 w-16 object-contain"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 truncate">{taxi.name}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{taxi.phone}</p>
        <div className="mt-auto">
          <a
            href={`tel:${taxi.phone.replace(/\s/g, '')}`}
            className="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-xs font-bold rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
            </svg>
            Gọi ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaxiCard;