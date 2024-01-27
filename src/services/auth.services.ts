import axios from "axios";

interface loginData{
    email: string,
    password: string
}

const HOST_NAME = process.env.NEXT_PUBLIC_HOST_NAME

export const loginUser = (userData: loginData) => {
   return axios.post(`${HOST_NAME}/auth/login` , userData)
}


