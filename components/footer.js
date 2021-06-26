import { format } from 'date-fns'
import styles from './footer.module.scss'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    const links = [
        {
            label: "brentdanley.com",
            link: 'https://www.brentdanley.com/',
            icon: faHome
        },
        {
            label: "Twitter",
            link: 'https://twitter.com/brentdanley',
            icon: faTwitter
        },
        {
            label: "Instagram",
            link: 'https://www.instagram.com/brentdanley/',
            icon: faInstagram
        },
    ]

    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>&copy; {format(new Date(), 'yyyy')} Brent Danley</p>
            <div className={styles.contactWrapper}>
                <a href="mailto:hireme@brentdanley.codes">hireme@brentdanley.codes</a><br />
                <a href="tel:12074237145">(207) 423-7145</a><br /><br />
                <address>
                    18 Park Street Unit 401<br />
                    Saco, ME 04072
                </address>
            </div>
            <ul className={styles.links}>
                {
                links.map(link => (
                    <li><a href={link.link}><FontAwesomeIcon icon={link?.icon} title={`Link to ${link.label}`} /></a></li>
                ))
                }
            </ul>
        </footer>
    )
}

export default Footer