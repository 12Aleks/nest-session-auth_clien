"use client"
import {useEffect, useState} from 'react';
import {IPost} from "@/utils/types";
import PostItem from "@/components/PostItem";
import FormCreatePost from "@/components/FormCreatePost";
import {getPostsData} from "@/app/posts/utils";


export default function PostsPage() {
    const [localPosts, setLocalPosts] = useState<IPost[]>([]);
    const fetchData = async () => {
        try {
            const data: IPost[] = await getPostsData();
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
            <div className="row">

                <div className="col-md-6">
                    {localPosts?.map((post) =>
                        <PostItem post={post} key={post.title}/>
                    )}
                </div>
                <FormCreatePost/>
            </div>
        </main>
    );
};