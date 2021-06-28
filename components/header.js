import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryNavigation from './primary-navigation'
import styles from './header.module.scss'
import { faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons'

const Header = ({ isHome, name, title }) => {
    const [pointer, setPointer] = useState({x: 50, y: 50})

    const handleMouseMove = (e) => {
        setPointer({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    }

    let headerStyle = {
        background: `radial-gradient(at ${pointer.x}px ${pointer.y}px, #557cc4, #21375f)`,
    }

    let styleClass = isHome ? styles.homeHeader : styles.header
    return (
        <header className={styleClass} style={headerStyle} onMouseMove={(event) => handleMouseMove(event)}>
                <PrimaryNavigation className={styles.nav} />
                <Link href="/">
                    <a className={styles.headShot}>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={styles.borderCircle}
                        height={250}
                        width={250}
                        alt={name}
                    />
                    </a>
                </Link>
                <h2 className={styles.title}>{title}</h2>
        </header>
    )
}

export default Header