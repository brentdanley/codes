import Link from 'next/link'

export default function PrimaryNavigation() {
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
        <nav>
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