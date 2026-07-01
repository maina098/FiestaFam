import { Search, Bell } from 'lucide-react';
import Image from 'next/image';

export default function TopBar() {
  return (
    <div className="h-20 bg-[#0e1618] border-b border-[#1f2d30] flex items-center justify-between px-8 w-full">
      {/* Left spacer for centering */}
      <div className="flex-1 hidden md:block"></div>

      {/* Centered Search Bar */}
      <div className="flex-1 max-w-xl mx-auto">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search rooms, guests, bookings..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#0a0f11] border border-[#1f2d30] text-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#c6ac83] focus:bg-[#131d20] transition-all placeholder-gray-500"
          />
        </div>
      </div>

      {/* Right icons */}
      <div className="flex flex-1 justify-end items-center gap-6">
        <button className="relative text-gray-500 hover:text-gray-300 transition-colors">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0e1618]"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-[#1f2d30]">
            {/* Avatar placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-[#c6ac83] to-[#a38c64] flex items-center justify-center text-[#0a0f11] font-bold text-sm">
              JS
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-gray-200">Jane Smith</p>
            <p className="text-xs text-gray-500">General Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
