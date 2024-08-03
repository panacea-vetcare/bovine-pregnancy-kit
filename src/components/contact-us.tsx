import Image from "next/image";
import contactus from "public/contactus.svg";
import email from "public/email.svg";
import phone from "public/phone.svg";

export default function ContactUs() {
  return (
    <div id="contactus" className="container-spacing">
      <p className="text-center text-2xl" id="contactUs">
        Contact us
      </p>
      <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between items-center mt-10">
        <div className="flex  w-[40vw] justify-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex justify-center items-center gap-3">
              <Image
                src={phone}
                alt="phone"
                width={30}
                height={30}
                className="object-contain"
              ></Image>
              <a href="tel:9281411003">9281411001,9281411003</a>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Image
                src={email}
                alt="email"
                width={30}
                height={30}
                className="object-contain"
              ></Image>
              <a href="mailto:vetcare.panacea@gmail.com">vetcare.panacea@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="relative w-[70vw] md:w-[40vw] h-80">
          <Image
            src={contactus}
            alt="contactus"
            fill
            className="object-contain"
          ></Image>
        </div>
      </div>
    </div>
  );
}
