import Link from 'next/link';
import Image from 'next/image';
import styles from './nav.module.css';
export default  function Nav(){
    return <nav className={styles.navigation}>
    <Image
      width={400}
      height={100}
      src="/images/chase_grup_logo.png"
      alt="Chase Logo"
    ></Image>
    <ul className={styles.links_container}>
      <li>
        <Link href="/anasayfa">
          <a className={styles.link} >Anasayfa</a>
        </Link>
      </li>
      <li>
        <Link href="/hakkimida">
          <a className={styles.link} >Hakkımızda</a>
        </Link>
      </li>
      <li>
        <Link href="/ofislerimiz">
          <a className={styles.link} >Ofislerimiz</a>
        </Link>
      </li>
      <li>
        <Link href="/iletisim">
          <a className={styles.link} >İletişim</a>
        </Link>
      </li>
    </ul>
  </nav>
}