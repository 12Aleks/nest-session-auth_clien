'use server';
import {cookies} from "next/headers";
import axios from "axios";


interface loginData{
    id?:number,
    email: string,
    password: string
}

//test configuration for https
process.env.NODE_EXTRA_CA_CERTS = '/path/to/ca.crt';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const HOST = process.env.NEXT_PUBLIC_SERVER_HOST_NAME;

axios.defaults.withCredentials = true;

const instance = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    baseURL: HOST,
      withCredentials: true
})

export async function loginUser (userData: loginData): Promise<loginData>  {
   const response =  await instance.post(`/api/auth/login` , userData);
   console.log(response)
   cookies().set(`user_id`, response.data.id);
   return response.data
}


