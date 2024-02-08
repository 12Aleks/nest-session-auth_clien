"use client"
import React from 'react';
import {getServerSideProps} from "@/actions/post.actions";

export default async function PostPage({ params }: { params: { id: string } }) {
    try{
        const post = await getServerSideProps(params.id);
        return <div>{post.title}</div>
    } catch( error ){
        return <div>Error fetching: {JSON.stringify( error) }</div>
    }
};

