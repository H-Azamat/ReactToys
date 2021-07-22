import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'

import './style/form.scss'
import { userLogin } from '../api/api'
import { setUser } from '../redux/userReducer'

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuth, setIsAuth] = useState(false)

    const login = async (e) => {
        e.preventDefault()

        const res = await userLogin({username, password})

        if(res){
            localStorage.setItem('token', res.token)
            alert('Вы успешно вошли с свой аккаунт')
            props.setUser(res.user)
        }
    }

    useEffect(() => {
        if(props.isAuth === true){
            return setIsAuth(true)
        }
    }, [props.isAuth])

    return (
        <div>
            {isAuth && <Redirect to='/' />}
            <div className="form-block">
                <form className="form" onSubmit={login}>
                    <h3 className="form-title">Вход</h3>
                    <input type="text" placeholder="Имя польователя" defaultValue={username} 
                        required={true} className="form-field"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input type="password" placeholder="Пароль" 
                        defaultValue={password} required className="form-field"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="form-send">Войти</button>
                    <p className="form-text">Еще нет аккаунта?<br />
                        <NavLink to='/register' className="form-text link">Зарегистрироваться</NavLink>
                    </p>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = store => ({
    isAuth: store.currentUser.isAuth
})

export default connect(mapStateToProps, {setUser})(Login)