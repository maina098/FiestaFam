import { 
  Building2, 
  CalendarCheck, 
  Clock, 
  MessageSquare,
  Users,
  PaintBucket,
  Key
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
            Welcome back,<br />
            Jane Smith 🛎️
          </h1>
          <p className="text-blue-100 font-medium mt-4 text-lg">
            "Hospitality is simply an opportunity to show love and care."
          </p>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-32 -mb-16 w-48 h-48 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <Building2 size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Rooms</p>
            <p className="text-3xl font-bold text-gray-800">124</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Pending Check-ins</p>
            <p className="text-3xl font-bold text-gray-800">12 <span className="text-lg text-gray-500 font-medium">Guests</span></p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
            <CalendarCheck size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Bookings Today</p>
            <p className="text-3xl font-bold text-gray-800">34</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center mb-4">
            <MessageSquare size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Unread Messages</p>
            <p className="text-3xl font-bold text-gray-800">5</p>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="text-gray-400" size={20} />
          <h2 className="text-lg font-bold text-gray-800">Hotel Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group text-left">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
              <Users size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Customer Management</h3>
              <p className="text-sm text-gray-500 leading-relaxed">View and edit guest profiles and history</p>
            </div>
          </button>

          <button className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group text-left">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-100 transition-colors shrink-0">
              <Building2 size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Room Management</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Manage room status and availability</p>
            </div>
          </button>

          <button className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group text-left">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors shrink-0">
              <Key size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Check-in / Check-out</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Process guest arrivals and departures</p>
            </div>
          </button>
          
          <button className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group text-left">
            <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-100 transition-colors shrink-0">
              <PaintBucket size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Housekeeping</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Assign cleaning tasks and track status</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
