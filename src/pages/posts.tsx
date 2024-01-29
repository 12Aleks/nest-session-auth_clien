import {FC} from 'react';
import axios from "axios";

const HOST = process.env.NEXT_PUBLIC_HOST_NAME;

interface PostsProps {
    posts: IPost[];
}

const Posts:FC<PostsProps> = (posts) => {

    console.log(posts)

    return (

        <main>
           <h1>Posts</h1>
        </main>

    );
};

export default Posts;

export async function getServerSideProps(): Promise<{ props: PostsProps  }> {
    const { data } = await axios.get(`${HOST}/posts`);
    return { props: { posts: data } };
}