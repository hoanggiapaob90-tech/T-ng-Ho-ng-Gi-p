/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BookOpen, 
  BarChart3, 
  Settings2, 
  Zap, 
  Layout, 
  Library,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const sidebarItems = [
  { icon: BookOpen, label: 'Fundamentals', path: '/fundamentals' },
  { icon: BarChart3, label: 'Revenue Modeling', path: '/revenue' },
  { icon: Settings2, label: 'Cost Management', path: '/cost' },
  { icon: Zap, label: 'Investment & Analysis', path: '/investment' },
  { icon: Layout, label: 'Digital Transformation', path: '/digital' },
  { icon: Library, label: 'Template Library', path: '/templates' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-navy text-white p-4 rounded-full shadow-2xl"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-border transform transition-transform duration-300 lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-8 border-b border-border">
            <NavLink to="/" className="group">
              <h1 className="text-2xl font-display font-black text-navy tracking-tight">SHE<span className="text-gold">FIN</span>01</h1>
              <p className="text-[9px] text-grey uppercase tracking-[0.2em] font-bold mt-1">Financial Intelligence</p>
            </NavLink>
          </div>

          <div className="px-6 mt-8 overflow-y-auto flex-1">
            <div className="text-[10px] uppercase font-bold text-grey tracking-widest mb-4">Content Modules</div>
            <nav className="space-y-1">
              {sidebarItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 py-3 text-sm transition-all group border-b border-transparent",
                    isActive 
                      ? "text-navy font-bold border-gold" 
                      : "text-ink hover:text-gold"
                  )}
                >
                  <span className="text-[10px] text-grey font-mono w-4">{(index + 1).toString().padStart(2, '0')}</span>
                  <span className="flex-1">{item.label}</span>
                </NavLink>
              ))}
            </nav>

            <div className="text-[10px] uppercase font-bold text-grey tracking-widest mt-10 mb-4">Documentation</div>
            <div className="space-y-4">
              <div className="text-sm text-ink hover:text-gold cursor-pointer transition-colors">USALI Standards</div>
              <div className="text-sm text-ink hover:text-gold cursor-pointer transition-colors">P&L Structure</div>
            </div>
          </div>

          <div className="p-6 border-t border-border bg-paper/50">
            <p className="text-[10px] text-grey mb-2 font-bold uppercase tracking-wider">Course Progress</p>
            <div className="h-1 w-full bg-border rounded-none overflow-hidden mb-2">
              <div className="h-full bg-gold w-[15%]" />
            </div>
            <p className="text-[10px] text-grey font-mono">03 / 42 MODULES</p>
          </div>
        </div>
      </aside>
    </>
  );
}
