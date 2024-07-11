import styles from "./page.module.css";
import { getAllBooks } from "./lib/actions";
import Page from "./books/page";

export default async function Home() {
  const books = await getAllBooks()  

  return <>
      <main className={styles.main}>
          {
            books.map(book => <Page key={book.id} books = {book}/>)
          }
      </main>
  </>

}
