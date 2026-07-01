import { Search, UserCheck, Key, LogOut } from 'lucide-react';

export default function ReceptionDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Reception Dashboard</h1>

      {/* Guest Search Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search guest by Name, Booking Number, Phone, Passport..."
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium transition">
                <span className="flex items-center gap-2"><UserCheck size={18} /> New Reservation</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl border border-green-100 bg-green-50 hover:bg-green-100 text-green-700 font-medium transition">
                <span className="flex items-center gap-2"><Key size={18} /> Check-In Guest</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl border border-orange-100 bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium transition">
                <span className="flex items-center gap-2"><LogOut size={18} /> Check-Out Guest</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Room Status */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-gray-800">Live Room Status (Floor 1)</h2>
            <div className="flex gap-4 text-xs font-medium">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500"></span> Available</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500"></span> Occupied</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-purple-500"></span> Cleaning</span>
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {[101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112].map((room, i) => {
              // Mock status colors
              const statusColors = ['bg-green-500', 'bg-red-500', 'bg-purple-500', 'bg-yellow-500'];
              const color = statusColors[i % 4];
              return (
                <div key={room} className="relative aspect-square border border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-400 cursor-pointer transition">
                  <span className="font-bold text-gray-700">{room}</span>
                  <span className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full ${color}`}></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
