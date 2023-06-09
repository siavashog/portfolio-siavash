import Image from "next/image";
import styles from "../styles/Navbar.module.css";

import Telephone from '../img/telephone.png'
import Logo from '../img/logo.png'
import Cart from '../img/cart.png'
import Link from "next/link";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={Telephone} alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/'>

          <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={Logo} alt="" width={160} height={69} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href='/cart'>

          <Image src={Cart} alt="" width={30} height={30} />
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
