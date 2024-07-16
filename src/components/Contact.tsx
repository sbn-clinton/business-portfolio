import { MailIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col gap-4 md:gap-8 max-w-6xl md:mx-auto mx-4 my-16">
        <Reveal>
          <div className="flex flex-col gap-2 max-w-6xl md:mx-auto mx-4 md:text-start justify-start items-start">
            <div className="flex content-center">
              <p className=" font-thin tracking-widest text-sm md:text-base text-slate-400">
                CONTACT{" "}
              </p>
              <hr className="w-28 mx-2 my-1 self-center h-[2px] inline-block bg-orange-400" />
            </div>

            <h1 className="font-[1000] text-3xl text-balance text-black ">
              CONTACT US
            </h1>
          </div>
        </Reveal>
        <div className=" w-full h-60">
          <Image
            src="/assets/img/contact.jpg"
            alt="contact"
            width={500}
            height={500}
            className=" object-fill h-60 w-full"
          />
        </div>
        <div className=" flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-5 md:gap-10 md:w-1/3">
            <Reveal>
              <div className="flex flex-row gap-3">
                <div className=" flex justify-center items-center bg-orange-300 rounded-md sm:px-4 px-3">
                  <MdLocationPin className=" w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                </div>
                <div className=" flex gap-2 text-start flex-col">
                  <h1 className=" text-lg md:text-xl font-semibold">Address</h1>
                  <p className="text-xs sm:text-sm font-extralight text-gray-500">
                    A108 Adam Street, New York, NY 535022
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-row gap-3">
                <div className=" flex justify-center items-center bg-orange-300 rounded-md  sm:px-4 px-3">
                  <PhoneCall className=" w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                </div>
                <div className=" flex gap-2 text-start flex-col">
                  <h1 className=" text-lg md:text-xl font-semibold">Call Us</h1>
                  <p className="text-xs sm:text-sm font-extralight text-gray-500">
                    +1 5589 55488 55
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-row gap-3">
                <div className=" flex justify-center items-center bg-orange-300 rounded-md sm:px-4 px-3">
                  <MailIcon className=" text-slate-700 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className=" flex gap-2 text-start flex-col">
                  <h1 className=" text-lg md:text-xl font-semibold">
                    Email Us
                  </h1>
                  <p className="text-xs sm:text-sm font-extralight text-gray-500">
                    info@example.com
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex md:w-2/3">
            <form action="" className="flex flex-col gap-3 w-full">
              <div className="grid md:grid-cols-2 gap-3">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className=" border-slate-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className=" border-slate-400"
                />
              </div>
              <Input
                type="text"
                placeholder="Subject"
                className=" border-slate-400"
              />
              <Textarea
                rows={10}
                cols={30}
                placeholder="Type your message here."
                className=" border-slate-400"
              />
              <Button className=" bg-orange-400 text-slate-900">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
