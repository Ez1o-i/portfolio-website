import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "首页", id: "home" },
  { name: "专业技能", id: "skills" },
  { name: "项目案例", id: "projects" },
  { name: "联系我", id: "contact" }
];

export const Nav = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 120;

    let currentActive = "home";
    
    for (const item of navItems) {
      const section = document.getElementById(item.id);
      if (!section) continue;
      
      const { offsetTop, offsetHeight } = section;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        currentActive = item.id;
      }
    }
    
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 120;
    if (isAtBottom) {
      currentActive = "contact";
    }
    
    setActive(currentActive);
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      updateActiveSection();
    });
  }, [updateActiveSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(updateActiveSection, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      clearTimeout(timer);
    };
  }, [handleScroll, updateActiveSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of nav roughly
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update active immediately for better responsiveness
      setActive(id); 
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6"
    >
      <div className={cn(
        "px-2 py-2 rounded-full flex items-center gap-2 transition-all duration-500 border",
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            {active === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/10 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25,
                  mass: 0.8
                }}
              />
            )}
            <span className={cn(
              "relative z-10 transition-colors duration-300",
              active === item.id ? "text-white" : "text-zinc-400 hover:text-white"
            )}>
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
