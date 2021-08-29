import styled from 'styled-components'

export const NavBar = styled.nav`
    width: 100%;
    
    display: flex;

    position: relative;

    border-bottom: 1px solid black;

    &::after {
        content: "";

        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 10px;

        background: linear-gradient(to top, rgba(51, 51, 51, 0.5), rgba(151, 151, 151, 0.5) 30%, rgba(200, 200, 200, 0.5) 50%, transparent 100%);
    }
`

interface NavLinkProps {
    active?: boolean
}

export const NavLink = styled.a<NavLinkProps>`
    padding: 25px 50px;

    font-size: 18px;

    ${({ active }) => active && `
        color: blue;
        text-decoration: underline;
    `}
`