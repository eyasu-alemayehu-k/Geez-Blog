import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();
    const postsString = JSON.stringify(posts);
    return new NextResponse(postsString, { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};


export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};