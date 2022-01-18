import React from 'react';

function Login() {
  const [emailInput, setEmailInput] = React.useState('');

  const [userInput, setUserInput] = React.useState('');

  const [passwordInput, setPasswordInput] = React.useState('');

  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('');

  const [task, setTasks] = React.useState([]);


  const checkEmail = () => (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(emailInput));

  const minLength = 6;

  const userLength = 3

  const checkPass = () => passwordInput.length > minLength;

  const checkUser = () => userInput.length > userLength;

  const body = {
    "username": userInput,
    "email": emailInput,
    "password": passwordInput,
  };

  React.useEffect(() => {
    if (task.length === 0) {
      fetch('http://localhost:10008/wp-json/api/task',  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        }).then(response =>{
            console.log(response);
            return response.json ();
        }).then (json => {setTasks( json )
          // console.log(json)
        });
    }
  }, [task]);

  console.log(task)

  //cadastro
  const handleSubmit = () => {
      fetch('http://localhost:10008/wp-json/api/user',  {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
      }).then(response =>{
          console.log(response);
          return response.json ();
        }).then (json => console.log(json))
  };

  // função bomba, necessita de ordenaçao para as tarefas, função de sign in
  const handleSignIn = () => {
    const userInfo = {
      "username": userInput,
      "password": passwordInput,
      "email": emailInput,
    };

    fetch('http://localhost:10008/wp-json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo)
    }).then(response => {
        console.log(response)
        return response.json()
      }).then (json => {
        localStorage.setItem('userData', json.token);
        localStorage.setItem('user', JSON.stringify(json.user_email));
        localStorage.setItem('user', JSON.stringify(json.user_nicename));
    });


    fetch('http://localhost:10008/wp-json/jwt-auth/v1/token/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Authorization:`Bearer ${localStorage.getItem('userData')}`,
      },
    }).then(response => {
        console.log(response)
        return response.json()
      }).then (json => {
        console.log(json)
    });

    fetch('http://localhost:10008/wp-json/api/user', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization:`Bearer ${localStorage.getItem('userData')}`,
    },
    }).then(response =>{
        console.log(response);
        return response.json ();
    }).then (json => console.log(json))
};

// tentativa do toDO
const handleTask = () => {

  const taskInfo = {
    "title": title,
    "task": content,
  };

  fetch('http://localhost:10008/wp-json/api/task',  {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      Authorization:`Bearer ${localStorage.getItem('userData')}`,
  },
  body: JSON.stringify(taskInfo)
  }).then(response =>{
      console.log(response);
      return response.json ();
  }).then (json =>
    setTasks(...task, json))
};

  return (
    <section className="login-container">
      <h2 className="title">Sign in </h2>
      <h4 className="login-text">to acess your list</h4>
      <div className="buttons">
        <input
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Email"
          value={ emailInput }
          autoComplete="none"
          onChange={ (e) => setEmailInput(e.target.value) }
          className="input-login"
        />
        <br />
        <input
          name="username"
          type="text"
          id="username"
          minLength="6"
          placeholder="Nome de Usuário"
          onChange={ (e) => setUserInput(e.target.value) }
          className="input-login"
        />
        <br />
        <input
          name="password"
          type="password"
          minLength="6"
          placeholder="Senha"
          onChange={ (e) => setPasswordInput(e.target.value) }
          className="input-login"
        />
        <div>
            <button
            type="button"
            disabled={ !(checkEmail() && checkPass() && checkUser()) }
            onClick={ handleSubmit }
            className={ `entrar-btn ${!(checkEmail() && checkPass())
              ? 'disable' : 'enable'}` }
            >
            Cadastrar
            </button>

            <button
            type="button"
            disabled={ !(checkEmail() && checkPass() && checkUser()) }
            onClick={ handleSignIn }
            className={ `entrar-btn ${!(checkEmail() && checkPass())
              ? 'disable' : 'enable'}` }
            >
            Entrar
            </button>
          </div>
      </div>
      <section>
        <div>
         <input
          name="title"
          type="text"
          minLength="2"
          placeholder="Task Title"
          onChange={ (e) => setTitle(e.target.value) }
          className="input-login"
         />
        <textarea
          name="comment"
          type="text"
          id="username"
          minLength="2"
          placeholder="about your assigments"
          onChange={ (e) => setContent(e.target.value) }
          className="input-login" />

        <button onClick={ handleTask }> Submit assigment </button>
      </div>
      <div>
        {/* {task.length > 0
          ? task.map((posts) => {
              <div>
                <h1>{posts.title}</h1>
                <h4>{posts.content}</h4>
              </div>
              })
          : null
        } */}
      </div>

     </section>
    </section>
  );
}

export default Login;
