import Image from "next/image";
import styles from "../page.module.css";
// Import pages icons
import quran from "..//quran.png";
import tafseer from "..//tafseer.png";
import Link from "next/link";
function Home() {
  return (
    <main>
      <div className={styles.content}>
        <h1 className={styles.verseTitle}>عن آية الكرسي </h1>
        <p className={styles.verse}>
          آية الكرسي أعظم آية في كتاب الله تعالى، ففي صحيح مسلم عن أبي بن كعب
          قال: قال رسول الله صلى الله عليه وسلم: يا أبا المنذر أتدري أي آية من
          كتاب الله معك أعظم؟ قال: قلت: الله ورسوله أعلم، قال: يا أبا المنذر
          أتدري أي آية من كتاب الله معك أعظم؟ قال: قلت: الله لا إله إلا هو الحي
          القيوم، قال: فضرب في صدري، وقال: والله ليهنك العلم أبا المنذر.
        </p>
        <div className={styles.move_to}>
          <Link
            className={`
          ${styles["tafseer"]}
           ${styles["selected"]}
           `}
            href="">
            <Image width={0} height={0} src={tafseer} alt="Tafseer"></Image>
          </Link>
          <Link
            className={`
          ${styles["home_icon"]}
           `}
            href="/">
            <Image width={0} height={0} src={quran} alt="Quran" />
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Home;
