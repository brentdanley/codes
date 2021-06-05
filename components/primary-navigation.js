import Link from 'next/link'
import styles from './navigation.module.scss'

const PrimaryNavigation = props => {
    const navItems = [
        {
            label: "Home",
            link: '/',
        },
        {
            label: "Resume",
            link: '/posts/resume',
        },
        {
            label: "GitHub",
            link: 'https://github.com/brentdanley/',
        },
        {
            label: "CodePen",
            link: 'https://codepen.io/brentdanley',
        },
    ]

    return (
        <nav className={`${styles.wrapper} ${props.className}`}>
        {
            navItems.map(item => (
                item.link.indexOf('http') === 0
                    ? <a href={item.link} target="_blank">{item.label}</a>
                    : <Link href={item.link}><a>{item.label}</a></Link>
            ))
        }
        </nav>
    )
}

export default PrimaryNavigation