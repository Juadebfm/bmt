import Link from "next/link";
import React from "react";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import SuccessStory from "../components/Lcomp/SuccessStory";
import LatestNews from "../components/Hcomp/LatestNews";

const page = () => {
  return (
    <>
      <section className="h-max flex items-center justify-center px-16 gap-28 mt-10">
        <div className="w-1/2 h-full p-10 pl-28 relative">
          <img
            src="./assets/bmt/female_docs_globe.png"
            alt=""
            className="object-cover"
          />
          <img
            src="./assets/bmt/female_docs.png"
            alt=""
            className="object-cover absolute bottom-5 w-[80%] h-auto"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="w-full text-[44px] leading-[1.2] capitalize font-[600] text-primary_red">
            Research and Innovations
          </h2>
          <p className="w-full text-[20px] leading-normal mt-8">
            Embark on the frontier of healthcare with our Research and
            Innovations hub. Explore opportunities to participate in
            groundbreaking clinical trials; stay updated on the latest medical
            innovations enhancing our BMT procedures. Join us in shaping the
            future of healthcare through knowledge and progress.
          </p>
          <Link href="/donation">
            <Button
              classes="px-[75px] py-[14px] bg-primary_red font-Lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide mt-8 w-max text-white"
              text="Donate Now"
            />
          </Link>
        </div>
      </section>
      <Badge />
      <div className="my-20">
        <div>
          <h2 className="text-[40px] leading-[1.2] capitalize font-bold text-primary_red text-center">
            Advancements & Technologies
          </h2>
          <p className="w-[70%] text-[20px] m-auto text-center mt-3 leading-[1.3]">
            Here are some of the latest advancements and technologies used in
            BMT procedures
          </p>
        </div>
        <div className="mt-16">
          <div className="w-[80%] m-auto grid grid-cols-3 gap-10">
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/research1.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Haploidentical BMT
                </span>
                <p>
                  This type of BMT uses bone marrow from a donor who is only
                  half-matched with the recipient. This makes it possible to
                  find a donor for more patients, including those who have rare
                  tissue types.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/research2.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Cord blood transplantation
                </span>
                <p>
                  Cord blood is blood that is collected from the umbilical cord
                  and placenta after childbirth. Cord blood is a rich source of
                  stem cells, which can be used to treat a variety of diseases.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/research3.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  CAR-T cell therapy
                </span>
                <p>
                  CAR-T cell therapy is a type of immunotherapy that uses the
                  patient&apos;s own immune cells to fight cancer. This therapy
                  has shown to be effective in treating certain types of
                  leukemia and lymphoma.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 w-[80%] m-auto grid grid-cols-3 gap-10">
            <div className="box_shadow rounded-[12px] invisible">
              <img src="./assets/bmt/research4.png" alt="" className="w-full" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Gene editing
                </span>
                <p>
                  Gene editing is a technology that can be used to change the
                  DNA of cells. This technology has the potential to be used to
                  improve the success of BMT by making it possible to create
                  stem cells that are more compatible with the recipient.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/research4.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Gene editing
                </span>
                <p>
                  Gene editing is a technology that can be used to change the
                  DNA of cells. This technology has the potential to be used to
                  improve the success of BMT by making it possible to create
                  stem cells that are more compatible with the recipient.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px] invisible">
              <img src="./assets/bmt/research4.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Gene editing
                </span>
                <p>
                  Gene editing is a technology that can be used to change the
                  DNA of cells. This technology has the potential to be used to
                  improve the success of BMT by making it possible to create
                  stem cells that are more compatible with the recipient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessStory />
      <LatestNews />
    </>
  );
};

export default page;
