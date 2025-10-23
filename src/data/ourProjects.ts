export type ProjectType = 'مسکونی' | 'تجاری' | 'اداری' | 'ویلایی' | 'بازسازی';
import img1 from "../assets/images/projects/project1.jpg"
export interface Project {
  id: number;
  title: string;
  area: string;
  description: string;
  category: ProjectType;
  image: string;
}

export const ourProjects: Project[] = [
  {
    id: 1,
    title: "  ",
    area: "  ",
    description: " ",
    category:"مسکونی",
    image: img1,
  },
  {
    id: 2,
    title: "  ",
    area: "  ",
    description: "",
    category: "مسکونی",
    image: img1,
  },
  {
    id: 3,
    title: "",
    area: "  ",
    description: "",
    category: "تجاری",
    image: img1,
  },
   {
    id: 4,
    title: "  ",
    area: "  ",
    description: "",
    category: "اداری",
    image: img1,
  },
   {
    id: 5,
    title: "  ",
    area: "",
    description: " ",
    category: "بازسازی",
    image: img1,
  },
];
