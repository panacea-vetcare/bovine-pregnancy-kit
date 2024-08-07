"use client";
import Image from "next/image";
import homeImg from "public/home.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative h-[60vh]">
      <Image
        src={homeImg}
        alt="home"
        fill
        className="object-cover homeImage"
      ></Image>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <div className="absolute top-[50%] left-5 sm:left-10 md:left-32 lg:left-40   translate-y-[-50%] bg-gradient-to-r from-slate-900 p-4 rounded-tl-md rounded-bl-md ">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col gap-4">
              <span className="text-2xl text-white">WELCOME TO</span>
              <span className="text-4xl text-white ">
                PANACEA VETCARE: Bovine Pregnancy Diagnosis Rapid Test Kit
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
