import Coin from "./coin_info";
import Deneme from './deneme'
import styles from "./layout.module.css";
import Nav from './nav';
import Bottom from './bottomSection'

export default function Layout({ children }) {
  return (
    // <div>
    //   <div>
    //     <ul className={styles.marquee}>
    //       <div> Logo - powered by coin market cap </div>
    //       <hr className={styles.vertical_line} />
    //       <li>coin_1</li>
    //       <hr className={styles.vertical_line} />
    //       <li>coin_2</li>
    //       <hr className={styles.vertical_line} />
    //       <li>coin_3</li>
    //       <hr className={styles.vertical_line} />
    //       <li>coin_4</li>
    //       <hr className={styles.vertical_line} />
    //       <li>coin_5</li>
    //       <hr className={styles.vertical_line} />
    //       <li>coin_6</li>
    //       <hr className={styles.vertical_line} />
    //       <li>coin_7</li>
    //       <hr className={styles.vertical_line} />
    //       <li>coin_8</li>
    //       <hr className={styles.vertical_line} />
    //     </ul>
    //   </div>
    <>
    <Coin/>
    <Nav />
    {/* <Deneme /> */}
      {children}
      <Bottom/>
    </>
    // </div>
  );
}
