import { useEffect, useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import './style/form.scss'
import { userRegister, userLogin } from '../api/api'
import { setUser } from '../redux/userReducer'

function Register(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const authUser = async () => {
        const res = await userLogin({username, password})
        
        if(res){
            localStorage.setItem('token', res.token)
            return true
        }

    }

    const register = async (e) => {
        e.preventDefault()

        const res = await userRegister({username, password})

        if(res){
            alert(res.message)
            !authUser() ? setIsSuccess(true) : props.setUser({id: res.user._id, username: res.user.username})
        }
    }

    useEffect(() => {
        if(props.isAuth === true) {
            return <Redirect to='/' />
        }
    }, [props.isAuth])

    return (
        <div>

            {props.isAuth && <Redirect to="/" />}
            {isSuccess && <Redirect to="login" />}

            <div className="form-block">
                <form className="form" onSubmit={register}>
                    <h3 className="form-title">Регистрация</h3>
                    <input type="text" placeholder="Имя польователя" defaultValue={username}
                        pattern='[A-Za-zа-яёА-ЯЁ0-9]{3,13}' required={true}  
                        title='Макимальная длина 15 символов, не подерживаются спец символы' 
                        className="form-field" maxLength={13} minLength={3} 
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input type="password" placeholder="Пароль" 
                        defaultValue={password} minLength={8} maxLength={15}
                        title={'Минимальная длина пароля 8 символов'} required className="form-field"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="form-send">Регистрация</button>
                    <p className="form-text">Есть аккаунт?<br />
                        <NavLink to='/login' className="form-text link">Войти</NavLink>
                    </p>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = store => ({
    isAuth: store.currentUser.isAuth
})

export default connect(mapStateToProps, {setUser})(Register)
