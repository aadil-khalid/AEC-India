import { str1, str2, str3, str4, audit1, audit2, audit3, audit4 } from "../assets";
import styles, { layout } from "../style";

const AuditPort = () => (
  <section className={`${styles.flexCenter} flex ll:flex-row flex-col box-shadow`}>
    <div className={`${styles.flexCenter} ll:flex flex-wrap max-w-[570px] ll:mr-24 hidden`}>
        <img src={audit2} alt="aec" className="w-[300px] h-[200px] ll:h-[200px] rounded-[90px] ll:mb-[10px] mb-[10px]" />
        <img src={audit1} alt="aec" className="w-[300px] h-[200px] ll:w-[200px] ll:h-[150px] rounded-[90px] ml-[10px] mb-[10px]" />
        <img src={audit3} alt="aec" className="w-[300px] h-[200px] ll:w-[200px] ll:h-[150px] rounded-[90px] ll:mr-[10px] mb-[10px]" />
        <img src={audit4} alt="aec" className="w-w-[300px] h-[200px] rounded-[90px]" />
  </div>
  <div className={`${styles.padding} ${styles.flexCenter} ${styles.marginY} bg-black-gradient-2 rounded-[20px] box-shadow ss:max-w-[500px] ss:max-h-[500px] flex-row`}>
    <div className="flex flex-col items-center">
      <h2 className={`${styles.heading3} text-center mt-[0px] mb-[0px] max-w-[330px] `}>Structural Audit, NDT & Repair</h2>
      <p className={`${styles.paragraph} max-w-[300px] mt-[50px] mb-[100px]`}>
      With years of experience, our team is here to provide you with exceptional customer service and top-of-the-line results, every single time.
      </p>
    </div>
  </div>
  <div className={`${styles.flexCenter} flex flex-wrap max-w-[570px] ll:mr-24 ll:hidden`}>
        <img src={audit2} alt="aec" className="w-[300px] h-[200px] ll:h-[200px] rounded-[90px] ll:mb-[10px] mb-[10px]" />
        <img src={audit1} alt="aec" className="w-[300px] h-[200px] ll:w-[200px] ll:h-[150px] rounded-[90px] ml-[10px] mb-[10px]" />
        <img src={audit3} alt="aec" className="w-[300px] h-[200px] ll:w-[200px] ll:h-[150px] rounded-[90px] ll:mr-[10px] mb-[10px]" />
        <img src={audit4} alt="aec" className="w-[300px] h-[200px] rounded-[90px]" />
  </div>
  </section>
);

export default AuditPort;
// mt-[25px] ml-[80px]
// mb-[25px] ml-[20px]