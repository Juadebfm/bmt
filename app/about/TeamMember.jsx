import React from "react";

const TeamMember = ({ name, designation, company }) => {
  return (
    <>
      <div>
        <div>
          <h2 className="font-lexend font-semibold tracking-tighter text-[20px] text-primary_red">
            {name}
          </h2>
        </div>
        <div>
          <p className="font-semibold tracking-tighter text-[16px] leading-[17.3px] font-lexend text-primary_faded_dark opacity-60 whitespace-pre-line ">
            {designation}
          </p>
        </div>
        <div>
          <p className="font-semibold tracking-tighter text-[16px] leading-[17.3px] font-lexend text-primary_faded_dark opacity-60">
            {company}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
