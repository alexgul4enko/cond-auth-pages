import styles from './sign-up.module.scss'
import { Link } from '@cranium/router'
export default function SignUp() {
  return (
        <form className={styles.login}>
            <h1>SignUp </h1>
            <label>name@asd</label>
            <input name="name"/>
            <label>password</label>
            <input name="password"/>
            <button>Sign Up</button>
            <Link to="login">Sign in</Link>
        </form>
  )
}
