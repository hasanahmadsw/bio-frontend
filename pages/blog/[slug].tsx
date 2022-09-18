import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/vs2015.css";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import path from "path";
import { useEffect } from "react";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import Meta from "../../helpers/Meta";
import { AuthorSection } from "../../sections/author-section";
hljs.registerLanguage("typescript", typescript);

const Post: InferGetStaticPropsType<typeof getStaticProps> = ({
  source,
  meta,
}: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: any;
}) => {
  const router = useRouter();
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <Meta
        title={meta.title}
        ogImage={meta.mainImageUrl}
        keywords={meta.keywords}
        description={meta.description}
      />
      <NavBar />
      <Container
        maxWidth="md"
        sx={{ marginTop: "1rem", paddingBottom: "1rem" }}
      >
        <Box display="flex" alignItems="center" padding="1rem">
          <IconButton onClick={() => router.push("/blog")}>
            <ArrowBack color="primary" />
          </IconButton>
          <Typography variant="h4" fontWeight="600" marginX="0.5rem">
            Back to blog
          </Typography>
        </Box>
        <Paper sx={{ padding: "1rem" }}>
          <Typography variant="h3" fontWeight="600" paddingY="1rem">
            {meta.title}
          </Typography>
          <Typography color="primary.A100" variant="h4" fontWeight="700">
            {meta.dateString}
          </Typography>
        </Paper>
        <Box height="450px" padding="1rem">
          <img
            src={meta.mainImageUrl}
            alt={meta.title}
            height="100%"
            width="100%"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </Box>
        <Paper sx={{ paddingX: "1rem" }}>
          <MDXRemote {...source} />
        </Paper>
        <Divider sx={{ marginY: "2rem", marginX: "1rem" }} />
        <Paper sx={{ paddingX: "1rem" }}>
          <AuthorSection />
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join("posts");
  const files = fs.readdirSync(postsDir);

  const paths = files.map((fileName: string) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false, // if slug dosen't exist will return 404 page
  };
};

type Params = {
  [param: string]: any;
};

export const getStaticProps: GetStaticProps<Params> = async ({
  params: { slug },
}: Params) => {
  const post = fs.readFileSync(path.join("posts", slug + ".mdx"));
  const { data: metaData, content } = matter(post);
  const mdxSource = await serialize(content, { scope: metaData });
  return {
    props: { source: mdxSource, meta: mdxSource.scope },
  };
};

export default Post;
