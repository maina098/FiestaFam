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
  { name: 'Hotel Manager', href: '/admin/manager', icon: Building2 },
  { name: 'Reception', href: '/admin/reception', icon: Users },
  { name: 'Housekeeping', href: '/admin/housekeeping', icon: PaintBucket },
  { name: 'Maintenance', href: '/admin/maintenance', icon: Wrench },
  { name: 'Inventory', href: '/admin/inventory', icon: PackageSearch },
  { name: 'Restaurant (POS)', href: '/admin/restaurant', icon: Utensils },
  { name: 'Accountant', href: '/admin/accountant', icon: Wallet },
  { name: 'Reports', href: '/admin/reports', icon: LineChart },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-[#111827] h-screen text-gray-300">
      <div className="flex items-center h-20 px-6 bg-[#0f172a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            <Building2 size={24} />
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg leading-tight">Hotel Admin</h1>
            <p className="text-xs text-gray-400">Enterprise HMS</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          ROLE DASHBOARDS
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Icon size={20} className="text-gray-400 group-hover:text-white" />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white w-full transition-colors">
          <LogOut size={20} className="text-gray-400" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
}
