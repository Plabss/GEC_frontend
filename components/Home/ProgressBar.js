"use client";
import Image from "next/image";
import React, { useEffect, useState, useMemo, useRef } from "react";

import usa from "@/assets/flag/usa.svg";
import uk from "@/assets/flag/uk.svg";
import malta from "@/assets/flag/malta.svg";
import australia from "@/assets/flag/australia.svg";
import newZealand from "@/assets/flag/newZea.svg";
import ireland from "@/assets/flag/ireland.svg";
import canada from "@/assets/flag/canada.svg";
import denmark from "@/assets/flag/denmark.svg";
import arabEmi from "@/assets/flag/arabEmi.svg";

const ProgressBar = () => {
  const skills = useMemo(
    () => [
      { label: "USA", value: "80%", flag: usa },
      { label: "Canada", value: "90%", flag: canada },
      { label: "UK", value: "80%", flag: uk },
      { label: "Denmark", value: "100%", flag: denmark },
      { label: "Australia", value: "95%", flag: australia },
      { label: "New Zealand", value: "100%", flag: newZealand },
      { label: "Malta", value: "100%", flag: malta },
      { label: "Ireland", value: "100%", flag: ireland },
      { label: "Dubai", value: "100%", flag: arabEmi },
    ],
    []
  );

  const [progress, setProgress] = useState(skills.map(() => ({ width: "0%" })));

  const progressBarRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = progressBarRefs.current.indexOf(entry.target);
            setProgress((prevProgress) => {
              const newProgress = [...prevProgress];
              newProgress[index] = { width: skills[index].value };
              return newProgress;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    progressBarRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressBarRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [skills]);

  return (
    <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className=" items-center">
          <div className="flex items-center">
            <Image
              src={skill.flag}
              alt={`${skill.label} flag`}
              className="w-6 h-6 mr-2"
            />

            <span className="text-gray-800 dark:text-white font-medium">
              {skill.label}
            </span>
          </div>
          <div className=" flex items-center">
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 ml-2">
              <div
                ref={(el) => (progressBarRefs.current[index] = el)}
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-[1500ms] ease-in-out"
                style={progress[index]}
              ></div>
            </div>
            <h4 className="m-2 font-bold">{skill?.value}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
