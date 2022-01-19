import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss'

function ToDoList () {


  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const [task, setTasks] = React.useState([]);
  const [count, setCount] = useState(0)

useEffect(() => {
  if (task.length === 0) {
    fetch('https://dario.marbr.net/wp-json/api/task',  {
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

// const handleClick = () => {
//   setCount(count + 1)
//   setListTodo([...listTodo, taskName])
// }

// tentativa do toDO
const handleTask = () => {

  const taskInfo = {
    "title": title,
    "task": content,
  };

  fetch('https://dario.marbr.net/wp-json/api/task',  {
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
      <section className={styles.sectionMain}>

         <main className={styles.main}>
          <div className={styles.sectionMain_Div}>
            <h1 className="section-main__h1">To-do List</h1>
            <p className="section-main__paragraph"> Drag and drop to set your main priorities, check <br/> when done and create what's new.</p>
          </div>
        </main>

        <section className={styles.toDo_Section}>

          <figure className={ styles.toDo_Figures }>
            <img className ={styles.formImage_Contact} src ="/images/aside.png" alt ="aside bar"  />
          </figure>

            <div className={styles.toDo_Div}>

              <img className ={styles.toDo_image} src ="/images/orange_rec.png" alt ="Orange Rectangle"  />
              <h2>To-do</h2>
              <p>Take a breath. <br/> Start doing.</p>

              <input
                 id="toDO_Sec"
                 className={ styles.toDoInput }
                 type ="text"
                 onChange={ (event) => setTitle(event.target.value) }
                 placeholder="Assigment title"
              />
              <input
                 id="toDO_Sec"
                 className={ styles.toDoInput }
                 type ="text"
                 onChange={ (event) => setContent(event.target.value) }
                 placeholder="Daily assigment"
              />
              <button className={styles.toDO_Buttons} onClick={handleTask}>Submit</button>
              <button className={styles.toDO_Buttons} onClick={ () => setTasks([]) }>Erase all</button>
            </div>

            <div className={styles.toDoDiv_Done}>
              <img className ={styles.toDo_image} src ="/images/green_rec.png" alt ="Green Rectangle"  />
              <h2>Done</h2>
              <p>Congratulions! <br/> <strong>You have done tasks</strong></p>
              {task.length > 0
              ? task.map((posts, index) => {

                  <div key={index}>
                    <h2 key={index}>{posts.title}</h2>
                    <p>{posts.content}</p>
                  </div>
                  console.log(posts)
                })
              : null
              }
              <button onClick={ () => setCount(0) } >Erase all</button>
            </div>
        </section>

      </section>
    )
}

export default ToDoList