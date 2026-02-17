"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="flex min-h-screen w-full items-center justify-center bg-zinc-950 px-10 py-32 text-white">
      <div className="mx-auto w-full max-w-4xl">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-5xl font-black uppercase italic tracking-tighter md:text-7xl"
        >
          Let&apos;s Build <br className="hidden md:block" /> Something.
        </motion.h2>

        <motion.form 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // We will replace this URL in Step 3
          action="https://formspree.io/f/xqedbobw" 
          method="POST"
          className="flex flex-col gap-10"
        >
          {/* Top Row: Name and Email */}
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="group flex w-full flex-col border-b border-white/20 py-2 transition-colors focus-within:border-blue-500 hover:border-white/50">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors group-focus-within:text-blue-500">Name</label>
              <input type="text" name="name" required className="w-full bg-transparent py-2 text-xl outline-none" placeholder="Enter your name" />
            </div>
            
            <div className="group flex w-full flex-col border-b border-white/20 py-2 transition-colors focus-within:border-blue-500 hover:border-white/50">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors group-focus-within:text-blue-500">Email</label>
              <input type="email" name="email" required className="w-full bg-transparent py-2 text-xl outline-none" placeholder="hello@example.com" />
            </div>
          </div>

          {/* Bottom Row: Message */}
          <div className="group flex w-full flex-col border-b border-white/20 py-2 transition-colors focus-within:border-blue-500 hover:border-white/50">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors group-focus-within:text-blue-500">Message</label>
            <textarea name="message" required rows={4} className="w-full resize-none bg-transparent py-2 text-xl outline-none" placeholder="What are we working on?"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="mt-4 w-fit border border-white/20 bg-white/5 px-12 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-black">
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
