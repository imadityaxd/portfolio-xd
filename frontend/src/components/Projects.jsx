import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using React and Tailwind.',
    image: '/assets/coding3.jpg',
    link: 'https://your-portfolio.com',
  },
  {
    title: 'Blog Platform',
    description: 'Full-stack blog app using MERN stack.',
    image: '/assets/coding3.jpg',
    link: '#',
  },
  {
    title: 'E-commerce Store',
    description: 'Frontend e-commerce template using Next.js.',
    image: '/assets/coding3.jpg',
    link: '#',
  },
];

export default function ProjectCarousel() {
  return (
    <section id="projects" className="bg-gray-900 py-16 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-300">Projects</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-md rounded-md mb-6 shadow-lg"
                />
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-teal-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
