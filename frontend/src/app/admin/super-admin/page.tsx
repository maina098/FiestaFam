import { Building2, Users, CalendarCheck, Wallet } from 'lucide-react';

export default function SuperAdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Super Admin Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Add New Hotel
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Building2 size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Hotels</p>
            <p className="text-2xl font-bold text-gray-800">14</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Employees</p>
            <p className="text-2xl font-bold text-gray-800">1,245</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <CalendarCheck size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Active Reservations</p>
            <p className="text-2xl font-bold text-gray-800">8,432</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Wallet size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Monthly Revenue</p>
            <p className="text-2xl font-bold text-gray-800">$2.4M</p>
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-80 flex items-center justify-center">
          <p className="text-gray-400 font-medium">Revenue by Month Chart Placeholder</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-80 flex items-center justify-center">
          <p className="text-gray-400 font-medium">Occupancy Rate Chart Placeholder</p>
        </div>
      </div>
    </div>
  );
}
