import Image from "next/image";
import styles from ".//page.module.css";
// Import pages icons
import quran from ".//quran.png";
import tafseer from ".//tafseer.png";
import Link from "next/link";
function Home() {
  return (
    <main>
      <div className={styles.content}>
        <h1 className={styles.verseTitle}>آية الكرسي</h1>
        <h3 className={styles.theRefuge}>أعوذ بالله من الشيطان الرجيم</h3>
        <p className={styles.verse}>
          &quot; اللَّهُ لا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لا
          تَأْخُذُهُ سِنَةٌ وَلا نَوْمٌ لَهُ مَا فِي السَّمَوَاتِ وَمَا فِي
          الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ
          مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلا يُحِيطُونَ بِشَيْءٍ مِنْ
          عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ
          وَلا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ &quot;
        </p>
        <div className={styles.move_to}>
          <Link
            className={`
          ${styles["tafseer"]}
          
           `}
            href="tafseer">
            <Image width={0} height={0} src={tafseer} alt="Tafseer"></Image>
          </Link>
          <Link
            className={`
          ${styles["home_icon"]} 
           ${styles["selected"]}
           `}
            href="">
            <Image width={0} height={0} src={quran} alt="Quran" />
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Home;
