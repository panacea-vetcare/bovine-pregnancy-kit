"use client";
import Home from "@/components/home";
import About from "@/components/about";
import ContactUs from "@/components/contact-us";
import Copyright from "@/components/copyright";
import { motion } from "framer-motion";

export default function home() {
  return (
    <main className="">
      <Home />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
      >
        <About />
        <ContactUs />
        <Copyright />
      </motion.div>
    </main>
  );
}
