import styles from './login.module.scss'
import TextInput from 'condFormElements/TextInput'
import { Link } from '@cranium/router'

export default function Login() {
  return (
        <form className={styles.login}>

            <h1>Login adsad</h1>
            <TextInput label="name" name="name"/>
            <TextInput label="password" name="password"/>

            <button>Login</button>
            <Link to="sign-up">Sign up</Link>
        </form>
  )
}
