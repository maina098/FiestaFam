'use client';
import { useEffect, useState } from 'react';

export default function HousekeepingBoard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real scenario, this would fetch from GET /housekeeping/tasks
    // For now, we mock some data based on the HotelOS spec
    const mockTasks = [
      { id: 1, roomId: '101', type: 'checkout_clean', priority: 'high', status: 'pending', assignedTo: 'John Doe' },
      { id: 2, roomId: '102', type: 'daily_refresh', priority: 'normal', status: 'in_progress', assignedTo: 'Jane Smith' },
      { id: 3, roomId: '105', type: 'deep_clean', priority: 'low', status: 'done', assignedTo: 'John Doe' },
      { id: 4, roomId: '201', type: 'checkout_clean', priority: 'high', status: 'pending', assignedTo: 'Unassigned' },
    ];
    setTasks(mockTasks);
    setLoading(false);
  }, []);

  const columns = ['pending', 'in_progress', 'done', 'inspected'];

  const handleDragStart = (e: React.DragEvent, taskId: number) => {
    e.dataTransfer.setData('taskId', taskId.toString());
  };

  const handleDrop = (e: React.DragEvent, status: string) => {
    const taskId = parseInt(e.dataTransfer.getData('taskId'));
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status } : t));
    // Here we would call PATCH /housekeeping/tasks/:id { status }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 style={{ fontSize: '28px', color: '#5c4b3a', marginBottom: '10px' }}>Housekeeping Board</h1>
      <p style={{ color: '#78716c', marginBottom: '30px' }}>Drag and drop tasks to update room cleaning statuses.</p>

      {loading ? (
        <p>Loading board...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {columns.map(col => (
            <div 
              key={col} 
              style={{ backgroundColor: '#f5f5f4', padding: '15px', borderRadius: '12px', minHeight: '600px' }}
              onDrop={(e) => handleDrop(e, col)}
              onDragOver={handleDragOver}
            >
              <h2 style={{ fontSize: '16px', color: '#44403c', marginBottom: '15px', textTransform: 'capitalize' }}>
                {col.replace('_', ' ')}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {tasks.filter(t => t.status === col).map(task => (
                  <div 
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    style={{ 
                      backgroundColor: 'white', 
                      padding: '15px', 
                      borderRadius: '8px', 
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      borderLeft: task.priority === 'high' ? '4px solid #eab308' : '4px solid #a8a29e',
                      cursor: 'grab'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#292524' }}>Room {task.roomId}</span>
                      <span style={{ fontSize: '12px', color: task.priority === 'high' ? '#ca8a04' : '#78716c', fontWeight: 'bold' }}>
                        {task.priority.toUpperCase()}
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#57534e', marginBottom: '10px', textTransform: 'capitalize' }}>
                      {task.type.replace('_', ' ')}
                    </p>
                    <p style={{ fontSize: '12px', color: '#a8a29e' }}>Assigned: {task.assignedTo}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
