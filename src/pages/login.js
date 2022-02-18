import React, { useState } from 'react'
import { login } from '../logic/UserFunctions'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const testLogin = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        login(user).then(res => {
            if (res) {
                navigate('/user')
            }
        })
    }

    return (
        <div >
            <div >
                <h1>SIGN IN</h1>
            </div>
            <div >
                <form onSubmit={testLogin} >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <button type="submit">Sign In</button>
                        <button onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </form>

            </div>
        </div>

    )
}
export default Login