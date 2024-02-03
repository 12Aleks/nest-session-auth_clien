import {FC, useEffect, useState} from 'react';
import axios from "axios";
import {IPost} from "@/utils/types";
import PostItem from "@/components/PostItem";

const HOST = process.env.NEXT_PUBLIC_HOST_NAME;

interface PostsProps {
    posts: IPost[];
}

const Posts:FC<PostsProps> = ({ posts }) => {
    const [localPosts, setLocalPosts] = useState<IPost[]>([]);

    useEffect(() => {
        posts && setLocalPosts(posts);
    }, [posts]);

    return (

        <main>
           <h1>Posts</h1>
            { localPosts?.map((post) =>
                <PostItem post={post} key={post.title} />
            )}
        </main>

    );
};

export default Posts;

export async function getServerSideProps(): Promise<{ props: PostsProps  }> {
    const { data } = await axios.get(`${HOST}/posts`);
    return { props: { posts: data } };
}