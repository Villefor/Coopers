import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss'


function Modal ({show, onClose, children}) {

    const [main, setMain] = useState(false)

    useEffect(() => {
        setMain(true);
    }, [])

    const handleClose = (event) => {
        event.preventDefault();
        onClose();
    }

    const  modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>

                    <a href="#" onClick={ handleClose }>
                        <button className="btn">Close</button>
                    </a>

                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    ) : null;

    if (main) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }

    return (
        <div>
            <h1>teste</h1>
        </div>
    )

}


export default Modal