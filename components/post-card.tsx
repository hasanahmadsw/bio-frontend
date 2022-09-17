import { styled, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";

const Post = styled("div")(({ theme }) => ({
  cursor: "pointer",
  ":hover": {
    "& div": {
      outline: "2px",
      outlineStyle: "solid",
    },
  },
}));

const ImageCard = styled("div")(() => ({
  border: "5px solid transparent",
  borderRadius: "12px",
  transition: "ease-out 0.2s",
  height: "450px",
}));

interface PostCardProps {
  post: any;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Post>
        <ImageCard>
          <img
            src={post.frontmatter.cover_image}
            alt={post.frontmatter.title}
            height="100%"
            width="100%"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </ImageCard>

        <Typography
          color="primary.A100"
          variant="h4"
          fontWeight="700"
          paddingTop="1rem"
        >
          <Moment format="D MMM YYYY">{post.frontmatter.date}</Moment>
        </Typography>
        <Typography variant="h3" fontWeight="600" paddingY="1rem">
          {post.frontmatter.title}
        </Typography>
      </Post>
    </Link>
  );
};
