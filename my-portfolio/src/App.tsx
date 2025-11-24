
import { Card } from './components/ui/card';
import './App.css';

function App() {
  // Modern IT-themed dark UI with gradient accents
  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Animated background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Main scrollable container */}
      <div className='w-full h-full overflow-y-auto overflow-x-hidden flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center gap-6 p-4 md:p-6 lg:p-8 relative z-10'>

        {/* Left card - full width on mobile, 1/3 on larger screens */}
  <Card className='h-auto lg:h-[calc(100vh-4rem)] lg:overflow-y-auto w-full lg:w-[380px] lg:flex-shrink-0 bg-slate-900/40 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border border-blue-400/20 p-8 flex flex-col hover:border-blue-400/40 transition-all duration-500'>
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 hover:scale-105 transition-all duration-300">
              <img src="/yamajid.jpg"  className="w-full h-full object-cover" alt="Majid Yamaji" />
            </div>
            {/* Personal Info */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Software Engineer</h2>
              <p className="text-slate-400 text-sm tracking-wide flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Based in Agadir
              </p>
            </div>

            {/* Contact Links */}
            <div className='h-12 px-6 flex justify-center items-center bg-slate-800/50 border border-blue-500/20 rounded-xl hover:bg-slate-800/70 hover:border-blue-400/40 transition-all group'>
            <div className="flex space-x-6">
              <a href="https://github.com/yamajid" className="text-slate-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/yamajid" className="text-slate-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
            </div>

            {/* Skills Section */}
            <div className="w-full pt-4 border-t border-blue-500/10">
              <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">Python</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">JavaScript</span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">TypeScript</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">C</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">C++</span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">MQL5</span>

                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">Django</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">DRF</span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">React</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">Redux</span>

                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">Docker</span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">Docker Compose</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">NGINX</span>

                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">PostgreSQL</span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">MySQL</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">MariaDB</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">Redis</span>

                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">WordPress</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">Vite</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">Shadcn</span>

                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">REST APIs</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">Queues</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">RabbitMQ</span>

                <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">TCP/IP</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-blue-500/30">TCP Sockets</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition-transform shadow-md shadow-purple-500/30">WebSockets</span>

              </div>
            </div>

            {/* Simple bio */}
          </div>
        </Card>

        {/* Right card - full width on mobile, flexible on larger screens */}
        <Card className='h-auto lg:h-[calc(100vh-4rem)] w-full lg:flex-1 bg-slate-900/40 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border border-purple-400/20 p-6 md:p-8 lg:p-10 overflow-y-auto hover:border-purple-400/40 transition-all duration-500'>
          <div className='rounded-lg h-auto space-y-8 md:space-y-10 flex-col'>
            {/* Name Section - responsive text size */}
            <div className='rounded-2xl p-6 md:p-8 bg-gradient-to-br from-slate-800/30 via-slate-800/20 to-transparent border border-blue-400/20 relative overflow-hidden group'>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h1 className='relative bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight animate-gradient bg-[length:200%_auto]'>
                I<span className='text-blue-400/80'>'</span>m Y<span className='text-purple-400/80'>A</span>MAJID
              </h1>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </div>

            {/* Bio Section */}
            <div className='rounded-2xl p-8 md:p-10 bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-transparent border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden group'>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-200 tracking-tight">About Me</h2>
                  </div>
                </div>
                <p className='text-base md:text-lg lg:text-xl leading-relaxed text-slate-300 font-normal'>I am a software engineering student who learns best by doing real work. Building projects and solving hard problems has taught me to think about clean design, reliability, and long-term maintainability. My vision is to work on real-life projects that have impact and to learn as much as possible from them so I can grow fast. I like being challenged, taking ownership, and improving every day as a developer.</p>
              </div>
            </div>
            {/* Experience Section */}
            <div className='rounded-2xl p-6 md:p-7 bg-gradient-to-br from-slate-800/30 via-slate-800/20 to-transparent border border-purple-400/20'>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <h2 className='text-2xl md:text-3xl font-bold text-slate-200'>Experience</h2>
              </div>
              <div className='space-y-6'>
                {/* Experience Item 2 */}
                <div className='relative pl-8 border-l-2 border-blue-500/30'>
                  <div className='absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50'></div>
                  <h3 className='text-lg md:text-xl font-bold text-blue-400'>42 common core</h3>
                  <p className='text-slate-300'>2022 - 2025</p>
                  <p className='mt-2 text-sm md:text-base text-slate-200'>
                    The common core of the 42 curriculum represents a set of skills to be ready for a first professional experience.
                  </p>
                </div>
                {/* Experience Item 1 */}
                <div className='relative pl-8 border-l-2 border-blue-500/30'>
                  <div className='absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50'></div>
                  <h3 className='text-lg md:text-xl font-bold text-blue-400'>Web Developer</h3>
                  <p className='text-slate-300'>Remote</p>
                  <p className='mt-2 text-sm md:text-base text-slate-200'>
                    Developed and maintained full-stack web applications, Implemented CI/CD pipelines and containerized applications.
                  </p>
                </div>
                {/* Experience Item 3 */}
                <div className='relative pl-8 border-l-2 border-blue-500/30'>
                  <div className='absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50'></div>
                  <h3 className='text-lg md:text-xl font-bold text-blue-400'>C++/MQL5 Backend Developer</h3>
                  <p className='text-slate-300'>Remote</p>
                  <ul className='mt-2 text-sm md:text-base text-slate-200 space-y-1 list-disc list-inside'>
                    Implemented a MT5 Bridge that handles multiple EAs with a multi-threaded architecture and RabbitMQ.<br/>
                    Improved resource management and EA integration.
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className='rounded-2xl p-6 md:p-7 bg-gradient-to-br from-slate-800/30 via-slate-800/20 to-transparent border border-blue-400/20'>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className='text-2xl md:text-3xl font-bold text-slate-200'>Featured Projects</h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                {/* Project Card 1 */}
                <div className='rounded-lg p-4 border border-blue-500/30 bg-slate-900/50 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/50 transition-all group'>
                  <h3 className='text-blue-400 text-lg md:text-xl font-bold group-hover:text-blue-300 transition-colors'>Full Stack Web Application</h3>
                  <p className='text-slate-300 mt-2 text-sm md:text-base'>Django REST + WebSockets + Vite application and tailwindcss with CI/CD integration</p>
                  <div className='flex flex-wrap justify-center gap-2 mt-3'>
                    <span className='px-2 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded text-xs'>Django</span>
                    <span className='px-2 py-1 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded text-xs'>Vite</span>
                    <span className='px-2 py-1 bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 rounded text-xs'>tailwindcss</span>
                    <span className='px-2 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded text-xs'>WebSocket</span>
                    <span className='px-2 py-1 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded text-xs'>Docker</span>
                  </div>
                  <a href="https://www.github.com/yamajid/ft_transcendence" className='text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block hover:underline' target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>

                {/* Project Card 2 */}
                <div className='rounded-lg p-4 border border-blue-500/30 bg-slate-900/50 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/50 transition-all group'>
                  <h3 className='text-blue-400 text-lg md:text-xl font-bold group-hover:text-blue-300 transition-colors'>IRC Chat Application</h3>
                  <p className='text-slate-300 mt-2 text-sm md:text-base'>C++ application using TCP/IP protocols</p>
                  <div className='flex flex-wrap justify-center gap-2 mt-3'>
                    <span className='px-2 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded text-xs'>C++</span>
                    <span className='px-2 py-1 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded text-xs'>TCP/IP</span>
                    <span className='px-2 py-1 bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 rounded text-xs'>Networking</span>
                  </div>
                  <a href="https://www.github.com/yamajid/ft_irc" className='text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block hover:underline' target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>

                {/* Project Card 3: Chat App (NEW) */}
                <div className='rounded-lg p-4 border border-blue-500/30 bg-slate-900/50 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/50 transition-all group'>
                  <h3 className='text-blue-400 text-lg md:text-xl font-bold group-hover:text-blue-300 transition-colors'>Chat Application (React + Django)</h3>
                  <p className='text-slate-300 mt-2 text-sm md:text-base'>A real-time chat application built with React and Django, featuring WebSocket communication, authentication, and a modern UI.</p>
                  <div className='flex flex-wrap justify-center gap-2 mt-3'>
                    <span className='px-2 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded text-xs'>React</span>
                    <span className='px-2 py-1 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded text-xs'>Django</span>
                    <span className='px-2 py-1 bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 rounded text-xs'>WebSocket</span>
                    <span className='px-2 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded text-xs'>Docker</span>
                  </div>
                  <a href="https://github.com/yamajid/chat_app" className='text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block hover:underline' target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>

                {/* Project Card 4 */}
                <div className='rounded-lg p-4 border border-blue-500/30 bg-slate-900/50 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/50 transition-all group'>
                  <h3 className='text-blue-400 text-lg md:text-xl font-bold group-hover:text-blue-300 transition-colors'>MultiServiceDocker</h3>
                  <p className='text-slate-300 mt-2 text-sm md:text-base'>Docker, Docker Compose, Microservices, CI/CD, NGINX, MariaDB, WordPress</p>
                  <div className='flex flex-wrap justify-center gap-2 mt-3'>
                    <span className='px-2 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded text-xs'>Docker</span>
                    <span className='px-2 py-1 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded text-xs'>Docker compose</span>
                    <span className='px-2 py-1 bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 rounded text-xs'>Nginx</span>
                  </div>
                  <a href="https://www.github.com/yamajid/Inception" className='text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block hover:underline' target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>

                {/* Project Card 5 */}
                <div className='rounded-lg p-4 border border-blue-500/30 bg-slate-900/50 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/50 transition-all group'>
                  <h3 className='text-blue-400 text-lg md:text-xl font-bold group-hover:text-blue-300 transition-colors'>Minishell</h3>
                  <p className='text-slate-300 mt-2 text-sm md:text-base'>A custom implementation of a Unix shell, featuring command execution, built-in commands, and input/output redirection.</p>
                  <div className='flex flex-wrap justify-center gap-2 mt-3'>
                    <span className='px-2 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded text-xs'>C Language</span>
                  </div>
                  <a href="https://www.github.com/yamajid/Inception" className='text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block hover:underline' target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>
              </div>
            </div>


            {/* Contact Section */}
            <div className='rounded-2xl p-6 md:p-8 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-800/20 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300'>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className='text-2xl md:text-3xl font-bold text-slate-200'>Get In Touch</h2>
              </div>
              <p className='mb-6 text-sm md:text-base text-slate-300'>Interested in working together? Feel free to contact me!</p>
              <div className='flex flex-wrap items-center justify-center gap-4'>
                <a href="mailto:yamajid13@outlook.com" className='px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all text-sm md:text-base font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-0.5 duration-300'>
                  Email Me
                </a>
                <a href="Younes Amajid.pdf" target="_blank" rel="noopener noreferrer" className='px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl hover:from-purple-500 hover:to-purple-400 transition-all text-sm md:text-base font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 hover:-translate-y-0.5 duration-300'>
                  See Resume
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
