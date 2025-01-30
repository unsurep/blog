import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
      <footer className=" bg-black/10 text-gray-800 border-t border-gray-200 py-6 mt-10 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Quick Links */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
  
          {/* Center - Social Icons */}
          <div className="flex space-x-4">
            <SocialIcon url="https://linkedin.com/in/louisvwede" target="_blank" />
            <SocialIcon url="https://github.com/unsurep" target="_blank" />
            <SocialIcon url="https://x.com/LVwedee" target="_blank" />
            <SocialIcon url="https://www.tiktok.com/@onesureplayer?_t=ZM-8tSCSG1nYjG&_r=1" target="_blank" />
            
          </div>
  
          {/* Right Section - Copyright */}
          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} Louis's Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

//   A Blog post on Why I Want to Be a Front-End Developer and How HNG Will Help Me Achieve My Goals