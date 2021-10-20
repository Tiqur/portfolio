import styles from './styles.module.scss';

export const CarouselSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Projects</p>
      <div className={styles.inner_container}>
        <div className={styles.button}/>
        <div className={styles.content} />
        <div className={styles.button}/>
      </div>
      <div className={styles.navigation}>
      </div>
    </div>
  )
} 
