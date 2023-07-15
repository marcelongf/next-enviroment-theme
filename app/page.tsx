import styles from './page.module.css'

const getInfos = async () => {
  const res = await fetch(`${process.env.API_URL}/api/infos?id=${process.env.ID}`);
  if (!res.ok){
    throw new Error('erro ao contato com servidor');
  }
  return res.json();
}

export default async function Home() {

  const { title } = await getInfos();

  return (
    <main className={styles.main}>
      <h1>{title}</h1>
      <div className={styles.card}>
        <div className={styles.description} >
          <p>teste</p>
        </div>
      </div>      
    </main>
  )
}
