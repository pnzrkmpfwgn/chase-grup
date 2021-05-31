import Summary from "./summarySection";
import Articles from "./lastArticles";
import Contact from "./contactSection";
import Footer from './footer';
import styles from "./bottomSection.module.css";

export default function Bottom() {
  return (
    <footer className={styles.container}>
      <Summary/>
      <Articles/>
      <Contact/>
      <Footer />
    </footer>
  );
}
