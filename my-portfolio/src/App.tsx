import { Card } from './components/ui/card'
import './App.css'

function App() {
  return (
    <>
      {/* Main container - flex column on mobile, row on larger screens */}
      <div className='min-h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-5 bg-gray-800/20 rounded-lg p-4 md:p-5'>

        {/* Left card - full width on mobile, 1/3 on larger screens */}
        <Card className='bg-gray-200/50 min-h-[500px] h-auto lg:h-screen w-full lg:w-1/3 shadow-cyan-500 border-cyan-500/40 p-5 mb-5 lg:mb-0'>
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Image */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-500/40 shadow-lg">
              <img src="/yamajid.jpg"  className="w-full h-full object-cover" />
            </div>
            {/* Personal Info */}
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white">Software engineer</h2>
              <p className="text-gray-700">Based in Agadir</p>
            </div>

            {/* Contact Links */}
            <div className='h-10 w-28 flex justify-center items-center bg-gray-700/50 border border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-lg transition-all rounded-lg'>

            <div className="flex space-x-4">
              <a href="https://github.com/yamajid" className="text-white hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/yamajid" className="text-white hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
ƒ            </div>
            </div>

            {/* Skills Section */}
            <div className="w-full">
              <h3 className="text-xl font-bold text-cyan-500/50 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">NextJs</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">sqlite3</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">postgresql</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">Django</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">Django Rest Framework</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">Docker Compose</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">WebSocket</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">C++</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">C</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">TCP/IP</span>
                <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-sm">CI/CD</span>
                {/* Add more skills */}
              </div>
            </div>

            {/* Date/Time Display - Added to the bottom of left card */}
          </div>
        </Card>

        {/* Right card - full width on mobile, 2/3 on larger screens */}
        <Card className='bg-gray-200/50 min-h-[500px] h-auto lg:h-screen w-full lg:w-2/3 shadow-cyan-500 border-cyan-500/40 p-5 overflow-y-auto'>
          <div className='rounded-lg h-auto space-y-8 md:space-y-10 flex-col'>
            {/* Name Section - responsive text size */}
            <div className='bg-gray-400/30 rounded-lg p-4 md:p-5'>
              <h1 className='text-white text-4xl md:text-5xl lg:text-7xl animate-bounce'>
                I<span className='text-cyan-500/60'><b>'</b></span>m Y<span className='text-cyan-500/60'><b>A</b></span><b>MAJID</b>
              </h1>
            </div>

            {/* Bio Section */}
            <div className='bg-gray-400/30 rounded-lg p-4 md:p-5'>
              <p className='text-gray-600 text-base md:text-lg'><b>
                I am a software engineering student with hands-on experience in building full-stack web
                applications using modern technologies like Django REST Framework (DRF), ReactJS,
                and Docker for deployment. ensuring seamless CI/CD pipelines and efficient
                deployment workflows. Additionally, I have experience in low-level programming and
                networking, having developed an IRC chat application in C++ using TCP/IP protocols,
                showcasing my versatility in both web and systems development. I am
                passionate about building robust, high-performance applications and
                continuously improving my skills in web development and DevOps
                practices
              </b></p>
            </div>

            {/* Projects Section */}
            <div className='bg-gray-400/30 rounded-lg p-4 md:p-5'>
              <h2 className='text-white text-2xl md:text-3xl mb-4 md:mb-6 font-bold'>Projects</h2>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                {/* Project Card 1 */}
                <div className='bg-gray-700/50 rounded-lg p-4 border border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-lg transition-all'>
                  <h3 className='text-white text-lg md:text-xl font-bold'>Full Stack Web Application</h3>
                  <p className='text-gray-300 mt-2 text-sm md:text-base'>Django REST + WebSockets + Vite application and tailwindcss with CI/CD integration</p>
                  <div className='flex flex-wrap gap-2 mt-3'>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>Django</span>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>Vite</span>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>tailwindcss</span>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>WebSocket</span>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>Docker</span>
                  </div>
                  <a href="https://www.github.com/yamajid/ft_transcendence" className='text-cyan-400 text-sm mt-4 inline-block hover:underline'>View Project →</a>
                </div>

                {/* Project Card 2 */}
                <div className='bg-gray-700/50 rounded-lg p-4 border border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-lg transition-all'>
                  <h3 className='text-white text-lg md:text-xl font-bold'>IRC Chat Application</h3>
                  <p className='text-gray-300 mt-2 text-sm md:text-base'>C++ application using TCP/IP protocols</p>
                  <div className='flex flex-wrap gap-2 mt-3'>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>C++</span>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>TCP/IP</span>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>Networking</span>
                  </div>
                  <a href="https://www.github/com/yamajid/ft_irc" className='text-cyan-400 text-sm mt-4 inline-block hover:underline'>View Project →</a>
                </div>
                <div className='bg-gray-700/50 rounded-lg p-4 border border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-lg transition-all'>
                  <h3 className='text-white text-lg md:text-xl font-bold'>MultiServiceDocker</h3>
                  <p className='text-gray-300 mt-2 text-sm md:text-base'>Docker, Docker Compose, Microservices, CI/CD, NGINX, MariaDB, WordPress</p>
                  <div className='flex flex-wrap gap-2 mt-3'>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>Docker</span>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>Docker compose</span>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>Nginx</span>
                  </div>
                  <a href="https://www.github.com/yamajid/Inception" className='text-cyan-400 text-sm mt-4 inline-block hover:underline'>View Project →</a>
                </div>
                <div className='bg-gray-700/50 rounded-lg p-4 border border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-lg transition-all'>
                  <h3 className='text-white text-lg md:text-xl font-bold'>Minishell</h3>
                  <p className='text-gray-300 mt-2 text-sm md:text-base'>A custom implementation of a Unix shell, featuring command execution, built-in commands, and input/output redirection.</p>
                  <div className='flex flex-wrap gap-2 mt-3'>
                    <span className='px-2 py-1 bg-gray-600/50 text-gray-200 rounded text-xs'>C Language</span>
                  </div>
                  <a href="https://www.github.com/yamajid/Inception" className='text-cyan-400 text-sm mt-4 inline-block hover:underline'>View Project →</a>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className='bg-gray-400/30 rounded-lg p-4 md:p-5'>
              <h2 className='text-white text-2xl md:text-3xl mb-4 md:mb-6 font-bold'>Experience</h2>

              <div className='space-y-6'>
                {/* Experience Item 1 */}
                <div className='relative pl-8 border-l-2 border-cyan-500/40'>
                  <div className='absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full'></div>
                  <h3 className='text-white text-lg md:text-xl font-bold'>Web Developer</h3>
                  <p className='text-cyan-400'>Company Name • 2023 - Present</p>
                  <p className='text-gray-700 mt-2 text-sm md:text-base'>
                    Developed and maintained full-stack web applications using React and Django REST Framework.
                    Implemented CI/CD pipelines and containerized applications with Docker.
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className='relative pl-8 border-l-2 border-cyan-500/40'>
                  <div className='absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full'></div>
                  <h3 className='text-white text-lg md:text-xl font-bold'>Digital Solutions Architect</h3>
                  <p className='text-cyan-400'>2022 - 2025</p>
                  <p className='text-gray-700 mt-2 text-sm md:text-base'>
                    Finishing the cursus at 1337 School, I have learned a lot of things about programming and
                    how to work in a team
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className='bg-gray-400/30 rounded-lg p-4 md:p-5'>
              <h2 className='text-white text-2xl md:text-3xl mb-3 md:mb-4 font-bold'>Get In Touch</h2>
              <p className='text-gray-700 mb-4 md:mb-6 text-sm md:text-base'>Interested in working together? Feel free to contact me!</p>

              <div className='flex flex-wrap items-center gap-4 md:space-x-6'>
                <a href="mailto:yamajid13@outlook.com" className='px-4 py-2 bg-cyan-500/80 text-white rounded-md hover:bg-cyan-600 transition-colors text-sm md:text-base'>
                  Email Me
                </a>
                <a href="/resume.pdf" className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors text-sm md:text-base'>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default App