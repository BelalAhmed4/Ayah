# Quran Verse and Tafseer Viewer

This project is a web application built with Next.js that displays a specific Quran verse (Ayat Al-Kursi) and allows users to navigate to a Tafseer (interpretation) page without reloading the browser. The application is designed for a seamless user experience with fast page transitions.

## Features

- **Display Quran Verse:** Shows Ayat Al-Kursi with translation and interpretation.
- **Smooth Navigation:** Uses Next.js for client-side navigation, ensuring the browser doesn't need to reload when moving between pages.
- **Interactive Elements:** Includes icons for navigating between the main verse page and the Tafseer page.

## Technologies Used

- Next.js
- React
- CSS Modules for styling
- LocalStorage API for task management (if applicable)

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/quran-verse-viewer.git
   cd quran-verse-viewer
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **pages/**
  - **index.js:** Main page displaying Ayat Al-Kursi.
  - **tafseer.js:** Tafseer page for interpreting the verse.

- **public/**
  - **quran.png:** Icon for the Quran page.
  - **tafseer.png:** Icon for the Tafseer page.

- **styles/**
  - **page.module.css:** CSS Module for styling components.

## How to Use

1. **Home Page:**
   - Displays Ayat Al-Kursi.
   - Provides navigation icons to move to the Tafseer page.

2. **Tafseer Page:**
   - Displays the Tafseer (interpretation) of Ayat Al-Kursi.
   - Provides a back button to return to the main Ayat Al-Kursi page.

## Example Code

### Home Page (index.js)

```javascript
import Image from "next/image";
import styles from "./page.module.css";
import quran from "./quran.png";
import tafseer from "./tafseer.png";
import Link from "next/link";

function Home() {
  return (
    <main>
      <div className={styles.content_component}>
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
          <Link className={styles["tafseer"]} href="tafseer">
            <Image width={0} height={0} src={tafseer} alt="Tafseer" />
          </Link>
          <Link className={`${styles["home_icon"]} ${styles["selected"]}`} href="">
            <Image width={0} height={0} src={quran} alt="Quran" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
```

### Tafseer Page (tafseer.js)

```javascript
import Image from "next/image";
import styles from "../page.module.css";
import quran from "../quran.png";
import tafseer from "../tafseer.png";
import Link from "next/link";

function Tafseer() {
  return (
    <main>
      <div className={styles.content_component}>
        <h1 className={styles.verseTitle}>عن آية الكرسي</h1>
        <p className={styles.verse}>
          آية الكرسي أعظم آية في كتاب الله تعالى، ففي صحيح مسلم عن أبي بن كعب
          قال: قال رسول الله صلى الله عليه وسلم: يا أبا المنذر أتدري أي آية من
          كتاب الله معك أعظم؟ قال: قلت: الله ورسوله أعلم، قال: يا أبا المنذر
          أتدري أي آية من كتاب الله معك أعظم؟ قال: قلت: الله لا إله إلا هو الحي
          القيوم، قال: فضرب في صدري، وقال: والله ليهنك العلم أبا المنذر.
        </p>
        <div className={styles.move_to}>
          <Link className={`${styles["tafseer"]} ${styles["selected"]}`} href="">
            <Image width={0} height={0} src={tafseer} alt="Tafseer"></Image>
          </Link>
          <Link className={styles["home_icon"]} href="/">
            <Image width={0} height={0} src={quran} alt="Quran" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Tafseer;
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
