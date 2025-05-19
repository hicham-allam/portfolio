import React, { useState, useEffect, useRef } from 'react';
import './clock.css';
//import paraoxinigBeatz from '../assets/ParoxingBeatz - Logobi Type Beat.flac';
import Logo from '../assets/hicham-allam-logo.png';
import Engineer from '../assets/hicham-allam-dark.png';

import html_svg from '../assets/html.svg';
import css_svg from '../assets/css.svg';
import javascript_svg from '../assets/javascript.svg';
import git_svg from '../assets/git.svg';
import tailwind_svg from '../assets/tailwind.svg';
import wordpress_svg from '../assets/wordpress.svg';
import react_svg from '../assets/react.svg';

export default Home;

function Home() {
  return (<>
  <div 
    className="fixed inset-0 -z-50 bg-[url('/src/assets/tenor.gif')] bg-cover bg-center opacity-20 blur-[80px]"
    aria-hidden="true"
  ></div>
  <Header/>
  <Welcome/>
  <About/>
  <Skills/>
  <MyProjects/>
  <Contact/>
  <SocialBar/>
  <div className="h-5 bg-gradient-to-b from-black to-transparent"></div>
  </>);
}

const link_twitter = 'https://x.com/hichamallam02';
const link_githup = 'https://github.com/hicham-allam';
const link_linkedin = 'https://linkedin.com';
const link_youtube = 'https://youtu.be/dQw4w9WgXcQ';

const svg_twitter = 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z';
const svg_githup = 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z';
const svg_linkedin = 'M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z';
const svg_youtube = 'M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z';

/*https://picsum.photos/340/550*/

function mouseOver(e) {
  e.target.style.color = 'blue';
}
function mouseOut(e) {
  e.target.style.color = 'white';
}

export function Header() {
  const [menuState, setMenuState] =  useState('max-sm:hidden');
  return(<div className="head-container">
      <div className="flex">
        <a href="https://hichamallam.com">
          <img className="block object-contain h-14 max-sm:h-12" src={Logo} alt="logo"/>
        </a>
        <div>
          <span className='block text-[22px] max-sm:text-[16px] font-bold px-5 font-sans text-[#C84C32]'>Hicham Allam</span>
          <span className='block text-[14px] max-sm:text-[10px] font-bold px-5 font-sans'>A Full-Stack Developer Journey</span>
        </div>
      </div>
      <div id='menu' className={`menu ${menuState}`}>
        <svg onClick={()=>{setMenuState('max-sm:hidden')}} className='h-10 fill-[#C84C32] hidden max-sm:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        <a href="/clock" className='menu-a' hidden>Clock</a>
        <a href="#about" className='menu-a'>About</a>
        <a href="#contact" className='menu-a' >Contact</a>
        <a href="/projects" className='menu-a'>Projects</a>
        <a href="/blog" className='menu-a' hidden>Blog</a>
      </div>
      <svg onClick={()=>{setMenuState('')}} className='h-10 fill-[#C84C32] hidden max-sm:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
  </div>);
}

const Welcome = () => {
  return (<div className='text-white flex flex-row items-center max-sm:flex-col max-sm:gap-10 max-sm:justify-between'>
      <div className='w-3/5 p-10 text-[46px] max-sm:text-[22px] max-sm:w-1/2 max-sm:p-0 max-sm:order-2 max-sm:text-center'>
        <p className='leading-tight'>Hi 👋, I'm <span className='text-[#C84C32]'>Hicham</span>,</p>
        <p className='leading-tight'>a developer who loves</p>
        <p className='leading-tight'>building great products.</p>
      </div>
      <div className='w-2/5 max-w-[50%] px-4 cursor-pointer max-sm:w-[60%] max-sm:order-1'>
        <img 
          className='w-full h-auto max-h-[500px] object-contain contrast-150 brightness-20 drop-shadow-[0_25px_25px_rgba(0,0,200,0.5)] hover:drop-shadow-[0_25px_25px_rgba(200,200,200,0.4)]
          ease-in duration-500 mt-4'
          src={Engineer} 
          alt="Hicham Allam - Developer" 
        />
      </div>
  </div>);

}

export function SocialBar() {
  const { isBottom, isTop } = useScrollPosition();

  return(<>{!isBottom && <div className="fixed left-6 bottom-6 flex items-center gap-7 bg-zinc-900 rounded-md border border-indigo-500 border-solid p-3 px-10
    max-sm:left-0 max-sm:bottom-0 max-sm:w-full max-sm:rounded-none max-sm:border-x-0 max-sm:border-b-0 max-sm:justify-center max-sm:gap-4 max-sm:px-4" >
      <a className='w-5 hover:scale-125 duration-300 ease-in-out'
        href={link_twitter} target='_black'>
        <svg className='hover:fill-white/90' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#C84C32'><path d={svg_twitter}/></svg>
      </a>
      <div className="h-5 w-px bg-stone-500"></div>
      <a className='w-5 hover:scale-125 duration-300 ease-in-out'
        href={link_githup} target='_black'>
      <svg className='hover:fill-white/90' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill='#C84C32'><path d={svg_githup}/></svg>
      </a>
      <div className="h-5 w-[1.5px] bg-stone-500"></div>
      <a className='w-5 hover:scale-125 duration-300 ease-in-out'
        href={link_linkedin} target='_black'>
      <svg className='hover:fill-[#0072B1]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#C84C32'><path d={svg_linkedin}/></svg>
      </a>
      <div className="h-5 w-[1.5px] bg-stone-500"></div>
      <a className='w-5 hover:scale-125 duration-300 ease-in-out'
        href={link_youtube} target='_black'>
      <svg className='hover:fill-[#CD201F] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#C84C32'><path d={svg_youtube}/></svg>
      </a>
  </div>}</>);
}

export function Paragraph({ pid, title, children }) {
  return (<>
    <div id={pid} className='flex pt-40 text-white max-sm:flex-col max-sm:py-10'>
      <div className='flex-[1] text-[#C84C32]'>
        <div className='flex justify-end items-center gap-4 p-10 max-sm:justify-center'>
          <img className='h-10' src={Logo} alt="hicham allam logo" />
          <div className='text-white text-[32px]'>{title}</div>
        </div>
      </div>
      <div className='flex-[1] px-[120px] flex flex-col gap-5 max-sm:px-10 max-sm:text-[16px] '>
          {children}
      </div>
    </div>
  </>);
}

const About = () => {

  return (<Paragraph pid="about" title="About Me">
        <p>
          I'm Hicham Allam, an aspiring Full-Stack Developer focused on learning and building modern web applications. I’m developing my skills in both frontend and backend technologies.
        </p>
        <p>
          I enjoy turning ideas into websites that are clear, functional, and user-friendly. I'm always exploring new ways to improve how things work and look online.
        </p>
        <p className="hidden">
          I'm currently working on <span className="p-style">Your Project Name</span>, a project about <span className="p-style">your topic</span>. I also created <span className="p-style">Another Project</span>, a <span className="p-style">simple tool or website</span> that helps <span className="p-style">specific users</span> with <span className="p-style">a useful task</span>.
        </p>
        <p className="hidden">
          Outside of coding, I share what I learn on [your blog/YouTube/Twitter]. I enjoy writing about topics like [e.g. "JavaScript tips" or "project challenges"].
        </p>
        <p>
          I'm also interested in reading. Lately, I’ve been reading 
          <a href="https://a.co/d/1E6bKRB" target='_blank'>
            <span className='p-style'> High Performance Browser Networking</span>
          </a>
          , and my previous book 
          <a href="https://a.co/d/hO8Ud9e" target='_blank'>
            <span className='p-style'> The Staff Engineer's Path </span>
          </a>
          , which taught me a lot about expanding impact beyond code—through influence, communication, cross-team collaboration, and owning invisible but critical 'glue work' that keeps engineering organizations thriving.
        </p>
        <p>
          I’m based in  
          <a href="https://maps.app.goo.gl/FHrgtbMBSH2CLQAe6">
            <span className='p-style'> Casablanca, Morocco</span>
          </a>
          , and I enjoy learning from different people and working on projects with developers from around the world.
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850247.1982487019!2d-8.08456613432469!3d33.64995486382243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1747641946244!5m2!1sfr!2sma" width="100%" height="300" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </Paragraph>);
}



const Skills = () => {
  const trackRef = useRef(null);
  const animationId = useRef(null);
  const position = useRef(0);
  const isPaused = useRef(false);
  const imageRefs = useRef([]);

  // Use actual images instead of dummy placeholders
  const baseSkills = [
    { id: 1, image: html_svg, name: 'HTML' },
    { id: 2, image: css_svg, name: 'CSS' },
    { id: 3, image: javascript_svg, name: 'JavaScript' },
    { id: 4, image: git_svg, name: 'Git'},
    { id: 5, image: tailwind_svg, name: 'TailwindCss'},
    { id: 6, image: wordpress_svg, name: 'WordPress'},
    { id: 7, image: react_svg, name: 'React'},
    // Add more skills if needed
  ];

  // Duplicate the skills for seamless loop
  const duplicatedSkills = [...baseSkills, ...baseSkills, ...baseSkills];

  useEffect(() => {
    const speed = 1;
    const itemWidth = 200 + 16;

    const animate = () => {
      if (!isPaused.current) {
        position.current -= speed;

        if (position.current <= -itemWidth * baseSkills.length) {
          position.current += itemWidth * baseSkills.length;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${position.current}px)`;
        }
      }
      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId.current);
    };
  }, [baseSkills.length]);

  // Hover logic for each image
  useEffect(() => {
    imageRefs.current.forEach((ref) => {
      if (!ref) return;

      ref.addEventListener('mouseenter', () => {
        isPaused.current = true;
      });
      ref.addEventListener('mouseleave', () => {
        isPaused.current = false;
      });
      ref.addEventListener('touchstart', () => {
        isPaused.current = true;
      });
      ref.addEventListener('touchend', () => {
        isPaused.current = false;
      });
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (!ref) return;
        ref.removeEventListener('mouseenter', () => {});
        ref.removeEventListener('mouseleave', () => {});
        ref.removeEventListener('touchstart', () => {});
        ref.removeEventListener('touchend', () => {});
      });
    };
  }, []);

  return (<>
    <Paragraph pid='skills' title='Skills'>
      <p>
      As a passionate developer, I have experience working with various programming languages and technologies, ranging from front-end design to back-end logic. Below are some of the tools and frameworks I use regularly in my projects.
      </p>
    </Paragraph>
    <div className="mx-auto px-4">
      <div className="relative overflow-hidden rounded-lg p-2 shadow-sm">
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ width: `${(200 + 16) * duplicatedSkills.length}px` }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              ref={(el) => (imageRefs.current[index] = el)}
              className="mx-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg flex items-center justify-center border-solid border-[1px] border-indigo-500 text-center text-white"
              style={{ width: '150px', height: '150px', flexShrink: 0 }}
            >
              <div>
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-24 h-24 object-contain pointer-events-none"
                />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>);
};


const MyProjects = () => {
  return(<Paragraph pid='my-projects' title='My Projects'>
  <div className="bg-zinc-900 p-10">
    <h2 className="text-2xl text-white">My Projects (Under construction...)</h2>
    <div className='pt-20 flex justify-center'>
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50">Subscribe</button>
      <button className="bg-blue-500 shadow-lg shadow-blue-500/50">Subscribe</button>
      <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50">Subscribe</button>
    </div>
  </div>
  </Paragraph>);
}

const Contact = () => {

  return (<Paragraph pid="contact" title="Contact Me">
          <p className='lg:mt-10'>
            If you’d like to get in touch, feel free to write me at:
            <a className='contact-email' href="mailto:hichamallam02@gmail.com">
              hichamallam02@gmail.com
            </a>
          </p>
          <p>
            You can also find me on various socials,<br/>
            feel free to get it touch there too!
          </p>
          <div className="flex flex-wrap text-indigo-500 underline">
              <a className='contact-a'
                href={link_twitter}  target='_black'>
                <svg className='h-10 fill-[#C84C32]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d={svg_twitter}/>
                </svg>
                <div>twitter</div>
              </a>
              <a className='contact-a'
                href={link_githup} target='_black'>
              <svg className='h-10 fill-[#C84C32]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" >
                <path d={svg_githup}/>
              </svg>
              <div>github</div>
              </a>
              <a className='contact-a'
                href={link_twitter} target='_black'>
                <svg className='h-10 fill-[#C84C32]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d={svg_linkedin}/>
                </svg>
                <div>linkedin</div>
              </a>
              <a className='contact-a' href={link_twitter} target='_black'>
                <svg className='h-10 fill-[#C84C32]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d={svg_youtube}/>
                </svg>
                <div>youtube</div>
              </a> 
          </div>
      </Paragraph>);
}

const MyComponent = () => {
  const { isBottom, isTop } = useScrollPosition();

  useEffect(() => {
    if (isBottom) {
      console.log('Bottom reached!');
      // Load more data, show button, etc.
    }
    
    if (isTop) {
      console.log('Back to top!');
      // Reset states, hide elements, etc.
    }
  }, [isBottom, isTop]);

  return (
    <div className="h-[200vh]"> {/* Scrollable content */}
      {isBottom && <div className="fixed bottom-0">Bottom reached!</div>}
      {isTop && <div className="fixed top-0">At top!</div>}
    </div>
  );
};

const useScrollPosition = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
      // Check if bottom reached (with 5px threshold)
      const bottomReached = scrollTop + clientHeight >= scrollHeight - 5;
      setIsBottom(bottomReached);
      
      // Check if top reached
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isBottom, isTop };
};
