import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaWordpress } from 'react-icons/fa6'
import { SiTailwindcss, SiElementor, SiWoocommerce, SiWix, SiFigma } from 'react-icons/si'
import { LuCode, LuStore, LuPenTool, LuLayoutTemplate, LuTerminal } from 'react-icons/lu'

export const skillGroups = [
  {
    title: 'Front-End Development',
    icon: LuCode,
    items: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React.js', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: FaBootstrap },
    ],
  },
  {
    title: 'Web and CMS Platforms',
    icon: LuStore,
    items: [
      { name: 'WordPress', icon: FaWordpress },
      { name: 'Elementor', icon: SiElementor },
      { name: 'WooCommerce', icon: SiWoocommerce },
      { name: 'Wix', icon: SiWix },
    ],
  },
  {
    title: 'Design and Fundamentals',
    icon: LuPenTool,
    items: [
      { name: 'Figma', icon: SiFigma },
      { name: 'UI/UX basics', icon: LuLayoutTemplate },
      { name: 'Software development fundamentals', icon: LuTerminal },
    ],
  },
]

export const workStyle = [
  'Research',
  'Problem-solving',
  'Communication',
  'Teamwork',
  'Deadline management',
]