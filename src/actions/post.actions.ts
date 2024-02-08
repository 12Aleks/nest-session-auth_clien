'use server';
import {IPost} from "@/utils/types";
import axios from "axios";
import {cookies} from "next/headers";

const HOST = process.env.NEXT_PUBLIC_SERVER_HOST_NAME;
export async function getServerSideProps(id: string): Promise<IPost>
{
    const res = await fetch(`${HOST}/api/posts/${id}`);
    return await res.json();
}

export async function getPostsData(): Promise<IPost[]>{
    const res = await fetch(`${HOST}/api/posts`, {cache: "no-store"});
    return await res.json();
}

export async function createPost(post: Pick<IPost, 'title' | 'description' >){
    const cookie = cookies().get('user_id')
    console.log(cookie?.value)

    const data = {id: cookie?.value, ...post}

    const res = await fetch(`${HOST}/api/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data),
        cache: 'force-cache'
    });

    // console.log(res)
}