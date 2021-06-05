import Image from 'next/image'
import Link from 'next/link'
import PrimaryNavigation from './primary-navigation'
import styles from './header.module.scss'

const Header = props => {
    return (
        <header className={styles.header}>
                <PrimaryNavigation className={styles.nav} />
                <Link href="/">
                    <a>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={styles.borderCircle}
                        height={108}
                        width={108}
                        alt={props.name}
                    />
                    </a>
                </Link>
                <h2 className={styles.title}>{props.title}</h2>
        </header>
    )
}

export default Header