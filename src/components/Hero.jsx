import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className="flex flex-col justify-center items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-white text-center ss:leading-[67px] leading-[67px]">
            Architecture <br className="sm:block hidden" />{" "}
            <h1 className="text-gradient text-center ">Structural Engineering</h1>{" "}
          </h1>
          <h1 className="font-poppins font-semibold ss:text-[48px] text-[30px] text-white text-center ss:leading-[67px] leading-[67px] w-full">
        Construction Project Management <br className="sm:block hidden" />{" "}
        <h1 className="text-center">Expert in Mumbai</h1>{" "}
        </h1>
          <div className="ss:flex mr-0 mt-12">
            <GetStarted />
          </div>
        <p className={`items-center justify-center w-full ${styles.paragraph} max-w-[910px] mt-5 text-center`}>
        Providing services all over India with solutions that are safe and cost efficient. We offer services in project management consultancy, structural audit, building repair and renovation. 
        We also expertise in Structural Engineering - BIM, Finite Element Analysis, 3D Modeling and 2D Layout/Architecture.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
