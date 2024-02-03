"use client"
import {FC} from 'react';
import {IPost} from "@/utils/types";

interface PostItemProps {
    post: IPost;
}



const PostItem: FC<PostItemProps>  = ({ post }) => {


    function formatDate(isoDateString: string) {
        const date = new Date(isoDateString);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    return (
        <div className="content">
            <h2 className="fw-bolder mb-1">{post.title}</h2>
            <div className="text-muted fst-italic mb-2">Posted on: { formatDate(post.create_post_At)}</div>
            <p className="fs-5 mb-4">{post.description}</p>
            <h4>By {post.user.username}</h4>
        </div>
    );
};

export default PostItem;