import {IPost} from "@/utils/types";
const HOST = process.env.NEXT_PUBLIC_HOST_NAME;
export async function getServerSideProps(id: string): Promise<IPost>
{
    const res = await fetch(`${HOST}/posts/${id}`);
    return await res.json();
}

export async function getPostsData(): Promise<IPost[]>{
    const res = await fetch(`${HOST}/posts`);
    return await res.json();
}