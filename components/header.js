import Image from 'next/image'
import Link from 'next/link'
import PrimaryNavigation from './primary-navigation'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

export default function Header(props) {
    return (
        <header className={styles.header}>
                <PrimaryNavigation />
                <Link href="/">
                    <a>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={props.name}
                    />
                    </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                    <a className={utilStyles.colorInherit}>{props.name}</a>
                    </Link>
                </h2>
        </header>
    )
}