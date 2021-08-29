import styled from 'styled-components'

export const Separator = styled.div`
    display: flex;
    align-items: flex-end;

    font-size: 18px;

    padding: 11px;
    color: black;
`

export const PaginationWrap = styled.div`
    width: 100%;
    padding: 30px 0 70px 0;

    position: relative;
    z-index: 100;

    display: flex;
    justify-content: center;
`

export const PaginationButtons = styled.div`
    display: flex;
`

interface PaginationButtonsProps {
    active?: boolean
}

export const PaginationButton = styled.button<PaginationButtonsProps>`
    outline: none;
    border: 0;

    vertical-align: middle;
    font-size: 18px;
    text-decoration: underline;
    color: black;

    background: transparent;

    cursor: pointer;
    padding: 10px;

    ${({ active }) => active && `
        color: blue;
    `}
`

export const PaginationArrow = styled(PaginationButton)`
    padding: 0!important;

    &:hover img {
        filter: brightness(1.5);
    }
`