import styles from './styles.module.scss';
import { MenuSvg } from '../../assets/index';

export const Navbar: React.FunctionComponent = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
      
      </header>
      <MenuSvg/>
      {props.children}
    </div>

  )
}
