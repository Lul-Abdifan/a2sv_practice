import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-4">
        <div className="about-elements-style">
          <Image
            className="inline-block"
            src="/PostedD.svg"
            alt="vacto-image"
            width={24}
            height={24}
          />
        </div>

        <div>
          <h3>Posted On</h3>
          <h3 className="about-darkened">Jul 1, 2023</h3>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="about-elements-style">
          <Image
            className="inline-block"
            src="/PostedD.svg"
            alt="vacto-image"
            width={24}
            height={24}
          />
        </div>

        <div>
          <h3>Deadine</h3>
          <h3 className="about-darkened">Jul 31, 2023</h3>
        </div>
      </div>
     
       
      <div className="flex flex-row gap-4">
        <div className="about-elements-style">
          <Image
            className="inline-block"
            src="/Address.svg"
            alt="vacto-image"
            width={24}
            height={24}
          />
        </div>

        <div>
          <h3>Location</h3>
          <h3 className="about-darkened">Addis Ababa</h3>
        </div>
      </div>  
     
      <div className="flex flex-row gap-4">
        <div className="about-elements-style">
          <Image
            className="inline-block"
            src="/StartD.svg"
            alt="vacto-image"
            width={24}
            height={24}
          />
        </div>

        <div>
          <h3>Start Date</h3>
          <h3 className="about-darkened">Aug 02, 2023</h3>
        </div>
      </div>  
      <div className="flex flex-row gap-4">
        <div className="about-elements-style">
          <Image
            className="inline-block"
            src="/EndD.svg"
            alt="vacto-image"
            width={24}
            height={24}
          />
        </div>

        <div>
          <h3>End Date</h3>
          <h3 className="about-darkened">Sep 02, 2023</h3>
        </div>
      </div>  
        
      </div>
    
  );
};

export default About;
