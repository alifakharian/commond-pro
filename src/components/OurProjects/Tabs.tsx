import React from 'react';

interface TabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    categories: string[];

}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, categories }) => {
    const allTabs = ['تمام پروژه ها', ...categories];
    const reversedTabs = allTabs.slice().reverse();
    return (
        <div className="flex justify-between pb-2 px-2 w-full" >
            {reversedTabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`lg:px-[48px] px-[8px] py-[8px] border-1 cursor-pointer whitespace-nowrap font-medium md:text-[20px] text-[12px] rounded-[8px] border-[#B85C38] text-sm font-medium focus:outline-none
                              transition-colors duration-200 ${activeTab === tab
                            ? 'bg-[#B85C38] text-[#FAFAFA] font-[400]'
                            : 'text-[#B85C38] hover:text-[#FAFAFA]  hover:bg-[#B85C38]'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
