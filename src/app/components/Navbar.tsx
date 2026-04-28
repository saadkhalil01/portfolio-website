'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const onBlog = pathname.startsWith('/blog');

  const links = [
    { href: onBlog ? '/#Home' : '#Home', label: 'Home' },
    { href: onBlog ? '/#work' : '#work', label: 'Work' },
    { href: onBlog ? '/#about' : '#about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      {/* Desktop */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ paddingLeft: 24, paddingRight: 0 }}
        className="hidden sm:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center gap-6"
      >
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`text-black text-sm font-black uppercase hover:underline decoration-2 underline-offset-4 ${pathname === '/blog' && l.href === '/blog' ? 'underline' : ''}`}
          >
            {l.label}
          </a>
        ))}
        <a href="mailto:saadkhalil9999@gmail.com" style={{ padding: '8px 14px' }} className="btn-neo-black text-xs whitespace-nowrap">
          Strategy Call
        </a>
      </motion.nav>

      {/* Mobile hamburger */}
      <div style={{ position: 'fixed', top: 12, right: 12, zIndex: 50 }} className="sm:hidden">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <button
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ width: 44, height: 44 }}
            className="flex items-center justify-center border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <div style={{ position: 'fixed', top: 68, right: 12, zIndex: 40 }} className="sm:hidden">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              style={{ minWidth: 200 }}
            >
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  style={{ paddingLeft: 20, paddingTop: 16, paddingBottom: 16 }}
                  className="block text-black font-black uppercase text-sm border-b-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:saadkhalil9999@gmail.com"
                onClick={() => setIsOpen(false)}
                style={{ paddingLeft: 20, paddingTop: 16, paddingBottom: 16 }}
                className="block bg-black text-white font-black uppercase text-sm tracking-widest"
              >
                Strategy Call →
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
