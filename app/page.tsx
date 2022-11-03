import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/contact">Click here to go to fake scroll page</Link>
    </div>
  )
}
