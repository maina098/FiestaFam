import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function HousekeepingDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Housekeeping Task Board</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="text-gray-500 font-medium">To Clean</div>
          <div className="text-2xl font-bold text-gray-800">24</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="text-gray-500 font-medium">In Progress</div>
          <div className="text-2xl font-bold text-blue-600">5</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="text-gray-500 font-medium">Completed</div>
          <div className="text-2xl font-bold text-green-600">18</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="text-gray-500 font-medium">Inspected</div>
          <div className="text-2xl font-bold text-purple-600">12</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium text-sm">
            <tr>
              <th className="p-4">Room</th>
              <th className="p-4">Guest Status</th>
              <th className="p-4">Assigned To</th>
              <th className="p-4">Status</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {[
              { room: '101', guest: 'Check-out', staff: 'Maria G.', status: 'Dirty', priority: 'High' },
              { room: '205', guest: 'Stayover', staff: 'John D.', status: 'Cleaning', priority: 'Normal' },
              { room: '304', guest: 'Check-in (2PM)', staff: 'Anna K.', status: 'Clean', priority: 'High' },
              { room: '410', guest: 'Check-out', staff: 'Unassigned', status: 'Dirty', priority: 'Low' },
            ].map((task, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="p-4 font-bold text-gray-800">{task.room}</td>
                <td className="p-4 text-gray-600">{task.guest}</td>
                <td className="p-4 text-gray-600">{task.staff}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max
                    ${task.status === 'Dirty' ? 'bg-red-100 text-red-700' : ''}
                    ${task.status === 'Cleaning' ? 'bg-blue-100 text-blue-700' : ''}
                    ${task.status === 'Clean' ? 'bg-green-100 text-green-700' : ''}
                  `}>
                    {task.status === 'Dirty' && <AlertCircle size={12} />}
                    {task.status === 'Cleaning' && <Clock size={12} />}
                    {task.status === 'Clean' && <CheckCircle2 size={12} />}
                    {task.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`font-medium ${task.priority === 'High' ? 'text-red-500' : 'text-gray-500'}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 font-medium hover:underline">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
