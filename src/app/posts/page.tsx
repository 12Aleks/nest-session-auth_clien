"use client"
import {useEffect, useState} from 'react';
import {IPost} from "@/utils/types";
import PostItem from "@/components/PostItem";

const HOST = process.env.NEXT_PUBLIC_HOST_NAME;

export default  function PostsPage () {
    const [localPosts, setLocalPosts] = useState<IPost[]>([]);
    const fetchData = async () => {
        try {
            const response = await fetch(`${HOST}/posts`);

            if (!response.ok) throw new Error('Network response was not ok');

            const data: IPost[] = await response.json();

            setLocalPosts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            <h1>Posts</h1>
            {localPosts?.map((post) =>
                <PostItem post={post} key={post.title}/>
            )}
        </main>
    );
};