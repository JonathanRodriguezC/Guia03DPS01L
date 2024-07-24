import React, { useState } from "react";
import styles from "../app/page.module.css"

const Todo = ({ todo, index, deleteTodo }) => {
    return (
        <>
            <div className={styles.list} key={index}>
                <h2 className="Titulo3">nombre:  </h2><h3>{todo.nombre}</h3>
                <h2 className="Titulo3">, marca:   </h2><h3>{todo.marca}</h3>
                <h2 className="Titulo3">, cantidad:   </h2><h3>{todo.cantidad}</h3>
                <h2 className="Titulo3">, precio:   </h2><h3>{todo.precio}</h3>


                <button className={styles.btn_delete} onClick={() => deleteTodo(index)}>X</button>
            </div>
        </>
    )
}
export default Todo