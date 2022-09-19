import { styled, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IPost } from "../types";

const Post = styled("div")(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "12px",
  ":hover": {
    "& div": {
      outline: "2px",
      outlineStyle: "solid",
    },
  },
}));

const ImageCard = styled("div")(({ theme }) => ({
  border: "4px solid transparent",
  borderRadius: "12px",
  transition: "ease-out 0.2s",
  height: "450px",
  [theme.breakpoints.down("md")]: {
    height: "350px",
  },
}));

interface PostCardProps {
  post: IPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Post>
        <ImageCard>
          <img
            src={post.metaData.mainImageUrl}
            alt={post.metaData.title}
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
          {post.metaData.dateString}
        </Typography>
        <Typography variant="h3" fontWeight="600" paddingY="1rem">
          {post.metaData.title}
        </Typography>
      </Post>
    </Link>
  );
};
