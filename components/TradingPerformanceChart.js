'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

// TradingPerformanceChart component
// Displays trading system performance metrics using Recharts
export default function TradingPerformanceChart({ data }) {
  // Mock data if none provided
  const chartData = data || [
    { date: 'Week 1', roi: 0, cumulative: 0, trades: 5 },
    { date: 'Week 2', roi: 2.1, cumulative: 2.1, trades: 8 },
    { date: 'Week 3', roi: 1.8, cumulative: 3.9, trades: 12 },
    { date: 'Week 4', roi: 3.2, cumulative: 7.1, trades: 15 },
    { date: 'Week 5', roi: 2.5, cumulative: 9.6, trades: 18 },
    { date: 'Week 6', roi: 1.9, cumulative: 11.5, trades: 22 },
    { date: 'Week 7', roi: 2.5, cumulative: 14.0, trades: 25 },
  ]

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-navy-dark mb-4">Performance Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorRoi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#64FFDA" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#64FFDA" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="date" 
            stroke="#8892B0"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#8892B0"
            style={{ fontSize: '12px' }}
            label={{ value: 'ROI (%)', angle: -90, position: 'insideLeft', style: { fill: '#8892B0' } }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0A192F', 
              border: '1px solid #64FFDA',
              borderRadius: '8px',
              color: '#64FFDA'
            }}
            labelStyle={{ color: '#64FFDA' }}
          />
          <Area 
            type="monotone" 
            dataKey="cumulative" 
            stroke="#64FFDA" 
            fillOpacity={1} 
            fill="url(#colorRoi)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Total ROI</div>
          <div className="text-2xl font-bold text-navy-dark">+14.0%</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Win Rate</div>
          <div className="text-2xl font-bold text-navy-dark">67%</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Total Trades</div>
          <div className="text-2xl font-bold text-navy-dark">150+</div>
        </div>
      </div>
    </div>
  )
}
