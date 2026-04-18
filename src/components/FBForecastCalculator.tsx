/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { formatCurrency, formatNumber } from '@/src/lib/utils';
import { Calculator, TrendingUp, Users, Utensils } from 'lucide-react';

export default function FBForecastCalculator() {
  const [inputs, setInputs] = useState({
    roomInventory: 100,
    occupancy: 75,
    guestPerRoom: 1.8,
    captureRateBF: 95,
    captureRateLC: 15,
    captureRateDN: 30,
    avgSpendBF: 250000,
    avgSpendLC: 450000,
    avgSpendDN: 650000,
    outsideCovers: 20,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  // Calculations
  const inHouseGuests = Math.round((inputs.roomInventory * (inputs.occupancy / 100)) * inputs.guestPerRoom);
  
  const coversBF = Math.round(inHouseGuests * (inputs.captureRateBF / 100));
  const coversLC = Math.round(inHouseGuests * (inputs.captureRateLC / 100)) + inputs.outsideCovers;
  const coversDN = Math.round(inHouseGuests * (inputs.captureRateDN / 100)) + Math.round(inputs.outsideCovers * 1.5);

  const revenueBF = coversBF * inputs.avgSpendBF;
  const revenueLC = coversLC * inputs.avgSpendLC;
  const revenueDN = coversDN * inputs.avgSpendDN;

  const totalRevenue = revenueBF + revenueLC + revenueDN;
  const totalCovers = coversBF + coversLC + coversDN;
  const averageCheck = totalCovers > 0 ? totalRevenue / totalCovers : 0;

  const chartData = [
    { name: 'Sáng', value: revenueBF, color: '#0c92eb' },
    { name: 'Trưa', value: revenueLC, color: '#f59e0b' },
    { name: 'Tối', value: revenueDN, color: '#0a426e' },
  ];

  return (
    <div className="bg-white border border-border rounded-none shadow-sm overflow-hidden my-12">
      <div className="bg-navy p-5 text-white flex items-center gap-3">
        <Calculator className="w-5 h-5 text-gold" />
        <h3 className="text-sm font-bold uppercase tracking-widest m-0 text-white">F&B Revenue Forecast Emulator</h3>
      </div>
      
      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] font-bold text-grey uppercase tracking-[0.2em] mb-4 border-b border-border pb-2">Occupancy Metrics</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-ink uppercase mb-2">Room Inventory</label>
                <input 
                  type="number" name="roomInventory" value={inputs.roomInventory} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-none focus:border-gold outline-none transition-all font-mono text-sm bg-paper/30"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-ink uppercase mb-2">Occupancy (%)</label>
                <input 
                  type="number" name="occupancy" value={inputs.occupancy} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-none focus:border-gold outline-none transition-all font-mono text-sm bg-paper/30"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-grey uppercase tracking-[0.2em] mb-4 border-b border-border pb-2">Yield & Capture Rates</h4>
            <div className="space-y-4">
              {[
                { label: 'Breakfast', cap: 'captureRateBF', spd: 'avgSpendBF' },
                { label: 'Lunch', cap: 'captureRateLC', spd: 'avgSpendLC' },
                { label: 'Dinner', cap: 'captureRateDN', spd: 'avgSpendDN' },
              ].map((item) => (
                <div key={item.label} className="grid grid-cols-3 gap-4 items-center">
                  <span className="text-xs font-bold text-navy uppercase">{item.label}</span>
                  <div className="relative">
                    <input 
                      type="number" name={item.cap} value={(inputs as any)[item.cap]} onChange={handleInputChange} 
                      className="w-full px-2 py-1.5 border border-border bg-paper/30 font-mono text-xs text-center" 
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-grey">%</span>
                  </div>
                  <div className="relative">
                    <input 
                      type="number" name={item.spd} value={(inputs as any)[item.spd]} onChange={handleInputChange} 
                      className="w-full px-2 py-1.5 border border-border bg-paper/30 font-mono text-xs text-right pr-6" 
                    />
                    <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[9px] text-grey">VND</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:border-l lg:border-border lg:pl-12">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-grey uppercase tracking-[0.2em] mb-4 border-b border-border pb-2">Daily Performance Output</h4>
            
            <div className="flex justify-between items-center py-3 border-b border-border border-dashed">
              <span className="text-sm text-ink uppercase tracking-wider font-medium">Estimated Covers</span>
              <span className="text-xl font-mono font-bold text-navy">{formatNumber(totalCovers)}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-border border-dashed">
              <span className="text-sm text-ink uppercase tracking-wider font-medium">Capture Variance</span>
              <span className="text-sm font-mono font-bold text-green-700">+2.4% vs Budget</span>
            </div>

            <div className="bg-paper p-6 mt-4">
              <div className="text-[10px] text-grey font-bold uppercase mb-2 tracking-widest">Target Daily Revenue</div>
              <div className="text-3xl font-display font-black text-navy">{formatCurrency(totalRevenue)}</div>
            </div>
          </div>

          <div className="h-48 w-full">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E1" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666666', fontSize: 10, fontWeight: 700}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: 'rgba(197, 160, 89, 0.05)'}}
                  content={({active, payload}) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-3 border border-border shadow-xl">
                          <p className="text-[10px] font-bold text-navy uppercase mb-1">{payload[0].payload.name}</p>
                          <p className="text-xs font-mono font-bold text-gold">{formatCurrency(payload[0].value as number)}</p>
                        </div>
                      )
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" radius={0} barSize={40}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color === '#0c92eb' ? '#002147' : (entry.color === '#f59e0b' ? '#C5A059' : '#1A1A1A')} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
