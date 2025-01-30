'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons";

const Blog=()=>{
  return(
    <div className="px-[1rem] lg:px-[12rem] pt-24 py-10">
      <div className="flex items-center ">
        <h1 className="font-bold text-2xl md:text-4xl py-5">Louis's Blog.</h1>

        <div className="drawer drawer-end flex items-center justify-center x-auto w-fit ml-auto ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer text-2xl md:text-4xl dark:hover:text-black  btn-primary animate-pulse"><FaUserPlus/></label>
        </div>
        <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}

        <hr  className="mt-10 font-bold"/>
        <h3 className="text-lg font-bold py-4">About Me</h3>

        <div>
          <Image src='/pic.jpg' width={300} height={300} alt="image" className="overflow-hidden rounded-lg"/>
          <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis quibusdam voluptate tenetur aliquid sed, inventore necessitatibus dolores reprehenderit iusto!!</p>
        </div>

        <hr  className="mt-10 font-bold"/>
        <h3 className="text-lg font-bold py-4">Social Profiles</h3>
        <div className="flex items-center justify-start gap-2">
          {/* social icons */}
          <SocialIcon
          url="https://linkedin.com/in/louisvwede"
          target="_blank"
          fgColor=""
          bgColor=""
          network="linkedin"
          style={{ height: 40, width: 40 }}
          />

          <SocialIcon
          url="https://github.com/unsurep"
          target="_blank"
          fgColor=""
          bgColor=""
          network="github"
          style={{ height: 40, width: 40 }}
          />

          <SocialIcon
          url="https://www.tiktok.com/@onesureplayer?_t=ZM-8tSCSG1nYjG&_r=1"
          target="_blank"
          fgColor=""
          bgColor=""
          network="tiktok"
          style={{ height: 40, width: 40 }}
          />

          <SocialIcon
          url="https://x.com/LVwedee"
          target="_blank"
          fgColor=""
          bgColor=""
          network="twitter"
          style={{ height: 40, width: 40 }}
          />

          <SocialIcon
          url="https://wa.me/+2348081808904"
          target="_blank"
          fgColor=""
          bgColor=""
          network="whatsapp"
          style={{ height: 40, width: 40 }}
          />
        </div>


        






        </div>
      </div>
    </div>
        
    </div>

      <div>

        {/* blog post 1 */}
        <div>
          <div>
            <Image src='https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png'
            width={500}
            height={500}
            alt="image"
            className="w-[60rem] rounded-[12px]"
            />
          </div>

          <div className="px-[1rem] md:px-[8rem]">
            <h1 className="font-semibold text-base md:text-2xl py-6">Why I Want to Be a Front-End Developer and How HNG Will Help Me Achieve My Goals?</h1>

            <p>Front-end development is like an adventure that excites me because it is a perfect blend of creativity and problem-solving. It is not just about writing code but rather making sure the user is satisfied after usage. Every time I build a responsive website or add some animations, I get this satisfaction that reminds me of how my work directly impacts people and how they interact with technology. Everyday, technology keeps evolving with new frameworks and tools making every day a learning experience. For me, front-end development is not just a job, it is a passion for continuous growth and learning.</p>

            <div className="pt-6">
              <button className="border border-orange-400 rounded-full px-4 py-2 hvr-grow">Continue Reading...</button>
            </div>
          </div>
        </div>


        {/* blog post 2 */}
        <div className="">
          {/* <div>
            <Image/>
          </div> */}

          <div className="px-[1rem] md:px-[8rem]">
            <h1 className="font-semibold text-base md:text-2xl py-6">How would HNG help me grow in the Frontend Development?</h1>

            <p>Everyone wants to level up and to truly level up, i need a well structured learning environment, real-world projects to solve real world problems and steady collaboration with other developers to enhance my skills. Knowning the fact that being self-taught has its limits, I am excited about the upcoming HNG Internship.</p>
            <p>HNG provides hands-on experience with HTML, CSS, JavaScript, and modern frameworks where i can apply these acquired knowledge in a team setting, reviewing codes and most importantly i would be getting direct mentorship from HNG. </p>

            

            <div className="pt-6">
              <button className="border border-orange-400 rounded-full px-4 py-2 hvr-grow">Continue Reading...</button>
            </div>
          </div>
        </div>


        {/* blog post 3 */}
        <div>
          {/* <div>
            <Image/>
          </div> */}

          <div className="px-[1rem] md:px-[8rem]">
            <h1 className="font-semibold text-base md:text-2xl py-6">My goals for the HNG12 Frontend development internship and how i plan to achieve them?</h1>
            
            <p>Also, HNG intership goes beyond coding, focus on job readiness, helps build a solid portfolio and prepares her interns for technical interviews. By the end of the program, I will be equipped to contribute to teams confidently and solve real problems efficiently. I am ready to dive in, refine my skills, and take the next step in becoming a frontend developer with help from HNG12.</p>

            <div className="pt-6">
              <button className="border border-orange-400 rounded-full px-4 py-2 hvr-grow">Continue Reading...</button>
            </div>
          </div>
        </div>
      </div>

      {/* citation */}

      <div className="mt-10 text-center">
        <h3 className="text-lg font-bold py-4">For interactive UIs,you can Hire a Developers to speed up development </h3>
        <ul className="">
          <li><Link href="https://hng.tech/hire/reactjs-developers" className="text-blue-500 hover:underline">Hire React.js Developers</Link></li>
          <li><Link href="https://hng.tech/hire/nextjs-developers" className="text-blue-500 hover:underline">Hire Next.js Developers</Link></li>
          <li><Link href="https://hng.tech/hire/vuejs-developers" className="text-blue-500 hover:underline">Hire Vue.js Developers</Link></li>
          <li><Link href="https://hng.tech/hire/angular-developers" className="text-blue-500 hover:underline">Hire Angular Developers</Link></li>

          <li><Link href="https://hng.tech/hire/web-developers" className="text-blue-500 hover:underline">Hire Web Developer</Link></li>
          <li><Link href="https://hng.tech/hire/css-developers" className="text-blue-500 hover:underline">Hire CSS Developers</Link></li>
          <li><Link href="https://hng.tech/hire/ui-developers" className="text-blue-500 hover:underline">Hire UI Developers</Link></li>
        </ul>
      </div>


      <Link href='#top'>
        <div className="w-[10px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300   flex fixed right-10 bottom-5 animate-pulse"><span className="font-bold "><FaArrowUp /></span></div>
      </Link>
    </div>
  )


};

export default Blog;