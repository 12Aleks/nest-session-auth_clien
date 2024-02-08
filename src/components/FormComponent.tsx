"use client"
import React, {useState} from 'react';
import {useInput} from "@/hooks/useInput";
import {loginUser} from "@/actions/auth.actions";
import { useRouter } from 'next/navigation'

const HOST_NAME = process.env.NEXT_PUBLIC_HOST_NAME
const FormComponent = () => {
    const router = useRouter()
    const name = useInput('');
    const email = useInput('');
    const password = useInput('');

    const [isRegistration, setIsRegistration] = useState<boolean>(false);

    function registration(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        console.log('Registraton')
    }

    async function login(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        let data = await loginUser({email: email.value, password: password.value});
        console.log(data)
        console.log('Login')
        email.onChange()
        password.onChange()
        data && router.push(`${HOST_NAME}/posts`)

    }

    return (
        <div className="col-lg-12">
            <div className="login-page bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h3 className="mb-3">{!isRegistration? 'Login': 'Registration'} Now</h3>
                            <div className="bg-white shadow rounded">
                                <div className="row">
                                    <div className="col-md-7 pe-0">
                                        <div className="form-left h-100 py-5 px-5">
                                            <form action="" className="row g-4">
                                                {isRegistration &&  <div className="col-12">
                                                    <label>Username<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                                        <input type="text"
                                                               className="form-control"
                                                               placeholder="Enter Username"
                                                               {...name}
                                                        />
                                                    </div>
                                                  </div>
                                                }
                                                 <div className="col-12">
                                                    <label>Email<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                        <input type="email"
                                                               className="form-control"
                                                               placeholder="Enter Email"
                                                               {...email}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="col-12">
                                                    <label>Password<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                        <input type="text"
                                                               className="form-control"
                                                               placeholder="Enter Password"
                                                               {...password}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="col-sm-12">
                                                    <p className="float-end text-dark pointer" onClick={() => setIsRegistration(!isRegistration)}>{isRegistration? 'Login': 'Registration'}</p>
                                                </div>

                                                <div className="col-12 mb-4">
                                                    { isRegistration ? <button
                                                            type="submit"
                                                            className="btn btn-dark px-4 float-end"
                                                            onClick={registration}>Registration</button>
                                                    : <button type="submit"
                                                            className="btn btn-dark px-4 float-end"
                                                            onClick={login}>Login</button>
                                                    }
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ps-0 d-none d-md-block ">
                                        <div className="form-right h-100 bg-dark text-white text-center pt-5 ps-3 pe-3 pb-3 bg_img" >
                                            <i className="bi bi-bootstrap"></i>
                                            <h2 className="fs-2">Welcome, this is test project.</h2>
                                            <p>NestJS: Session Authentication</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;