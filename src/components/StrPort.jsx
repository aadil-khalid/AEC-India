import { str1, str2, str3, str4, audit1, audit2, audit3, audit4 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const StrPort = () => (
  <section className={`${styles.flexCenter} flex ll:flex-row flex-col box-shadow`}>
  <div className={`${styles.padding} ${styles.flexCenter} ${styles.marginY} bg-black-gradient-2 rounded-[20px] box-shadow ss:max-w-[500px] ss:max-h-[500px] flex-row`}>
    <div className="flex flex-col items-center">
      <h2 className={`${styles.heading3} text-center mt-[0px] mb-[0px] max-w-[330px] `}>Structural Analysis & PMC</h2>
      <p className={`${styles.paragraph} max-w-[300px] mt-[50px] mb-[100px]`}>
      Have a look at our portfolio with capstone projects in structural engineering, structural audit, architecture and construction project management.
      </p>
    </div>
  </div>
  <div className={`${styles.flexCenter} flex flex-wrap max-w-[570px] ll:ml-24`}>
        <img src={str1} alt="aec" className="w-[300px] h-[200px] ll:h-[200px] rounded-[90px] ll:mb-[10px] mb-[10px]" />
        <img src={str2} alt="aec" className="w-[300px] h-[200px] ll:w-[200px] ll:h-[150px] rounded-[90px] ml-[10px] mb-[10px]" />
        <img src={str3} alt="aec" className="w-[300px] h-[200px] ll:w-[200px] ll:h-[150px] rounded-[90px] ll:mr-[10px] mb-[10px]" />
        <img src={str4} alt="aec" className="w-[300px] h-[200px] rounded-[90px]" />
  </div>
  </section>
);

export default StrPort;
// mt-[25px] ml-[80px]
// mb-[25px] ml-[20px]