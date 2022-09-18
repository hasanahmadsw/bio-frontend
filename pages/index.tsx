import { Container, Divider } from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, NextPage } from "next";
import path from "path";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import Meta from "../helpers/Meta";
import { AboutSection } from "../sections/about-section";
import { BlogSection } from "../sections/blog-section";
import { ContactSection } from "../sections/contact-section";
import { HeroSection } from "../sections/hero-section";
import { ServicesSection } from "../sections/services-section";
import { SkillsSection } from "../sections/skills.section";
import { IPost } from "../types";

interface HomeProps {
  posts: IPost[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
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
        <Divider sx={{ marginY: "4rem" }} />
        <BlogSection posts={posts} />
        <Divider sx={{ marginY: "4rem" }} />
        <ContactSection />
        {/* <ResumeSection /> */}
      </Container>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsDir = path.join("posts");

  const files = fs.readdirSync(postsDir);

  const blogPosts: IPost[] = files.map((fileName: string) => {
    const slug = fileName.replace(".mdx", "");
    const post = fs.readFileSync(path.join("posts", fileName));
    const { data: metaData } = matter(post);
    return { slug, metaData } as IPost;
  });

  const featuredPosts = blogPosts.filter(
    (post) => post.metaData.featured === "true"
  );

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Home;
