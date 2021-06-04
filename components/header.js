import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

export default function Header(props) {
    return (
<header className={styles.header}>
    {props.isHome ? (
        <>
        <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={props.name}
        />
        <h1 className={utilStyles.heading2Xl}>{props.name}</h1>
        </>
    ) : (
        <>
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
        </>
    )}
</header>
    )
}