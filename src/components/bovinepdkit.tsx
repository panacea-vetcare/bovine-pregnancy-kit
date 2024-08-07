import Image from "next/image";
import readyToUse from "public/ready-to-use.jpg";
import kit from "public/kit.jpg";
import checkmark from "public/checkmark.jpg";
import Card from "@/components/card";

export default function Bovinepdkit() {
  return (
    <>
      <p id="bovinepdkit"></p>
      <div className="container-spacing">
        <p className="text-center text-2xl">About us</p>
        <div className="mt-4">
          The Bovine Pregnancy Diagnostic Rapid Test Kit is a reliable, efficient,
          and user-friendly tool designed for the rapid detection of pregnancy in cattle.
          This kit employs advanced immunoassay technology to provide accurate results
          within a short period, making it an invaluable asset for veterinarians, farmers, and livestock managers.
        </div>
        <div className="mt-4">
          <div>Key Features</div>
          <div>Rapid Results: Provides results within minutes, allowing for quick decision-making and efficient herd management.</div>
        </div>

      </div>
    </>
  );
}
