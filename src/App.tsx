/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Sidebar from './components/Sidebar';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BarChart, 
  Lock, 
  Search,
  BookOpen,
  PieChart,
  FileText
} from 'lucide-react';
import FBForecastCalculator from './components/FBForecastCalculator';

function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-20">
        <span className="category-tag">Academy Core • Financial Modeling</span>
        <h1 className="text-5xl lg:text-7xl font-display font-bold text-navy mb-8 leading-[1.1] tracking-tight">
          Hệ điều hành tri thức <br />
          <span className="text-gold italic">Tài Chính Khách Sạn</span>
        </h1>
        <p className="text-grey text-xl max-w-2xl leading-relaxed mb-12">
          Biến các dữ liệu tài chính phức tạp thành một nền tảng tri thức có cấu trúc, chuẩn hóa USALI và dễ dàng chuyển đổi số.
        </p>
        <div className="flex gap-4">
          <Link to="/revenue/fb-forecast" className="btn-gold px-12 py-5 text-sm flex items-center gap-3 shadow-xl hover:-translate-y-1 transition-transform">
            Khám phá bài học <ArrowRight size={18} />
          </Link>
          <button className="bg-white border border-border text-navy px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-paper transition-colors">
            Our Standards
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 border-t border-border pt-16">
        {[
          { icon: BookOpen, title: 'Chuẩn USALI', desc: 'Hệ thống báo cáo tài chính khách sạn chuẩn quốc tế v.11.' },
          { icon: PieChart, title: 'Mô hình 360°', desc: 'Phân tích trọn vẹn từ Occupancy đến GOP & EBITDA.' },
          { icon: FileText, title: 'Case Study', desc: 'Dữ liệu thực tế từ các resort và khách sạn hàng đầu.' }
        ].map((feature, i) => (
          <div key={i} className="data-card group hover:border-gold transition-colors cursor-default shadow-sm hover:shadow-md p-8">
            <div className="w-12 h-12 bg-accent-soft rounded-none flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-white transition-all">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-navy mb-4 !border-none !pb-0">{feature.title}</h3>
            <p className="text-grey text-xs leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FBForecastLesson() {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
       <nav className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-grey mb-12">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <ChevronRight size={10} />
        <Link to="/revenue" className="hover:text-gold transition-colors">Revenue modeling</Link>
        <ChevronRight size={10} />
        <span className="text-navy">F&B Revenue Forecast</span>
      </nav>

      <div className="mb-16">
        <span className="category-tag">Module 2.2 • Revenue Mix</span>
        <h1 className="text-4xl lg:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
          F&B Revenue Forecasting: <br />
          Covers & Average Spend Logic
        </h1>
        <p className="text-grey text-xl max-w-xl leading-relaxed">
          Learn how to build a dynamic F&B model by correlating house guest capture rates with external walk-in demand patterns.
        </p>
      </div>

      <article className="prose max-w-none">
        <div className="formula-box">
          <div className="text-[10px] font-bold text-grey uppercase tracking-[0.2em] mb-3 italic">Primary Logic Equation</div>
          <p className="text-2xl font-mono text-navy font-bold m-0 p-0 !mb-0 leading-tight">Total Rev = (Occ Rooms × Capture Rate × Spend) + (Walk-ins × Spend)</p>
        </div>

        <h2>1. Mục tiêu bài học</h2>
        <p>
          Học xong bài này, bạn sẽ làm chủ logic xây dựng module doanh thu nhà hàng cho khách sạn. 
          Không chỉ đơn thuần là gán một con số, chúng ta sẽ đi sâu vào <strong>tỷ lệ bắt khách (Capture Rate)</strong> 
          và <strong>chi tiêu bình quân (Average Spend)</strong> dựa trên nguồn khách lưu trú.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-12">
          <div className="data-card shadow-sm">
             <h3 className="before:content-[''] before:w-2 before:h-2 before:bg-gold before:inline-block">Demand Sources</h3>
             <ul className="text-xs space-y-4 mb-0 list-none pl-0">
               <li className="flex justify-between border-b border-border border-dotted pb-2">
                 <span className="text-grey uppercase font-bold tracking-widest">Room Guests</span>
                 <span className="font-mono text-navy font-bold italic">Primary</span>
               </li>
               <li className="flex justify-between border-b border-border border-dotted pb-2">
                 <span className="text-grey uppercase font-bold tracking-widest">Group Dining</span>
                 <span className="font-mono text-navy font-bold italic">MICE</span>
               </li>
               <li className="flex justify-between border-b border-border border-dotted pb-2">
                 <span className="text-grey uppercase font-bold tracking-widest">Walk-ins</span>
                 <span className="font-mono text-navy font-bold italic">External</span>
               </li>
             </ul>
          </div>
          <div className="data-card shadow-sm">
             <h3 className="before:content-[''] before:w-2 before:h-2 before:bg-navy before:inline-block">Yield Metrics</h3>
             <ul className="text-xs space-y-4 mb-0 list-none pl-0">
               <li className="flex justify-between border-b border-border border-dotted pb-2">
                 <span className="text-grey uppercase font-bold tracking-widest">Average Check</span>
                 <span className="font-mono text-navy font-bold font-bold">Standard</span>
               </li>
               <li className="flex justify-between border-b border-border border-dotted pb-2">
                 <span className="text-grey uppercase font-bold tracking-widest">Service Charge</span>
                 <span className="font-mono text-navy font-bold italic">Excl.</span>
               </li>
               <li className="flex justify-between border-b border-border border-dotted pb-2">
                 <span className="text-grey uppercase font-bold tracking-widest">VAT</span>
                 <span className="font-mono text-navy font-bold italic">Excl.</span>
               </li>
             </ul>
          </div>
        </div>

        <h2>2. Trình giả lập (Interactive Dashboard)</h2>
        <p>Thử nghiệm thay đổi các biến số để thấy sự tác động tức thì lên dòng tiền dòng (Bottom-line).</p>
        
        <FBForecastCalculator />

        <h2>3. Phân tích Logic & Giả định</h2>
        <p>
          <strong>Capture Rate (Tỷ lệ bắt khách):</strong> Đây là chỉ số quan trọng thể hiện hiệu quả của bộ phận Sales/Marketing 
          và chất lượng dịch vụ. Thông thường:
        </p>
        <ul>
          <li><strong>Bữa sáng (BF):</strong> 90% - 100% (Thường đi kèm giá phòng - Bed & Breakfast).</li>
          <li><strong>Bữa trưa (LC):</strong> 10% - 20% (Khách thường đi tour hoặc đi công tác bên ngoài).</li>
          <li><strong>Bữa tối (DN):</strong> 20% - 40% (Cạnh tranh trực tiếp với các nhà hàng bên ngoài xung quanh).</li>
        </ul>

        <h2>4. Checklist kiểm tra 5 bước</h2>
        <ul className="list-none pl-0 space-y-5 my-10">
          {[
            'Dữ liệu Occupancy đã khớp với Room Forecasting chưa?',
            'Capture Rate cho bữa sáng có vượt quá 100% không?',
            'Average Spend đã bao gồm phí phục vụ (Service Charge) và thuế VAT chưa?',
            'Tỷ lệ chi phí biến đổi (Variable COGS) đã được tính toán dựa trên doanh thu này chưa?'
          ].map((item, i) => (
            <li key={i} className="flex gap-4 items-start group">
              <span className="bg-gold text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center shrink-0 shadow-sm">✓</span>
              <span className="text-sm text-ink group-hover:text-navy transition-colors">{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-navy p-12 mt-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -mr-16 -mt-16 rounded-full" />
          <div className="relative z-10 max-w-md">
            <h3 className="text-white font-display text-3xl mb-4 !border-none !pb-0 !mt-0 leading-tight">Start Financial Implementation</h3>
            <p className="text-navy-200 m-0 text-sm italic opacity-80 leading-relaxed">Download our professional USALI-standard forecasting template (.xlsx) to apply this logic to your property today.</p>
          </div>
          <button className="btn-gold px-12 py-5 h-fit whitespace-nowrap shadow-xl hover:shadow-gold/20 hover:scale-105 transition-all text-sm font-black relative z-10">
            Download Template
          </button>
        </div>
      </article>
    </div>
  );
}

// Editorial Layout
function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-paper">
      {/* Editorial Header */}
      <header className="h-[70px] border-b border-border bg-white flex items-center justify-between px-10 z-10 shrink-0">
        <Link to="/" className="text-2xl font-display font-black text-navy tracking-tight">
          SHE<span className="text-gold">FIN</span>01
        </Link>
        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-navy">
          <span className="hover:text-gold cursor-pointer transition-colors">Academy</span>
          <span className="text-border">|</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Modeling Tools</span>
          <span className="text-border">|</span>
          <span className="hover:text-gold cursor-pointer transition-colors text-grey">USALI v.11</span>
          <div className="w-8 h-8 bg-navy rounded-full ml-2"></div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-paper p-10">
          <div className="max-w-4xl">
            {children}
          </div>
        </main>

        <aside className="hidden xl:flex w-64 border-l border-border bg-white flex-col p-8 overflow-y-auto shadow-inner translate-x-0 transition-transform">
          <div className="space-y-10">
            <div>
              <div className="text-[10px] uppercase font-bold text-grey tracking-widest mb-6">Market Metrics</div>
              <div className="space-y-6">
                <div className="group cursor-default">
                  <div className="text-[10px] text-grey uppercase font-bold mb-1">Current ADR Index</div>
                  <div className="text-2xl font-display font-bold text-navy">104.2</div>
                  <div className="text-[10px] text-green-700 font-bold">+2.4% vs Budget</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-[10px] text-grey uppercase font-bold mb-1">TrevPAR (Est.)</div>
                  <div className="text-2xl font-display font-bold text-navy">$284.15</div>
                </div>
              </div>
            </div>

            <div className="pt-20">
              <div className="text-[10px] uppercase font-bold text-grey tracking-widest mb-4">Resources</div>
              <button className="btn-gold w-full flex items-center justify-center gap-2 py-4 shadow-sm hover:shadow-md transition-shadow">
                <FileText size={14} /> Download Excel
              </button>
              <div className="mt-4 text-[9px] text-grey text-center font-bold tracking-widest uppercase opacity-50 italic">
                Model Version: v4.2 (Standardized)
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/revenue/fb-forecast" element={<FBForecastLesson />} />
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center h-full py-20">
             <h2 className="text-4xl font-bold text-navy-900 mb-4">Coming Soon</h2>
             <p className="text-navy-500">Mô-đun đang trong quá trình chuẩn hóa nội dung.</p>
             <Link to="/" className="mt-8 text-gold-600 font-bold hover:underline">Quay về trang chủ</Link>
          </div>
        } />
      </Routes>
    </AppLayout>
  );
}

// Icons extracted from lucide for quick use
import { Zap, ChevronRight } from 'lucide-react';
