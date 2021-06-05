import { format } from 'date-fns'
import styles from './footer.module.scss'

const Footer = () => {

    const links = [
        {
            label: "brentdanley.com",
            link: 'https://www.brentdanley.com/'
        },
        {
            label: "Twitter",
            link: 'https://twitter.com/brentdanley'
        },
        {
            label: "Instagram",
            link: 'https://www.instagram.com/brentdanley/'
        },
    ]

    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>&copy; {format(new Date(), 'yyyy')} Brent Danley</p>
            <ul className={styles.links}>
                {
                links.map(link => (
                    <li><a href={link.link}>{link.label}</a></li>
                ))
                }
            </ul>
        </footer>
    )
}

export default Footer