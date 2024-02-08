"use client"
import {useEffect, useState} from 'react';
import {IPost} from "@/utils/types";
import PostItem from "@/components/PostItem";
import FormCreatePost from "@/components/FormCreatePost";
import {getPostsData} from "@/actions/post.actions";


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
                    {localPosts?.map((post, index) =>
                        <PostItem post={post} key={post.title + index}/>
                    )}
                </div>
                <FormCreatePost/>
            </div>
        </main>
    );
};