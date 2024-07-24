import styles from "./page.module.css";
import Form from "@/componets/Form";
export default function home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>

          <Form></Form>
        </div>
      </div>

    </main>
  )
}