import styles from './footer.module.css'
export default function Footer(){
    return <div title="footer" id="footer" className={styles.footer}>
        <small title="Chase Crypto Exchange" > Copyright &copy; {new Date().getFullYear()} Chase Crypto Exchange </small>
    </div>
}