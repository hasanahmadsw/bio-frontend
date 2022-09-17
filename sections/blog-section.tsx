import { Box, Grid, Paper, Typography } from "@mui/material";
import { CustomLink } from "../components/custom-link";
import { PostCard } from "../components/post-card";

const posts = [
  {
    _id: "1",
    title: "This is the third post, This is the third post",
    image: "/banner.jpeg",
    createdAt: "2022-08-19T16:41:47.783+00:00",
  },
  {
    _id: "1",
    title: "This is the third post, This is the third post",
    image: "/banner.jpeg",
    createdAt: "2022-09-19T16:41:47.783+00:00",
  },
  {
    _id: "1",
    title: "This is the third post, This is the third post",
    image: "/help.jpeg",
    createdAt: "2022-10-19T16:41:47.783+00:00",
  },
];

export const BlogSection = () => {
  return (
    <Paper sx={{ padding: "2rem" }}>
      <Box marginBottom="1.2rem">
        <Box>
          <Typography variant="h1" fontWeight="500" paddingBottom="1rem">
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
        {posts.map((post) => (
          <Grid key={post._id} item md={4}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
