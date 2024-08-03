import Image from "next/image";
import readyToUse from "public/ready-to-use.jpg";
import kit from "public/kit.jpg";
import checkmark from "public/checkmark.jpg";
import Card from "@/components/card";

export default function About() {
  return (
    <>
      <p id="about"></p>
      <div className="container-spacing">
        <p className="text-center text-2xl">About us</p>
        <div className="mt-4">
          We are specialized in animal pregnancy kits provides essential tools for
          veterinarians, breeders pet owners to determine pregnancy in
          animals accurately and conveniently. These kits typically include
          testing supplies or devices that detect specific hormones or proteins
          indicative of pregnancy in various animals, ensuring early detection
          and proper care. Such kits play a crucial role in reproductive
          management, allowing for timely veterinary interventions and ensuring
          the well-being of both mother and offspring.
        </div>
        <div className="mt-10 flex flex-col items-center lg:flex-row lg:items-stretch justify-between gap-10">
          <Card
            img={readyToUse}
            alt="readyToUse"
            desc="The kit comes pre-loaded with all necessary reagents, simplifying the testing process for immediate use without preparation."
          ></Card>
          <Card
            img={kit}
            alt="kit"
            desc="The kit eliminates the need for additional equipment or waiting periods, providing instant results without the requirement for incubation."
          ></Card>
          <Card
            img={checkmark}
            alt="checkmark"
            desc="Rapid detection ensures timely decisions with clear, visible results within 20 minutes of conducting the test."
          ></Card>
        </div>
      </div>
    </>
  );
}
