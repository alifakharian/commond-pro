import React, { useState } from 'react';
import { ourProjects } from '../data/ourProjects';
import Tabs from '../components/OurProjects/Tabs';
import ProjectCard from '../components/OurProjects/ProjectCard';

const categories = ['مسکونی', 'تجاری', 'اداری', 'ویلایی', 'بازسازی'];
const ITEMS_PER_PAGE = 4;

const OurProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('تمام پروژه ها');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = activeTab === 'تمام پروژه ها'
    ? ourProjects
    : ourProjects.filter((p) => p.category === activeTab);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="lg:py-[64px] py-[26px] max-w-[1232px] mx-auto">
      <Tabs
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setCurrentPage(1); // reset to first page when tab changes
        }}
        categories={categories}
      />
      <div className="flex flex-col gap-12 mt-8 mx-auto">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* صفحه‌بندی با دکمه‌های قبلی و بعدی */}
      <div className="flex justify-between items-center mt-10 gap-2 px-4 flex-wrap">
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="md:px-[28px] px-[18px] py-[8px] cursor-pointer md:text-[16px] text-[12px] font-[400] text-[#B85C38] rounded-[8px] rounded bg-white border-3 border-[#B85C38] "
        >
          بعدی
        </button>
        <div className='flex gap-6'>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`md:px-[28px] px-[18px] cursor-pointer py-[8px] md:text-[16px] text-[12px] font-[400] text-[#B85C38] rounded-[8px] rounded  ${currentPage === i + 1 ? 'bg-[#B85C38] text-[#FAFAFA] border-3 border-[#B85C38]' : 'bg-white border-3 border-[#B85C38]'
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>


        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="md:px-[28px] px-[18px] cursor-pointer py-[8px] md:text-[16px] text-[12px] font-[400] text-[#B85C38] rounded-[8px] rounded bg-white border-3 border-[#B85C38]"
        >
          قبلی
        </button>
      </div>

    </div>
  );
};

export default OurProjects;
