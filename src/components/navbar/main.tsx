import styles from './styles.module.scss';

export const Navbar: React.FunctionComponent = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
      
      </header>
      {props.children}
    </div>

  )
}
