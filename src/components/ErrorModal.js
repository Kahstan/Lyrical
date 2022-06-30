import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={`${styles.board} ${styles.model}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button
            className="w-50 px-3 mx-1 py-2 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            onClick={props.okayClicked}
          >
            Try again!
          </button>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          title={props.title}
          message={props.message}
          okayClicked={props.okayClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ErrorModal;
