import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <ul className={styles.marquee}>
          <div> Logo - powered by coin market cap </div>
          <hr className={styles.vertical_line} />
          <li>coin_1</li>
          <hr className={styles.vertical_line} />
          <li>coin_2</li>
          <hr className={styles.vertical_line} />
          <li>coin_3</li>
          <hr className={styles.vertical_line} />
          <li>coin_4</li>
          <hr className={styles.vertical_line} />
          <li>coin_5</li>
          <hr className={styles.vertical_line} />
          <li>coin_6</li>
          <hr className={styles.vertical_line} />
          <li>coin_7</li>
          <hr className={styles.vertical_line} />
          <li>coin_8</li>
          <hr className={styles.vertical_line} />
        </ul>
      </div>
      <nav className={styles.navigation}>
        <Image
          width={400}
          height={100}
          src="/images/chase_grup_logo.png"
          alt="Chase Logo"
        ></Image>
        <ul className={styles.links_container}>
          <li>
            <Link href="/anasayfa">
              <a>Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/hakkimida">
              <a>Hakkımızda</a>
            </Link>
          </li>
          <li>
            <Link href="/ofislerimiz">
              <a>Ofislerimiz</a>
            </Link>
          </li>
          <li>
            <Link href="/iletisim">
              <a>İletişim</a>
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
