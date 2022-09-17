import { Container, Divider } from "@mui/material";
import type { NextPage } from "next";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import Meta from "../helpers/Meta";
import { AboutSection } from "../sections/about-section";
import { ContactSection } from "../sections/contact-section";
import { HeroSection } from "../sections/hero-section";
import { ServicesSection } from "../sections/services-section";
import { SkillsSection } from "../sections/skills.section";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Home: NextPage = (props: Props) => {
  return (
    <>
      <Meta />
      <NavBar />
      <Container>
        <HeroSection />
        <Divider sx={{ marginY: "4rem" }} />
        <AboutSection />
        <Divider sx={{ marginY: "4rem" }} />
        <SkillsSection />
        <Divider sx={{ marginY: "4rem" }} />
        <ServicesSection />
        {/* <Divider sx={{ marginY: "4rem" }} /> */}
        {/* <BlogSection /> */}
        <Divider sx={{ marginY: "4rem" }} />
        <ContactSection />
        {/* <ResumeSection /> */}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
