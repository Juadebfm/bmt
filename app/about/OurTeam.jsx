"use client";
import React, { useEffect } from "react";
import TeamMember from "./TeamMember";

import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <section
        data-aos="fade-up"
        className="flex flex-col border-y p-[25px] lg:p-0"
      >
        <div>
          <h1 className="font-lexend font-semibold text-[44px] lg:text-[64px] p-0 lg:p-20 pb-5 text-primary_red leading-normal text-center lg:text-start">
            Our Team
          </h1>
        </div>
        <div className="ml-0 lg:ml-40">
          <h3 className="font-semibold text-[18px] lg:text-[22px] text-primary_dark font-lexend leading-normal text-center lg:text-start">
            CHAIRMAN AND MEMBERS, BOARD OF SICKLE CELL FOUNDATION NIGERIA (SCFN)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10 gap-x-7 lg:gap-x-14 px-[25px] lg:px-40 ml-0 lg:ml-20 mt-8">
          <div>
            <TeamMember
              name="Chief Tunde Afolabi, MFR"
              designation="Chairman, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Prof Olu Akinyanju, OFR"
              designation="Founder, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Dr Annette Akinsete"
              designation="National Director/CEO, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mr. John Momoh"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mr. Chidi Ofong"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mrs. Abiola Ogunbiyi"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mrs. Toki Mabogunje"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mr. Tony Epelle"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mrs. Ayo Otaigbe"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mr. Bode Emmanuel"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Prof. Muuta Ibrahim"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mr. Funso Sobande"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Otunba Niyi Adebayo"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Chief Dele Fajemirokun"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mr. Fola Adeola"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
          <div>
            <TeamMember
              name="Mr. Olabode Makanjuola"
              designation="Member, "
              company="Sickle Cell Foundation Nigeria"
            />
          </div>
        </div>

        <div className="ml-0 lg:ml-40">
          <h3 className="font-semibold text-[18px] lg:text-[22px] text-primary_dark font-lexend leading-normal mt-10 text-center lg:text-start">
            LUTH Management Team
          </h3>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 gap-x-7 lg:gap-x-14 px-[25px] lg:px-40 ml-0 lg:ml-20 mt-8"
        >
          <div>
            <TeamMember
              name="Prof. Wasiu Adeyemo"
              designation="Chief Medical Director, LUTH"
            />
          </div>
          <div>
            <TeamMember
              name="Dr. Oluwole Ayodeji"
              designation="Chairman Medical Advisory Committee, LUTH "
            />
          </div>
          <div>
            <TeamMember
              name="Dr. Babawale Taslim Bello"
              designation="Deputy Chairman Medical Advisory Committee  Clinical Services, LUTH"
            />
          </div>
          <div>
            <TeamMember
              name="Dr. Rufus Wale Ojewola"
              designation="Deputy Chairman Medical Advisory Committee Research & Training, LUTH "
            />
          </div>
        </div>

        <div className="ml-0 lg:ml-40">
          <h3 className="font-semibold text-[18px] lg:text-[22px] text-primary_dark font-lexend leading-normal mt-10 text-center lg:text-start">
            TOP MANAGEMENT COMMITTEE SCFN/LUTH BMT PROGRAMME
          </h3>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 gap-x-7 lg:gap-x-14 px-[25px] lg:px-40 ml-0 lg:ml-20 mt-8"
        >
          <div>
            <TeamMember
              name="Prof. Wasiu Adeyemo"
              designation="Co-Chair, Top Management Committee"
            />
          </div>
          <div>
            <TeamMember
              name="Dr. Annette Akinsete"
              designation="Co-Chair Top Management Committee"
            />
          </div>
          <div>
            <TeamMember
              name="Prof. Edamisan Temiye"
              designation="Chair, Bone Marrow Transplant Treatment Group"
            />
          </div>
          <div>
            <TeamMember name="Representative" designation="LUTH " />
          </div>
          <div>
            <TeamMember name="Representative" designation="SCFN " />
          </div>
        </div>

        <div className="ml-0 lg:ml-40">
          <h3 className="font-semibold text-[18px] lg:text-[22px] text-primary_dark font-lexend leading-normal mt-10 text-center lg:text-start">
            BMT TREATMENT GROUP
          </h3>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="900"
          className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 gap-x-7 lg:gap-x-14 px-[25px] lg:px-40 ml-0 lg:ml-20 mt-8"
        >
          <div>
            <TeamMember
              name="Prof. Edamisan Temiye"
              designation="Professor of Paediatrics & Oncology / Chair, Bone Marrow Transplant Treatment Group, LUTH"
            />
          </div>
          <div>
            <TeamMember
              name="Prof. Titi Adeyemo"
              designation="Professor of Haematology & Blood Transfusion, LUTH"
            />
          </div>
          <div>
            <TeamMember
              name="Dr. Seye Akinsete"
              designation="Consultant Paediatrician & Haematologist, LUTH"
            />
          </div>
          <div>
            <TeamMember
              name="Dr. Ann Ogbenna"
              designation="Consultant Haematologist & Oncologist, LUTH "
            />
          </div>
          <div>
            <TeamMember
              name="Dr. Funto Kalejaiye"
              designation="Consultant Physician & Haematologist, LUTH "
            />
          </div>
          <div>
            <TeamMember
              name="Mrs. Titilayo Bamgboye"
              designation="Assistant Director Nursing / Transplant Nurse, LUTH "
            />
          </div>
          <div>
            <TeamMember
              name="Mrs. Amina Asimegbe"
              designation="Chief Nursing Officer / Transplant Nurse, LUTH "
            />
          </div>
          <div>
            <TeamMember
              name="Ms. Blessing Aziken-John"
              designation="Nursing Officer / Transplant Nurse, LUTH "
            />
          </div>
        </div>

        <div className="ml-0 lg:ml-40">
          <h3 className="font-semibold text-[18px] lg:text-[22px] text-primary_dark font-lexend leading-normal mt-10 text-center lg:text-start">
            TECHNICAL PARTNER - VANDERBILT UNIVERSITY MEDICAL CENTRE
          </h3>
        </div>

        <div data-aos="fade-right"
          data-aos-duration="2000" className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 gap-x-7 lg:gap-x-14 px-[25px] lg:px-40 ml-0 lg:ml-20 my-8">
          <div>
            <TeamMember
              name="Prof. Adetola Kassim"
              designation="Medical Director, Vanderbilt Stem Cell Transplant & Cellular Therapy Programme – Vanderbilt University Medical Centre, Nashville, Tennessee USA."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
