'use server';
import {cookies} from "next/headers";
import axios from "axios";


interface loginData{
    id?:number,
    email: string,
    password: string
}


const HOST_NAME = process.env.NEXT_PUBLIC_SERVER_HOST_NAME

export async function loginUser (userData: loginData): Promise<loginData>  {
   const {data} =  await axios.post(`${HOST_NAME}/api/auth/login` , userData);
   cookies().set(`user_id`, data.id);
   return data
}


