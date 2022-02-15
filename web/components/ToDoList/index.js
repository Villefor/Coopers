import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ToDoList(props) {
  const [title, setTitle] = useState('')

  const [task_done, setTaskDone] = useState([])

  const [task_todo, setTaskTodo] = useState([])

  const [post, setPosts] = useState([])

  const [logged, setLogged] = useState(false)

  const notify_success = () =>
    toast.success('Congratulations, you have done it!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const notify_error = (err) =>
    toast.error(
      `Something went wrong,
      please, try to sign in again or contact the technical support`,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    )

  useEffect(() => {
    if (localStorage.length !== 0) {
      setLogged(true)
    }
  }, [])

  useEffect(() => {
    const get_posts = async () => {
      fetch('https://dario.marbr.net/wp-json/api/task', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          setPosts(json)
          setTaskDone(json)
        })
    }
    get_posts()
  }, [])

  const send_to_done = (index) => async (event) => {
    const taskInfo = {
      title: title,
    }

    fetch('https://dario.marbr.net/wp-json/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userData')}`,
      },
      body: JSON.stringify(taskInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(notify_error('error'))
        }
        return response.json()
      })
      .then((json) => {
        setTaskDone([
          ...task_done,
          {
            id: json.id,
            title: json.post_title,
          },
        ])
        notify_success('success')
      })
      .catch((error) => {
        return Promise.reject()
      })
    task_todo.splice(index, 1)
  }

  const create_task = (nome) => () => {
    setTaskTodo([...task_todo, nome])
  }

  const delete_task = async () => {
    task_done.map(async (item) => {
      return fetch(`https://dario.marbr.net/wp-json/api/task/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userData')}`,
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => console.log(json))
    })
    setTaskDone([])
  }

  const delete_single_task = async (id) => {
    fetch(`https://dario.marbr.net/wp-json/api/task/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userData')}`,
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => console.log(json))

    const remove_task = task_done.filter((task) => {
      return task.id !== id
    })

    setTaskDone(remove_task)
  }

  return (
    <section className={styles.sectionMain}>
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
      <article className={styles.main}>
        <figure>
          <img
            className={styles.sectionParagraph_scrollIcon}
            src={props.ToDoImages.scroll_icon}
            alt='scroll icon'
          />
        </figure>
        <div className={styles.sectionMain_Div}>
          <h1 className='section-main__h1'>{props.ToDoText.task_list_title}</h1>
          <p className='section-main__paragraph'>
            {' '}
            {props.ToDoText.task_list_title_2} <br />{' '}
            {props.ToDoText.task_list_title_3}
          </p>
        </div>
      </article>

      <section className={styles.toDo_Section} id='toDo_Sec'>
        <div className={styles.picturesLeft}>
          <figure className={styles.toDo_Figures}>
            <img
              className={styles.formImage_Contact}
              src={props.ToDoImages.aside_logo_icon}
              alt='aside bar'
            />
          </figure>
        </div>
        {logged && (
          <div className={styles.divContainerCards}>
            <div className={styles.toDo_Div}>
              <img
                className={styles.toDo_image}
                src={props.ToDoImages.list_orange_rectangle}
                alt='Orange Rectangle'
              />
              <h2>{props.ToDoText.task_to_do}</h2>
              <p>
                {props.ToDoText.task_to_do_2} <br />{' '}
                {props.ToDoText.task_to_do_3}
              </p>

              <div className={styles.todoMakeContainer}>
                <button
                  className={styles.createNewTask}
                  onClick={create_task(title)}
                  disabled={!title}
                >
                  <img src={props.ToDoImages.create_task_icon} />
                </button>

                <input
                  id='toDO_Sec'
                  className={styles.toDoInput_title}
                  type='text'
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder='Add new here...'
                  required
                />
              </div>

              {task_todo.map((item, index) => {
                return (
                  <div key={index} className={styles.taskTodosContainer}>
                    <button
                      className={styles.buttonSendToDone}
                      onClick={send_to_done(index)}
                      name={item}
                    />
                    <p>{item}</p>
                  </div>
                )
              })}

              <button
                className={styles.toDO_Buttons}
                onClick={() => setTaskTodo([])}
              >
                {props.ToDoText.task_button_erase}
              </button>
            </div>

            <div className={styles.toDoDiv_Done}>
              <img
                className={styles.toDo_image}
                src={props.ToDoImages.orange_rectangle}
                alt='Green Rectangle'
              />
              <h2>{props.ToDoText.task_done}</h2>

              {task_done.length !== 0 ? (
                <p className={styles.paragraphFirst}>
                  {props.ToDoText.task_done_congratulations} <br />{' '}
                  <strong>
                    {props.ToDoText.task_done_length} {task_done.length}{' '}
                    {props.ToDoText.task_done_length_2}
                  </strong>
                </p>
              ) : (
                <p className={styles.paragraphFirst}>
                  <strong>{props.ToDoText.task_done_waiting_task} </strong>
                </p>
              )}

              {task_done.length !== 0
                ? task_done.map((item, index) => {
                    return (
                      <div className={styles.todoContainerText} key={index}>
                        <img src={props.ToDoImages.complete_task_icon} />
                        <h2>{item.title}</h2>

                        <button
                          className={styles.todo_button_deleteTask}
                          key={index}
                          onClick={() => delete_single_task(item.id)}
                        >
                          delete
                        </button>
                      </div>
                    )
                  })
                : null}
              <button
                className={styles.todo_button_eraseAll}
                onClick={delete_task}
              >
                {props.ToDoText.task_button_erase}
              </button>
            </div>
          </div>
        )}
        {!logged && (
          <div className={styles.divContainerCards}>
            <div className={styles.toDo_Div_logout}>
              <img
                className={styles.toDo_image}
                src={props.ToDoImages.list_orange_rectangle}
                alt='Orange Rectangle'
              />
              <h2>{props.ToDoText.task_logged_1}</h2>
              <p>
                {props.ToDoText.task_logged_2} <br /> <br />
                {props.ToDoText.task_logged_3}
              </p>

              <Link href='#header_login_anchor'>
                <button className={styles.ToDo_Link_ToSignIn}>
                  {' '}
                  {props.ToDoText.task_logged_button}{' '}
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </section>
  )
}

export default ToDoList
