import styles from './styles.module.scss';

export const Layout: React.FunctionComponent = (props) => {
  return (
    <div className={styles.container}>
      <body className={styles.bodyContainer}>
        {props.children}
      </body>
    </div>
    )
}

