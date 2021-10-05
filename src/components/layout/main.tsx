import styles from './styles.module.scss';

export const Layout: React.FunctionComponent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bodyContainer}>
        {props.children}
      </div>
    </div>
    )
}

