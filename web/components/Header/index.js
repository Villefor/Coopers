import React, { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Modal from '../Modal/index'
import styles from './styles.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Header(props) {
  const [showLogin, setLogin] = useState(false)

  const [emailInput, setEmailInput] = React.useState('')

  const [userInput, setUserInput] = React.useState('')

  const [passwordInput, setPasswordInput] = React.useState('')

  const [logout, setLogOut] = React.useState(false)

  const checkEmail = () =>
    /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(emailInput)

  const minLength = 6

  const userLength = 3

  const checkPass = () => passwordInput.length > minLength

  const checkUser = () => userInput.length > userLength

  const notify_signup = () =>
    toast.success('Welcome to the team!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const notify_logout = () =>
    toast.success('You have been successfully logged out!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const notify_loggin = () =>
    toast.success('You have been successfully logged in!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const notify_error = (err) =>
    toast.error(`Something went wrong, ${err.message}`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const notify_invalidToken = (sucesss) =>
    toast.warn('Please, you need to log again.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  useEffect(() => {
    if (localStorage.length !== 0) {
      setLogOut(true)
    }
  }, [logout])

  const handle_logout = () => {
    localStorage.clear()
    setLogOut(false)
    return notify_logout()
  }

  const body = {
    username: userInput,
    email: emailInput,
    password: passwordInput,
  }

  //cadastro
  const handle_submit = () => {
    fetch('https://dario.marbr.net/wp-json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(notify_error())
        }
        return response.json()
      })
      .then((json) => {
        notify_signup('success')
        console.log(json)
      })
      .catch((error) => {
        return Promise.reject()
      })
  }

  const get_token = async () => {
    const userInfo = {
      username: userInput,
      password: passwordInput,
      email: emailInput,
    }

    await fetch('https://dario.marbr.net/wp-json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(notify_error(response))
        }
        return response.json()
      })
      .then((json) => {
        localStorage.setItem('userData', json.token)
        localStorage.setItem('user', JSON.stringify(json.user_email))
        localStorage.setItem('user', JSON.stringify(json.user_nicename))
        setLogOut(true)
      })
      .catch((error) => {
        return Promise.reject()
      })
  }

  const validate_token = async () => {
    await fetch('https://dario.marbr.net/wp-json/jwt-auth/v1/token/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userData')}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(notify_invalidToken(response))
        }
        return response.json()
      })
      .then((json) => {
        console.log(json)
      })
  }

  const get_user = async () => {
    await fetch('https://dario.marbr.net/wp-json/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userData')}`,
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => console.log(json), notify_loggin('success'))
  }

  // função de jwt, validação e sign in
  const handle_sign_in = async () => {
    await get_token()

    await validate_token()

    await get_user()
  }

  return (
    <div className={styles.headerContainer}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header>
        <figure className={styles.sectionHeader_FirstDiv}>
          <img src={props.headerImages.coopers_logo} alt='logo' />
        </figure>
        <div className={styles.sectionHeader_SecondDiv}>
          {logout ? (
            <button onClick={handle_logout}>
              {' '}
              {props.headerText.Header_LogOut}{' '}
            </button>
          ) : (
            <button onClick={() => setLogin(true)}>
              {' '}
              {props.headerText.Header_Login}{' '}
            </button>
          )}
          <Modal show={showLogin} onClose={() => setLogin(false)}>
            <section className='login-container'>
              <div className='section-modal_firstDiv'>
                <figure>
                  <img
                    className='sign_Icon'
                    src={props.headerImages.sign_in_icon}
                    alt='background'
                  />
                </figure>
                <div className='section-modal_secondDiv'>
                  <h1 className='login-title'>
                    {props.headerText.Header_access_list}{' '}
                  </h1>
                  <h4 className='login-text'>
                    {props.headerText.Header_access_list_2}
                  </h4>
                </div>
              </div>
              <div>
                <div className='modal-login_inputs'>
                  <label className='modal-login_label' htmlFor='email'>
                    Email:
                  </label>
                  <br />
                  <input
                    name='email'
                    type='email'
                    value={emailInput}
                    autoComplete='none'
                    onChange={(e) => setEmailInput(e.target.value)}
                    className='input-login'
                    required
                  />
                  <br />
                  <label className='modal-login_label' htmlFor='username'>
                    User:
                  </label>
                  <br />
                  <input
                    name='username'
                    type='text'
                    id='username'
                    minLength='6'
                    onChange={(e) => setUserInput(e.target.value)}
                    className='input-login'
                    required
                  />
                  <br />
                  <label className='modal-login_label' htmlFor='password'>
                    Password:
                  </label>
                  <br />
                  <input
                    name='password'
                    type='password'
                    minLength='6'
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className='input-login'
                    required
                  />
                </div>
                <div className='modal-login_buttons'>
                  <button
                    className='modal_button'
                    type='button'
                    disabled={!(checkEmail() && checkPass() && checkUser())}
                    onClick={handle_submit}
                    className={`entrar-btn ${
                      !(checkEmail() && checkPass()) ? 'disable' : 'enable'
                    }`}
                  >
                    {props.headerText.Header_signUp}
                  </button>

                  <button
                    className='modal_button'
                    type='button'
                    disabled={!(checkEmail() && checkPass() && checkUser())}
                    onClick={handle_sign_in}
                    className={`entrar-btn ${
                      !(checkEmail() && checkPass()) ? 'disable' : 'enable'
                    }`}
                  >
                    {props.headerText.Header_signIn}
                  </button>
                </div>
              </div>
            </section>
          </Modal>
        </div>
      </header>

      <div className={styles.sectionParagraph}>
        <div className={styles.sectionParagraph_FirstDiv}>
          <p>
            {' '}
            {props.headerText.Header_main_title} <br />{' '}
            <span className={styles.sectionParagraph_Span}>
              {' '}
              {props.headerText.Header_main_title_2}{' '}
            </span>{' '}
          </p>
          <p> {props.headerText.Header_main_title_3}</p>
          <Link href='#toDo_Sec'>
            <button className={styles.headerLink_GoToButton}>
              {' '}
              {props.headerText.Header_button_go_to_list}{' '}
            </button>
          </Link>
        </div>

        <figure className={styles.sectionParagraph_SecondDiv}>
          <img
            className={styles.headerImage_BackLogo}
            src={props.headerImages.coopers_back}
            alt='background Logo'
          />
          <img
            className={styles.headerImage_Office}
            src={props.headerImages.office_logo}
            alt='Office'
          />
        </figure>
      </div>
    </div>
  )
}

export default Header
