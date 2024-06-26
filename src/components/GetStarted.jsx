import styles from "../style";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[170px] h-[64px] rounded-xl bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-xl`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient"><a href="#footer">Get In Touch</a></span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
