'use server';
import {cookies} from "next/headers";
import axios from "axios";


interface loginData{
    id?:number,
    email: string,
    password: string
}


const HOST = process.env.NEXT_PUBLIC_SERVER_HOST_NAME;

const instance = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    baseURL: HOST,
    withCredentials: true,
})

export async function loginUser (userData: loginData): Promise<loginData>  {
   const response =  await instance.post(`/api/auth/login` , userData);
   console.log(response)
   cookies().set(`user_id`, response.data.id);
   return response.data
}


