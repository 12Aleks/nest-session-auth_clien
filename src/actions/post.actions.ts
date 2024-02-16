'use server';
import {IPost} from "@/utils/types";
import axios from "axios";
import {cookies} from "next/headers";

//test configuration for server https
process.env.NODE_EXTRA_CA_CERTS = '/path/to/ca.crt';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const HOST = process.env.NEXT_PUBLIC_SERVER_HOST_NAME;
axios.defaults.withCredentials = true;
const instance = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    baseURL: HOST
})
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

    const res = await instance.post(`/api/posts`, data)

    // console.log(res)
}

export async function deleteOnePost(id: number){
    const information = await axios.delete(`${HOST}/api/posts/${id}`)
    console.log(information)
}