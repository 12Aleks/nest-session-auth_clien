"use client"
import {FC} from 'react';
import {IPost} from "@/utils/types";
import {useRouter} from "next/navigation";
import styles from '@/styles/posts.module.scss'
interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps>  = ({ post }) => {
    const router = useRouter()

    function formatDate(isoDateString: string) {
        const date = new Date(isoDateString);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    return (
        <div className={`${styles.post_wrapper} wrapper`} onClick={() => router.push(`/posts/${post.id}`)}>
            <h2 className="fw-bolder mb-1">{post.title}</h2>
            <div className="text-muted fst-italic mb-2">Posted on: { formatDate(post.create_post_At)}</div>
            <p className="fs-5 mb-4">{post.description}</p>
            <h4>By {post.user.username}</h4>
        </div>
    );
};

export default PostItem;