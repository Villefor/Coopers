import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Modal from '../Modal/index'
import styles from './styles.module.scss'

function Header() {
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

  useEffect(() => {
    if (localStorage.length !== 0) {
      setLogOut(true)
    }
  }, [logout])

  const handle_logout = () => {
    localStorage.clear()
    setLogOut(false)
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
        console.log(response)
        return response.json()
      })
      .then((json) => console.log(json), alert('Welcome!'))
      .catch((err) => {
        alert(err.message)
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
        console.log(response)
        return response.json()
      })
      .then((json) => {
        localStorage.setItem('userData', json.token)
        localStorage.setItem('user', JSON.stringify(json.user_email))
        localStorage.setItem('user', JSON.stringify(json.user_nicename))
        setLogOut(true)
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
        console.log(response)
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
        console.log(response)
        return response.json()
      })
      .then(
        (json) => console.log(json),
        alert('You are successfully logged in')
      )
  }

  // função de jwt, validação e sign in
  const handle_sign_in = async () => {
    await get_token()

    await validate_token()

    await get_user()
  }

  return (
    <div className={styles.headerContainer}>
      <header>
        <div className={styles.sectionHeader_FirstDiv}>
          <img src='/images/fill_logo.png' alt='logo' />
        </div>
        <div className={styles.sectionHeader_SecondDiv}>
          {logout ? (
            <button onClick={handle_logout}> LogOut </button>
          ) : (
            <button onClick={() => setLogin(true)}> Sign in </button>
          )}
          <Modal show={showLogin} onClose={() => setLogin(false)}>
            <section className='login-container'>
              <div className='section-modal_firstDiv'>
                <div>
                  <img
                    className='sign_Icon'
                    src='/images/sign_Icon.png'
                    alt='background'
                  />
                </div>
                <div className='section-modal_secondDiv'>
                  <h1 className='login-title'>Sign in </h1>
                  <h4 className='login-text'>to acess your list</h4>
                </div>
              </div>
              <div>
                <div className='modal-login_inputs'>
                  <label className='modal-login_label' htmlfor='email'>
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
                    Cadastrar
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
                    Entrar
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
            Organize <br />{' '}
            <span className={styles.sectionParagraph_Span}>
              {' '}
              your daily jobs{' '}
            </span>{' '}
          </p>
          <p> The only way to get things done</p>
          <Link href='#toDo_Sec'>
            <button className={styles.headerLink_GoToButton}>
              {' '}
              Go to To-do list{' '}
            </button>
          </Link>
        </div>

        <figure className={styles.sectionParagraph_SecondDiv}>
          <img
            className={styles.headerImage_BackLogo}
            src='/images/coopersLogo.png'
            alt='background Logo'
          />
          <img
            className={styles.headerImage_Office}
            src='/images/office.jpg'
            alt='Office'
          />
        </figure>
      </div>
    </div>
  )
}

export default Header
