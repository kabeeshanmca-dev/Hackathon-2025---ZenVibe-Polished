
import React from 'react';
import type { Tab } from '../types';
import { ChatBubbleIcon, BookOpenIcon, LifeBuoyIcon, SparklesIcon } from './icons';

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isVisible: boolean;
  isChatLayout: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, isVisible, isChatLayout }) => {
  const navItems = [
    { id: 'discussion', label: 'Discuss', Icon: ChatBubbleIcon },
    { id: 'chatbot', label: 'Friend Chat', Icon: SparklesIcon },
    { id: 'resources', label: 'Resources', Icon: BookOpenIcon },
    { id: 'help', label: 'Help', Icon: LifeBuoyIcon },
  ];
  
  const navClasses = isChatLayout
    ? 'fixed top-0 left-0 bottom-0 w-24 md:w-28 bg-slate-900 border-r border-slate-700 z-10 pt-16 transition-all duration-300 ease-in-out'
    : `fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 z-10 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`;
      
  const containerClasses = isChatLayout
    ? 'h-full flex flex-col justify-center items-center space-y-8'
    : 'container mx-auto px-4 h-20 flex justify-around items-center max-w-2xl';

  return (
    <nav className={navClasses}>
      <div className={containerClasses}>
        {navItems.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as Tab)}
            className={`flex flex-col items-center justify-center space-y-1 w-24 transition-colors duration-200 ${
              activeTab === id
                ? 'text-violet-400'
                : 'text-slate-400 hover:text-violet-300'
            }`}
          >
            <div className="w-6 h-6"><Icon /></div>
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
