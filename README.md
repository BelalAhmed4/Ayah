# Quran Verse and Tafseer Viewer

This project is a web application built with Next.js that displays Ayat Al-Kursi, a significant verse from the Quran, and provides a Tafseer (interpretation) page. The application offers a seamless user experience with client-side navigation for fast page transitions.

## Features

- **Display Quran Verse:** Shows Ayat Al-Kursi along with its recitation and translation.
- **Smooth Navigation:** Utilizes Next.js for client-side routing, ensuring no page reloads when navigating.
- **Interactive Navigation:** Provides icons for easy navigation between the Quran verse and Tafseer pages.

## Technologies Used

- **Next.js:** React framework for server-rendered or statically-exported React applications.
- **React:** JavaScript library for building user interfaces.
- **CSS Modules:** Scoped CSS to style components.
- **Next.js Image Optimization:** For optimized image loading.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v12.x or later recommended).

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/BelalAhmed4/quran-verse-viewer.git
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
  - **tafseer.js:** Page for interpreting Ayat Al-Kursi.

- **public/**
  - **quran.png:** Icon for the Quran page.
  - **tafseer.png:** Icon for the Tafseer page.

- **styles/**
  - **page.module.css:** CSS Module for styling components.

## How to Use

### Home Page (index.js)

Displays Ayat Al-Kursi with its recitation and translation. Users can navigate to the Tafseer page using the provided icons.

### Tafseer Page (tafseer.js)

Displays the Tafseer (interpretation) of Ayat Al-Kursi. Users can navigate back to the main Ayat Al-Kursi page using the provided icons.

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
