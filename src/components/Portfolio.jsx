import styles from "../style";
import KnowMore from "./KnowMore";

const Portfolio = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Our Portfolio</h2>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
      Have a look at our portfolio with capstone projects in structural engineering, structural audit, architecture and construction project management.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <KnowMore />
    </div>
  </section>
);

export default Portfolio;
