"use client"
import React, { useState } from "react";
import Todo from "./Todo";
import styles from "../app/page.module.css"

const Form = () => {
    const [producto, setProducto] = useState({})
    const [lista, setlista] = useState([
        { nombre: "soda", marca: "cocacola", cantidad: 5, precio: 100 },


    ])
    const handleChange = e => setProducto({ ...producto, [e.target.name]: e.target.value })
    const handleClick = (e) => {
        if (Object.keys(producto).length === 0 || producto.nombre === "" || producto.marca === "" || producto.cantidad === "" || producto.precio === "") {
            alert('El campo no puede estar vacio')
            return
        }
        console.log(producto)
        setlista([...lista, producto])
    }
    const deleteTodo = indice => {
        const newTodos = [...lista]
        newTodos.splice(indice, 1)
        setlista(newTodos)
    }


    return (
        <>
            <h1>Lista de Productos</h1>
            <form onSubmit={e => e.preventDefault()}>

                <div>
                    <label>Nombre de el producto</label>
                    <input type="text" name="nombre" placeholder="Ingrese el nombre del producto" onChange={handleChange} className={styles.form_input} />
                </div>
                <div>
                    <label>Nombre de la marca</label>
                    <input type="text" name="marca" placeholder="Ingrese el nombre de la marca" onChange={handleChange} className={styles.form_input} />
                </div>
                <div>
                    <label>Nombre de la cantidad</label>
                    <input type="number" name="cantidad" placeholder="Ingrese la cantidad" onChange={handleChange} className={styles.form_input} />
                </div>
                <div>
                    <label>Nombre de el Precio</label>
                    <input type="number" name="precio" placeholder="Ingrese el precio" onChange={handleChange} className={styles.form_input} />
                </div>
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>
            <div className={styles.lista}>
                <h1>Tu lista:</h1>
                {
                    lista.map((value, index) => (
                        <Todo todo={value} key={index} index={index} deleteTodo={deleteTodo} />
                    ))
                }
            </div>
        </>
    )
}
export default Form

