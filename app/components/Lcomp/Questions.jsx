"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

// Reusable FAQItem Component
const FAQItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="">
      <div
        className="flex box_shadow cursor-pointer hover:box_shadow_hover items-center justify-between py-7 px-14 border-l-[8px] border-primary_red rounded-lg bg-[#FCFCFE]"
        onClick={toggleAnswer}
      >
        <h3 className="text-[18px] font-bold tracking-wide capitalize">
          {question}
        </h3>
        {showAnswer ? (
          <FaChevronDown className="text-2xl text-primary_red" />
        ) : (
          <FaChevronUp className="text-2xl text-primary_red" />
        )}
      </div>
      {showAnswer && (
        <div className="py-10 px-16 h-[260px] bg-[#fdeaea] w-[98.5%] m-auto mt-[5px]">
          <h3 className="text-[32px] capitalize">{question}</h3>
          <p className="mt-5 w-full text-[#232323]/60 leading-relaxed text-[19px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

// Questions Component
const Questions = () => {
  return (
    <section className="space-y-3 mb-20">
      <FAQItem
        question="What is Bone Marrow Transplant (BMT)?"
        answer="A BMT is a medical procedure that involves replacing or restoring damaged or destroyed bone marrow with healthy stem cells, essential for blood cell production."
      />
      <FAQItem
        question="What are Indications for BMT?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="What Diseases Can be Cured with BMT?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="What are the common Complications of BMT?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="What is Graft-Versus-Host Disease (GVHD)?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="How Can I Prepare for a BMT?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="What Happens During the BMT Procedure?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="What Hospital Processes Should I Expect?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="What Medications Will I Take After BMT?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="How Long Does the Recovery Process Take?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="What Lifestyle Adjustments Are Necessary After BMT?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="How Can I Cope with the Emotional Challenges Post-BMT?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="Can I Return to Normal Activities After BMT?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
      <FAQItem
        question="What Ongoing Support is Available?"
        answer="During a bone marrow transplant, unhealthy marrow is replaced by healthy cells. These cells can come from a donor or can be harvested from the patient's own body."
      />
    </section>
  );
};

export default Questions;
