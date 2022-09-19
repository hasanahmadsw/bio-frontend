import { Box, Grid, Paper, Typography } from "@mui/material";
import { CustomLink } from "../components/custom-link";
import { PostCard } from "../components/post-card";
import { IPost } from "../types";
// const posts = [
//   {
//     slug: "nextjs",
//     metaData: {
//       title: "NextJS Code Blog",
//       dateString: "November 13, 2021",
//       mainImageUrl: "/images/posts/img1.jpg",
//       excerpt: "Learn about NextJS",
//       tags: ["Next", "React"],
//     },
//   },
//   {
//     slug: "nodejs",
//     metaData: {
//       title: "Build high scale services using Node.js",
//       dateString: "Septemper 18, 2022",
//       mainImageUrl: "/images/posts/img2.jpg",
//       excerpt: "Learn about Node.js",
//       tags: ["Node"],
//     },
//   },
//   {
//     slug: "nodejs",
//     metaData: {
//       title: "Build high scale services using Node.js",
//       dateString: "Septemper 18, 2022",
//       mainImageUrl: "/images/posts/img2.jpg",
//       excerpt: "Learn about Node.js",
//       tags: ["Node"],
//     },
//   },
// ];

interface BlogSectionProps {
  posts: IPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <Paper sx={{ padding: "2rem" }}>
      <Box marginBottom="1.2rem">
        <Box>
          <Typography variant="h2" fontWeight="500" paddingBottom="1rem">
            Blog recommendations
          </Typography>
        </Box>
        <Box marginLeft="-0.8rem">
          <CustomLink href="/blog" variant="h4" fontWeight="700">
            See the full blog
          </CustomLink>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {posts.map((post: any) => (
          <Grid key={post.slug} item md={4}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
