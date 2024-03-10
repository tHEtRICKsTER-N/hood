import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                {/*LOGO*/}
                <img src='./logo.png' className='size-40 w-full px-24 py-5'></img>

                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    🧐 Wanna Chat ? <b>LOG IN</b> First ! 😃
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className='py-10 flex items-center'>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>U S E R N A M E</span>
                        </label>
                        <input type="text" placeholder="e.g. Naimish_01" className="input input-ghost w-full max-w-xs"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='flex items-center'>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>P A S S W O R D</span>
                        </label>
                        <input type="text" placeholder="Well ! That's a secret" className="input input-ghost w-full max-w-xs"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Dont have an Account link */}
                    <div className='py-5 relative'>
                        <Link to={'/signup'} className=" absolute bottom-0 top-6 link link-warning">Don't Have an Account?</Link>
                    </div>

                    <div className='py-5'>
                        <button className="btn btn-block btn-sm mt-2 btn-warning" disabled={loading}>{loading ? <span className='loading loading-spinner '></span> : "Login"}</button>
                    </div>

                </form>
            </div>
        </div>
    )
}


export default Login