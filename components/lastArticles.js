import Link from 'next/link';
import styles from './lastArticles.module.css';

export default function Articles(){
    return <div className={styles.articles}>
        <h3> Son Yazılar </h3>
        <Link href="/"><a className={styles.link}>Lorem ipsum</a></Link>
        <Link href="/"><a className={styles.link}>Lorem ipsum dolor</a></Link>
        <Link href="/"><a className={styles.link}>Lorem ipsum sit amet </a></Link>
    </div>
}