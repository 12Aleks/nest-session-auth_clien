"use client"
import {FC} from 'react';
import {IPost} from "@/utils/types";
import {useRouter} from "next/navigation";
import styles from '@/styles/posts.module.scss'
import {deleteOnePost} from "@/actions/post.actions";
interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps>  = ({ post }) => {
    const router = useRouter()

    function formatDate(isoDateString: string) {
        const date = new Date(isoDateString);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }

  async function deletePost(e: React.MouseEvent<SVGSVGElement>, id: number){
        e.stopPropagation();
        await deleteOnePost(id)
    }

    return (
        <div className={`${styles.post_wrapper} wrapper`} onClick={() => router.push(`/posts/${post.id}`)}>
            <h2 className="fw-bolder mb-1">{post.title}</h2>
            <div className="text-muted fst-italic mb-2">Posted on: { formatDate(post.create_post_At)}</div>
            <p className="fs-5 mb-4">{post.description}</p>
            <div className="d-flex align-items-center justify-content-between">
            <h4>By {post.user.username}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={(e) => deletePost(e, post.id)}>
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
            </div>
        </div>
    );
};

export default PostItem;