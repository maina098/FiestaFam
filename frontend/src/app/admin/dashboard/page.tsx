import { 
  Building2, 
  CalendarCheck, 
  Clock, 
  MessageSquare,
  Users,
  PaintBucket,
  Key,
  Settings,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 font-sans pb-10">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#131d20] via-[#1a2629] to-[#0a0f11] p-10 text-white shadow-2xl group">
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-[#c6ac83]/20 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-gradient-to-tr from-[#c6ac83]/10 to-transparent blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium text-[#c6ac83] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            System Online & Optimal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Welcome back,<br />
            Jane Smith 🛎️
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-lg mb-8">
            "Hospitality is simply an opportunity to show love and care."
          </p>
          <button className="flex items-center gap-2 bg-[#c6ac83] hover:bg-[#b0966a] text-[#0a0f11] font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,172,131,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
            View Today's Report <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Building2, label: 'Total Rooms', value: '124', trend: '+2%', color: 'from-blue-500/20 to-blue-500/5', iconColor: 'text-blue-500' },
          { icon: Clock, label: 'Pending Check-ins', value: '12', subValue: 'Guests', trend: '-1', color: 'from-amber-500/20 to-amber-500/5', iconColor: 'text-amber-500' },
          { icon: CalendarCheck, label: 'Bookings Today', value: '34', trend: '+15%', color: 'from-emerald-500/20 to-emerald-500/5', iconColor: 'text-emerald-500' },
          { icon: MessageSquare, label: 'Unread Messages', value: '5', trend: 'Needs Action', color: 'from-rose-500/20 to-rose-500/5', iconColor: 'text-rose-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 group relative overflow-hidden hover:-translate-y-1">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 opacity-50 group-hover:opacity-100 pointer-events-none`}></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${stat.iconColor} shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} strokeWidth={2.5} />
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  <TrendingUp size={12} className={stat.trend.startsWith('-') ? 'rotate-180 text-rose-500' : 'text-emerald-500'} />
                  {stat.trend}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</h3>
                  {stat.subValue && <span className="text-sm font-medium text-slate-500">{stat.subValue}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modules Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mt-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[#c6ac83]/10 rounded-lg">
            <Settings size={24} className="text-[#c6ac83]" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Hotel Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: 'Customer Management', desc: 'View and edit guest profiles and history', color: 'group-hover:text-indigo-600', bg: 'group-hover:bg-indigo-50' },
            { icon: Building2, title: 'Room Management', desc: 'Manage room status and availability', color: 'group-hover:text-emerald-600', bg: 'group-hover:bg-emerald-50' },
            { icon: Key, title: 'Check-in / Check-out', desc: 'Process guest arrivals and departures', color: 'group-hover:text-amber-600', bg: 'group-hover:bg-amber-50' },
            { icon: PaintBucket, title: 'Housekeeping', desc: 'Assign cleaning tasks and track status', color: 'group-hover:text-sky-600', bg: 'group-hover:bg-sky-50' },
          ].map((module, i) => (
            <button key={i} className="group text-left p-6 rounded-2xl border border-slate-200 hover:border-transparent bg-white hover:bg-slate-50 transition-all duration-300 hover:shadow-lg relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c6ac83]/30 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              <div className={`w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-5 transition-colors duration-300 ${module.bg} ${module.color}`}>
                <module.icon size={28} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#c6ac83] transition-colors">{module.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {module.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
