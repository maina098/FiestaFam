import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-[#f8fafc] p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
