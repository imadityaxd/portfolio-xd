import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using React and Tailwind.',
    image: '/assets/coding3.jpg',
    liveLink: 'https://your-portfolio.com',
    codeLink: 'https://your-portfolio.com',
  },
  {
    title: 'Quiz Website',
    description: 'A quiz website where users can test their knowledge with quizzes.',
    image: '/assets/coding3.jpg',
    liveLink: '#',
    codeLink: 'https://github.com/imadityaxd/jsuqiz',
  },
  {
    title: 'E-commerce Store',
    description: 'Frontend e-commerce template using Next.js.',
    image: '/assets/coding3.jpg',
    liveLink: '#',
    codeLink: '#',
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
                <div className='flex flex-row  gap-2'>
                  <a
                    href={project.liveLink}
                    className="flex flex-row gap-2 px-4 py-2 rounded-lg text-md uppercase border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>

                  </a>
                  <a
                    href={project.codeLink}
                    className="flex flex-row gap-2 px-4 py-2 rounded-lg text-md uppercase border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Code <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>

                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
