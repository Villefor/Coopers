import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

function ToDoList() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [taskDone, setTaskDone] = useState([]);
  const [taskTodo, setTaskTodo] = useState([]);

  const [array, setArray] = useState([]);

  const [task, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");
  const [test, setTest] = useState([]);

  useEffect(() => {
    if (task.length === 0) {
      fetch("https://dario.marbr.net/wp-json/api/task", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          setTasks(json);
          const userActual = localStorage.getItem("user");
          setUser(userActual);
        });
    }
  }, [taskDone, taskTodo]);
  //console.log(user)

  const handleClick = () => {
    //console.log(array);
    //   return (
    //     <div className={styles.todoContainerText} key={index}>
    //       <p><img src='/images/complete.png'/>{taskToDo.titles}</p>
    //       <p>{taskToDo.contents}</p>
    //     </div>
    // )
  };

  const sendToDone = (index) => (event) => {
    setTaskDone([...taskDone, event.target.name]);
    taskTodo.splice(index, 1);
  };

  const createTask = (nome) => () => {
    setTaskTodo([...taskTodo, nome]);
  };

  // tentativa do toDO
  const handleTask = () => {
    const taskInfo = {
      title: title,
      task: content,
    };

    fetch("https://dario.marbr.net/wp-json/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userData")}`,
      },
      body: JSON.stringify(taskInfo),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => setTasks(...task, json));
  };

  const handleDelete = () => {
    setTasks([]);
  };

  let counts = 0;

  return (
    <section className={styles.sectionMain}>
      <main className={styles.main}>
        <div>
          <img
            className={styles.sectionParagraph_scrollIcon}
            src="/images/icon_scroll.png"
            alt="scroll icon"
          />
        </div>
        <div className={styles.sectionMain_Div}>
          <h1 className="section-main__h1">To-do List</h1>
          <p className="section-main__paragraph">
            {" "}
            Drag and drop to set your main priorities, check <br /> when done
            and create what's new.
          </p>
        </div>
      </main>

      <section className={styles.toDo_Section} id="toDo_Sec">
        <div className={styles.picturesLeft}>
          <figure className={styles.toDo_Figures}>
            <img
              className={styles.formImage_Contact}
              src="/images/aside.png"
              alt="aside bar"
            />
          </figure>
        </div>

        <div className={styles.divContainerCards}>
          <div className={styles.toDo_Div}>
            <img
              className={styles.toDo_image}
              src="/images/orange_rec.png"
              alt="Orange Rectangle"
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
                <img src="/images/create_task_item.png" />
              </button>

              <input
                id="toDO_Sec"
                className={styles.toDoInput_title}
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Add new here..."
              />
              {/*  <input
              id="toDO_Sec"
              className={styles.toDoInput}
              type="text"
              onChange={(event) => setContent(event.target.value)}
              placeholder="Daily assigment"
            /> */}
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
              );
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
              src="/images/green_rec.png"
              alt="Green Rectangle"
            />
            <h2>Done</h2>
            <p className={styles.paragraphFirst}>
              Congratulions! <br />{" "}
              <strong>You have done {taskDone.length} tasks</strong>
            </p>
            {/*           {task.length > 0
            ? task.map((posts, index) => {
                const name = `"${posts.author}"`;
                if (name == user) {
                  counts += 1;
                  return (
                    <div className={styles.todoContainerText} key={index}>
                      <h2>
                        <img src="/images/complete.png" />
                        {posts.title}
                      </h2>
                      <p>{posts.content}</p>
                    </div>
                  );
                }
              })
            : null} */}
            {taskDone.map((item, index) => {
              return (
                <div className={styles.todoContainerText} key={index}>
                  <h2>
                    <img src="/images/complete.png" />
                    {item}
                  </h2>
                </div>
              );
            })}
            <button onClick={() => setTaskDone([])}>Erase all</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ToDoList;