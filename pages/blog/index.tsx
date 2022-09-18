import { Search } from "@mui/icons-material";
import {
  Chip,
  Container,
  Grid,
  NoSsr,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import path from "path";
import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { PostCard } from "../../components/post-card";
import Meta from "../../helpers/Meta";
import { IPost, Tag, tagFilters } from "../../types";

interface BlogProps {
  posts: IPost[];
}

const Blog: NextPage<BlogProps> = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>(posts);
  const [postTitles, setPostTitles] = useState<string[]>(
    posts.map((post: IPost) => post.metaData.title.toLowerCase())
  );
  const [searchString, setSearchString] = useState("");
  const [isAllTag, setIsAllTag] = useState(true);
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    const filteredPostsTitles: string[] = [...postTitles].filter(
      (title: string) => title.indexOf(searchString.trim().toLowerCase()) !== -1
    );
    const refilteredPosts: IPost[] = [...posts].filter((post: IPost) =>
      filteredPostsTitles.includes(post.metaData.title.toLowerCase())
    );

    setFilteredPosts(refilteredPosts);
  }, [searchString, postTitles, posts]);

  useEffect(() => {
    if (tags.length > 0) {
      setIsAllTag(false);
    } else {
      setIsAllTag(true);
    }
  }, [tags]);

  return (
    <>
      <Meta
        title="Blog | Hasan Ahmad"
        description="Learn development with great articles.
        Articles on Software Development, JavaScript, TypeScript, React, Next.js, and more.."
      />
      <NavBar />
      <Container sx={{ marignTop: "1rem" }}>
        <Grid container marginTop={{ md: "2rem", xs: "0" }} padding="1rem">
          <Grid item md={9} xs={12}>
            <Paper sx={{ paddingX: "1rem", marginTop: "1rem" }}>
              <Typography variant="h2" fontWeight="700">
                Learn development with great articles.
              </Typography>
              <Typography variant="h4" paddingY="1rem" color="primary.A100">
                Articles on Software Development, JavaScript, TypeScript, React,
                Next.js, and more..
              </Typography>
            </Paper>
            <Paper sx={{ padding: "1rem" }}>
              <TextField
                placeholder="Search..."
                value={searchString}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchString(e.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <Search style={{ fontSize: 30, marginRight: 8 }} />
                  ),
                  sx: { fontSize: { md: 20, xs: 18 }, borderRadius: "12px" },
                }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Paper sx={{ paddingX: "2rem", paddingY: "1rem" }}>
          <Typography>Search blog by topics</Typography>
          <Grid container spacing={1} marginY="1rem" alignItems="baseline">
            <Chip
              onClick={() => {
                setTags([]);
                setIsAllTag(true);
              }}
              label="All Posts"
              color={isAllTag ? "primary" : "default"}
              sx={{
                paddingX: { md: "1rem", xs: "0.3rem" },
                paddingY: { md: "1.8rem", xs: "1.4rem" },
                fontSize: { md: "1rem", xs: "0.9rem" },
                fontWeight: "600",
                transition: "ease-out 0.1s",
                ":hover": {
                  outline: "2px",
                  outlineStyle: "solid",
                },
              }}
            />
            {tagFilters.map((tag: Tag, index: number) => (
              <Grid item key={index}>
                <Chip
                  label={tag}
                  color={tags.includes(tag) ? "primary" : "default"}
                  onClick={() => {
                    if (!tags.includes(tag)) {
                      setTags([...tags, tag]);
                    } else {
                      const selectedTags = [...tags].filter(
                        (selectedTag: Tag) => selectedTag !== tag
                      );
                      setTags(selectedTags);
                    }
                  }}
                  sx={{
                    paddingX: { md: "1rem", xs: "0.3rem" },
                    paddingY: { md: "1.8rem", xs: "1.4rem" },
                    fontSize: { md: "1rem", xs: "0.9rem" },
                    fontWeight: "600",
                    transition: "ease-out 0.1s",
                    ":hover": {
                      outline: "2px",
                      outlineStyle: "solid",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Paper sx={{ paddingX: "2rem", paddingY: "1rem" }}>
          <Typography variant="h3" fontWeight="600" paddingBottom="1rem">
            Articles
          </Typography>
          <NoSsr>
            <Grid container spacing={2}>
              {filteredPosts.map((post: IPost, index: number) => {
                if (
                  !isAllTag &&
                  post.metaData.tags.some((tag: Tag) => tags.includes(tag))
                ) {
                  return (
                    <Grid key={index} item md={4}>
                      <PostCard post={post} />
                    </Grid>
                  );
                } else if (isAllTag) {
                  return (
                    <Grid key={index} item md={4}>
                      <PostCard post={post} />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </NoSsr>
        </Paper>
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

  return {
    props: {
      posts: blogPosts.sort(
        (a: IPost, b: IPost) =>
          new Date(b.metaData.dateString).valueOf() -
          new Date(a.metaData.dateString).valueOf()
      ),
    },
  };
};

export default Blog;
