import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavBar, NavLink } from './styled'

const links = [
    { href: '/', text: 'Home page' }, 
    { href: '/posts', text: 'All posts' },
    { href: '/posts/new', text: 'Create post' }
]

const Navbar: React.FC = () => {
    const router = useRouter()

    return (
        <NavBar>
            {links.map(link => (
                <Link key={link.href} href={link.href} passHref>
                    <NavLink active={router.pathname === link.href}>{link.text}</NavLink>
                </Link>
            ))}
        </NavBar>
    )
}

export default Navbar