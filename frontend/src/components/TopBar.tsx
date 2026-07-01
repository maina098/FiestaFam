import { Search, Bell } from 'lucide-react';
import Image from 'next/image';

export default function TopBar() {
  return (
    <div className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 w-full">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search rooms, guests, bookings..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-200">
            {/* Avatar placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              JS
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-gray-700">Jane Smith</p>
            <p className="text-xs text-gray-500">General Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
