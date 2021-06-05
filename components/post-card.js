import Link from 'next/link'
import Date from './date'

import styles from './post-card.module.scss'

const PostCard = ({ id, title, date, excerpt }) => {
    return (
    <div key={id} className={styles.postCard}>
      <Link href={`/posts/${id}`}>
        <a className={styles.title}>{title}</a>
      </Link>
      <span className={styles.date}><Date dateString={date} /></span>
      <hr />
      <div className={styles.excerpt}>{excerpt}</div>
    </div>
)
    }

export default PostCard