import Link from 'next/link';
import {
  LayoutDashboard,
  Building2,
  CalendarCheck,
  Users,
  PaintBucket,
  PackageSearch,
  LineChart,
  Settings,
  LogOut,
  Bell,
  Wrench,
  Utensils,
  Wallet
} from 'lucide-react';

const navigation = [
  { name: 'Super Admin', href: '/admin/super-admin', icon: LayoutDashboard },
  { name: 'User Provisioning', href: '/admin/users', icon: Users },
  { name: 'Reports', href: '/admin/reports', icon: LineChart },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-[#0a0f11] h-screen text-gray-300 border-r border-[#1f2d30]">
      <div className="flex items-center h-20 px-6 bg-[#0e1618] border-b border-[#1f2d30]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#c6ac83] rounded-lg flex items-center justify-center text-[#0a0f11] font-bold text-xl">
            <Utensils size={24} />
          </div>
          <div>
            {/* Logo text removed per user request */}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6">
        <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          ROLE DASHBOARDS
        </div>
        <nav className="flex flex-col gap-3 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-gray-300 hover:bg-[#131d20] hover:text-[#c6ac83]"
              >
                <Icon size={20} className="text-gray-400 group-hover:text-[#c6ac83]" />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-[#1f2d30]">
        <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:bg-[#131d20] hover:text-[#c6ac83] w-full transition-colors">
          <LogOut size={20} className="text-gray-400" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
}
