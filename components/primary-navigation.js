import Link from 'next/link'
import styles from './navigation.module.scss'
import { faFile, fafile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PrimaryNavigation = props => {
    const navItems = [
        {
            label: "Resume",
            title: "Read or download my resume/CV",
            link: '/posts/resume',
            icon: faFile,
        },
        {
            label: "",
            title: "Review my code contributions and respositories on GitHub",
            link: 'https://github.com/brentdanley/',
            icon: faGithub,
        },
        {
            label: "",
            title: "Check out my pens on CodePen",
            link: 'https://codepen.io/brentdanley',
            icon: faCodepen,
        },
        {
            label: "",
            title: "Connect with me on LinkedIn",
            link: 'https://www.linkedin.com/in/brentdanley',
            icon: faLinkedin,
        },
    ]

    return (
        <nav className={`${styles.wrapper} ${props.className}`}>
        {
            navItems.map(item => (
                item.link.indexOf('http') === 0
                    ? <a href={item.link} target="_blank" title={item.title}><FontAwesomeIcon icon={item.icon} /> {item.label}</a>
                    : <Link href={item.link}><a title={item.title}><FontAwesomeIcon icon={item.icon} title={item.label} /> {item.label}</a></Link>
            ))
        }
        </nav>
    )
}

export default PrimaryNavigation