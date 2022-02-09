import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

function ToDoList() {
  const [title, setTitle] = useState('')

  const [load, setLoad] = useState([])

  const [taskDone, setTaskDone] = useState([])

  const [taskTodo, setTaskTodo] = useState([])

  const [post_id, setPostID] = useState([])

  const [user, setUser] = useState(0)

  const [post, setPosts] = useState([])

  useEffect(() => {
    const get_posts = async () => {
      fetch('https://dario.marbr.net/wp-json/api/task', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((json) => {
          console.log(json)
          setPosts(json)
          setTaskDone(json)
        })
    }
    get_posts()
  }, [])

  const sendToDone = (index) => async (event) => {
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
        return response.json()
      })
      .then((json) => {
        setTaskDone([
          ...taskDone,
          {
            id: json.id,
            title: json.post_title,
          },
        ])
      })
      .catch((err) => alert('error' + err))
    taskTodo.splice(index, 1)
  }

  const createTask = (nome) => () => {
    setTaskTodo([...taskTodo, nome])
  }

  const delete_task = async () => {
    taskDone.map(async (item) => {
      return fetch(`https://dario.marbr.net/wp-json/api/task/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userData')}`,
        },
      })
        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((json) => console.log(json))
    })
    setTaskDone([])
  }

  let counts = 0

  return (
    <section className={styles.sectionMain}>
      <main className={styles.main}>
        <div>
          <img
            className={styles.sectionParagraph_scrollIcon}
            src='/images/icon_scroll.png'
            alt='scroll icon'
          />
        </div>
        <div className={styles.sectionMain_Div}>
          <h1 className='section-main__h1'>To-do List</h1>
          <p className='section-main__paragraph'>
            {' '}
            Drag and drop to set your main priorities, check <br /> when done
            and create what's new.
          </p>
        </div>
      </main>

      <section className={styles.toDo_Section} id='toDo_Sec'>
        <div className={styles.picturesLeft}>
          <figure className={styles.toDo_Figures}>
            <img
              className={styles.formImage_Contact}
              src='/images/aside.png'
              alt='aside bar'
            />
          </figure>
        </div>

        <div className={styles.divContainerCards}>
          <div className={styles.toDo_Div}>
            <img
              className={styles.toDo_image}
              src='/images/orange_rec.png'
              alt='Orange Rectangle'
            />
            <h2>To-do</h2>
            <p>
              Take a breath. <br /> Start doing.
            </p>

            <div className={styles.todoMakeContainer}>
              <button
                className={styles.createNewTask}
                onClick={createTask(title)}
              >
                <img src='/images/create_task_item.png' />
              </button>

              <input
                id='toDO_Sec'
                className={styles.toDoInput_title}
                type='text'
                onChange={(event) => setTitle(event.target.value)}
                placeholder='Add new here...'
              />
            </div>

            {taskTodo.map((item, index) => {
              return (
                <div key={index} className={styles.taskTodosContainer}>
                  <button
                    className={styles.buttonSendToDone}
                    onClick={sendToDone(index)}
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
              Erase all
            </button>
          </div>

          <div className={styles.toDoDiv_Done}>
            <img
              className={styles.toDo_image}
              src='/images/green_rec.png'
              alt='Green Rectangle'
            />
            <h2>Done</h2>
            {taskDone.length !== 0 ? (
              <p className={styles.paragraphFirst}>
                Congratulions! <br />{' '}
                <strong>You have done {taskDone.length} tasks</strong>
              </p>
            ) : (
              <p className={styles.paragraphFirst}>
                <strong>Waiting for your tasks </strong>
              </p>
            )}

            {taskDone.length !== 0
              ? taskDone.map((item, index) => {
                  return (
                    <div className={styles.todoContainerText} key={index}>
                      <h2>
                        <img src='/images/complete.png' />
                        {item.title}
                      </h2>
                    </div>
                  )
                })
              : null}
            <button onClick={delete_task}>Erase all</button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ToDoList
