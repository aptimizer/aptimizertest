import Image from "next/image";
import s from "./HeroSection.module.css";
import Hero from "@/public/png/hero.png";
import Idea from "@/public/svg/idea.svg";
import { MobileHeroSection } from "./_components";

const HeroSection = () => {
  return (
    <section className={s.heroSection}>
      <Image className={s.topImage} src={Idea} alt="영감" width={60} />

      <div className={s.titleContainer}>
        <p className={s.title}>AI 기반 맞춤형 진로 설계 서비스</p>
        <p className={s.subTitle}>
          앱티마이저와 함께 당신의 미래를 설계하세요!
        </p>
      </div>

      {/* PC */}
      <div className={s.imageContainer}>
        <Image
          className={s.image}
          src={Hero}
          alt="Hero Image"
          width={1400}
          height={437}
        />
      </div>

      {/* 모바일  */}
      <div className={s.titleContainerMobile}>
        <p className={s.titleMobile}>AI 기반 맞춤형 진로 설계 서비스</p>
        <p className={s.subTitleMobile}>
          앱티마이저와 함께
          <br />
          당신의 미래를 설계하세요!
        </p>
      </div>

      <MobileHeroSection />
    </section>
  );
};

export default HeroSection;
