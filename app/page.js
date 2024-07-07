import HomeAwards from "@/components/Home/HomeAwards";
import HomeBanner from "@/components/Home/HomeBanner";
import HomePopularCountries from "@/components/Home/HomePopularCountries";
import HomeServices from "@/components/Home/HomeServices";
import HomeTestimonial from "@/components/Home/HomeTestimonial";
import HomeTimeLine from "@/components/Home/HomeTimeLine";
import HomeWhyChooseUs from "@/components/Home/HomeWhyChooseUs";
import Tab from "@/components/Home/Tab";
import FaqSection from "@/components/Study Abroad Steps/FaqSection";



export default function Home() {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Tab></Tab>
      <HomeServices></HomeServices>
      <HomeWhyChooseUs></HomeWhyChooseUs>
      <HomePopularCountries></HomePopularCountries>
      <HomeTimeLine></HomeTimeLine>
      <HomeAwards></HomeAwards>
      <HomeTestimonial></HomeTestimonial>
      <FaqSection></FaqSection>
    </div>
  );
}
