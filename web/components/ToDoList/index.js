import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

function ToDoList() {
  const [title, setTitle] = useState('')

  const [task_done, setTaskDone] = useState([])

  const [task_todo, setTaskTodo] = useState([])

  const [post, setPosts] = useState([])

  const [list_images, setListImages] = useState([])

  const [task_list_text, setTaskText] = useState([])

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
          setListImages(acf)
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
          setTaskText(acf)
        })
    }
    get_text_api()
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
      })
      .catch((err) => alert('error' + err))
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

  return (
    <section className={styles.sectionMain}>
      <article className={styles.main}>
        <figure>
          <img
            className={styles.sectionParagraph_scrollIcon}
            src={list_images[13]}
            alt='scroll icon'
          />
        </figure>
        <div className={styles.sectionMain_Div}>
          <h1 className='section-main__h1'>{task_list_text[10]}</h1>
          <p className='section-main__paragraph'>
            {' '}
            {task_list_text[11]} <br /> {task_list_text[12]}
          </p>
        </div>
      </article>

      <section className={styles.toDo_Section} id='toDo_Sec'>
        <div className={styles.picturesLeft}>
          <figure className={styles.toDo_Figures}>
            <img
              className={styles.formImage_Contact}
              src={list_images[13]}
              alt='aside bar'
            />
          </figure>
        </div>

        <div className={styles.divContainerCards}>
          <div className={styles.toDo_Div}>
            <img
              className={styles.toDo_image}
              src={list_images[4]}
              alt='Orange Rectangle'
            />
            <h2>{task_list_text[13]}</h2>
            <p>
              {task_list_text[14]} <br /> {task_list_text[15]}
            </p>

            <div className={styles.todoMakeContainer}>
              <button
                className={styles.createNewTask}
                onClick={create_task(title)}
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
              {task_list_text[16]}
            </button>
          </div>

          <div className={styles.toDoDiv_Done}>
            <img
              className={styles.toDo_image}
              src={list_images[5]}
              alt='Green Rectangle'
            />
            <h2>{task_list_text[17]}</h2>
            {task_done.length !== 0 ? (
              <p className={styles.paragraphFirst}>
                {task_list_text[18]} <br />{' '}
                <strong>
                  {task_list_text[19]} {task_done.length} {task_list_text[20]}
                </strong>
              </p>
            ) : (
              <p className={styles.paragraphFirst}>
                <strong>{task_list_text[21]} </strong>
              </p>
            )}

            {task_done.length !== 0
              ? task_done.map((item, index) => {
                  return (
                    <div className={styles.todoContainerText} key={index}>
                      <h2>
                        <img src={list_images[9]} />
                        {item.title}
                      </h2>
                    </div>
                  )
                })
              : null}
            <button onClick={delete_task}>{task_list_text[22]}</button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ToDoList
