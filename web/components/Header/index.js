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

  const [header_images, setHeaderImages] = React.useState([])

  const [header_content, setHeaderContent] = React.useState([])

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

  useEffect(() => {
    const get_images_api = async () => {
      await fetch('https://dario.marbr.net/wp-json/wp/v2/pages/406', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          const acf = Object.keys(json.acf).map((key, index) => json.acf[key])
          setHeaderImages(acf)
        })
    }
    get_images_api()
  }, [])

  useEffect(() => {
    const get_text_api = async () => {
      await fetch('https://dario.marbr.net/wp-json/wp/v2/pages/51', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          const acf = Object.keys(json.acf).map((key, index) => json.acf[key])
          setHeaderContent(acf)
        })
    }
    get_text_api()
  }, [])

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
        <figure className={styles.sectionHeader_FirstDiv}>
          <img src={header_images[0]} alt='logo' />
        </figure>
        <div className={styles.sectionHeader_SecondDiv}>
          {logout ? (
            <button onClick={handle_logout}> {header_content[1]} </button>
          ) : (
            <button onClick={() => setLogin(true)}>
              {' '}
              {header_content[0]}{' '}
            </button>
          )}
          <Modal show={showLogin} onClose={() => setLogin(false)}>
            <section className='login-container'>
              <div className='section-modal_firstDiv'>
                <figure>
                  <img
                    className='sign_Icon'
                    src={header_images[12]}
                    alt='background'
                  />
                </figure>
                <div className='section-modal_secondDiv'>
                  <h1 className='login-title'>{header_content[2]} </h1>
                  <h4 className='login-text'>{header_content[3]}</h4>
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
                    {header_content[4]}
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
                    {header_content[5]}
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
            {header_content[6]} <br />{' '}
            <span className={styles.sectionParagraph_Span}>
              {' '}
              {header_content[7]}{' '}
            </span>{' '}
          </p>
          <p> {header_content[8]}</p>
          <Link href='#toDo_Sec'>
            <button className={styles.headerLink_GoToButton}>
              {' '}
              {header_content[9]}{' '}
            </button>
          </Link>
        </div>

        <figure className={styles.sectionParagraph_SecondDiv}>
          <img
            className={styles.headerImage_BackLogo}
            src={header_images[1]}
            alt='background Logo'
          />
          <img
            className={styles.headerImage_Office}
            src={header_images[11]}
            alt='Office'
          />
        </figure>
      </div>
    </div>
  )
}

export default Header
