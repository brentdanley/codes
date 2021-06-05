import { format } from 'date-fns'

const Footer = () => {

    return (
        <p>&copy; {format(new Date(), 'yyyy')} Brent Danley</p>
    )
}

export default Footer