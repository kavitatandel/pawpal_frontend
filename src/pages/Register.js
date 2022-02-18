import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../logic/UserFunctions'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('owner')

    let navigate = useNavigate()

    const createUser = (e) => {
        e.preventDefault()

        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            user_type: userType,
        }

        register(newUser).then(res => {
            navigate('/user')
        })
    }

    return (
        <div>
            <div>
                <h1>REGISTER USER</h1>
            </div>
            <div>
                <form onSubmit={createUser}>
                    <div>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" placeholder="Enter your first name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" placeholder="Enter your last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input name="email" placeholder="Enter your email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" placeholder="Enter your password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <div>
                        <label htmlFor="account_type">Account Type</label>
                        <input type="radio" name="account_type"
                            value="owner"
                            checked={userType === 'owner'}
                            onChange={(e) => { setUserType(e.target.value) }}
                        />Owner
                        <input type="radio" name="account_type"
                            value="doglover"
                            checked={userType === 'doglover'}
                            onChange={(e) => { setUserType(e.target.value) }} />Dog Lover
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                        <button onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register