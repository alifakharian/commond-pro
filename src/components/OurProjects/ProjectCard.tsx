import React from 'react';
import type { Project } from '../../data/ourProjects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className=" flex flex-row md:items-start items-center gap-8 p-4 ">

      {/* Image */}
      <div className="w-1/2 relative">
        <img src={project.image} alt={project.title} className="w-full md:max-w-[410px] max-w-[135px] h-[138px] md:h-[341px] rounded-[40px] rounded-tr-none object-cover" />

        <div className="absolute md:top-[20px] top-[10px] custom-position border-1 border-[#362826] rounded-[40px] rounded-tr-none w-full md:max-w-[400px] max-w-[120px] h-[132px] md:h-[350px] rounded-[40px] rounded-tr-none object-cover"
          
        />

      </div>


      {/* Text */}
      <div className="w-1/2">
        <h3 className="md:text-[24px] text-[12px] font-bold mb-2 text-center w-full">جزییات پروژه</h3>
        <div className='flex items-center'><h3 className="md:text-[24px] text-[12px] font-bold mb-4 whitespace-nowrap">نام پروژه:</h3><p className='w-full text-center'>{project.title}</p></div>
        <div className='flex items-center'><h3 className="md:text-[24px] text-[12px] font-bold mb-4 whitespace-nowrap">متراژ پروژه:</h3> <p className="w-full text-center">{project.area}</p></div>
        <div className='flex items-center'> <h3 className="md:text-[24px] text-[12px] font-bold mb-4 whitespace-nowrap">توضیحات:</h3><p className="w-full text-center">{project.description}</p></div>
      </div>


    </div>
  );
};

export default ProjectCard;
