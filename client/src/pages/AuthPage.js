 import React, {useContext, useEffect, useState} from 'react'
 import {useHttp} from '../hooks/http.hook'
 import {useMessage} from '../hooks/message.hook'
 import {AuthContext} from '../context/AuthContext'
 import {Logo} from '../Logo'

 export const AuthPage = () => {
   const auth = useContext(AuthContext)
   const message = useMessage()
   const {loading, request, error, clearError} = useHttp()
   const [form, setForm] = useState({
    email: '', password: ''
   })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }
  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      message(data.message)
      //auth.logout()/////////////////////////////////////////////////////////////////////////////////
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    
    <div>
      
            <Logo text = "KinoKarnaLog"/>
          <div className="row">
       <div className="col s6 offset-s3">
         <div className="card red darken-1">
           <div className="card-content white-text">
             <span className="card-title">Авторизация</span>
             <div>

               <div className="input-field">
                 <input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  // value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  // value={form.password}
                   onChange={changeHandler}
                />
                <label htmlFor="email">Пароль</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button
              name = "buttonin"
              className="btn yellow darken-4"
              style={{marginRight: 10}}
               disabled={loading}
               onClick={loginHandler}
            >
              Войти
            </button>
            <button
              className="btn grey lighten-1 black-text"
               onClick={registerHandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    






     
  )
}

