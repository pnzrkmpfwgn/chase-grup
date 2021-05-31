import Image from "next/image";
import styles from "./summarySection.module.css";

export default function Summary() {
  return (
    <div className={styles.summary}>
      <Image src="/images/chase_grup_logo.png" width={200} height={200}></Image>
      <p className={styles.text} id="#hakkında">
        2019 yılında faaliyete geçen işletmemiz ile finans dünyasına adımımızı
        attık. Çağın gerektirdiği finansal işlemlere katılmak, DÖVİZ ve her
        türlü CRYPTO para alım-satım işlemlerinde kişi ve kurumlara Güvenli,
        Hızlı ve Kolay bir şekilde yardımcı olabilmek amacıyla kurulduk.
      </p>
    </div>
  );
}
