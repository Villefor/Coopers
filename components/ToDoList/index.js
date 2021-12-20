import React, {useState} from 'react';
import { useDrag } from 'react-dnd'
import styles from './styles.module.scss'

function ToDoList () {

  const [list, setList] = useState({
    count: 0,
    task: [],
  });

  const [assigments, setAssigment] = useState({
    check: false,
    tasks: list,
    count: 0,
  });

const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
  // "type" is required. It is used by the "accept" specification of drop targets.
  type: 'BOX',
  // The collect function utilizes a "monitor" instance (see the Overview for what this is)
  // to pull important pieces of state from the DnD system.
  collect: (monitor) => ({
    isDragging: monitor.isDragging()
  })
}))


const showList = () => {
  const { task } = list
  if (list) {
    return(
      <ul>
      { task.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    )
  }
  return null
}

  function lala () {
    if (list) {
      console.log(list)
    }
  }
  lala()

  return (
      <section className={styles.sectionMain}>

         <main className={styles.main}>
          <div className={styles.sectionMain_Div}>
            <h1 className="section-main__h1">"To-do List"</h1>
            <p className="section-main__paragraph"> Drag and drop to set your main priorities, check when done and create what's new.</p>
          </div>
        </main>

        <section className={styles.toDo_Section}>

            <div className={styles.toDo_Div}>
              <img className ={styles.toDo_image} src ="/images/orange_rec.png" alt ="Orange Rectangle"  />
              <h2>To-do</h2>
              <p>Take a breath. <br/> Start doing.</p>
              <input type ="text" onChange={ (e) => setList({...list, task: e.target.value, count: list.count +1 })  } placeholder="Please, write a daily assigment" />
              <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
                <div role="Handle" ref={drag} />
              </div>
              <button onClick={showList}>Submit Task</button>
              <button >Erase all</button>
            </div>

            <div className={styles.toDoDiv_Done}>
              <img className ={styles.toDo_image} src ="/images/green_rec.png" alt ="Green Rectangle"  />
              <h2>Done</h2>
              <p>Congratulions! <br/> <strong>You have done { assigments.count } tasks</strong></p>
              <button>Erase all</button>
            </div>

        </section>

      </section>
    )
}

export default ToDoList