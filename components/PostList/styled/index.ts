import styled from 'styled-components'

export const PostsList = styled.ul`
    width: 80%;

    display: flex;
    flex-direction: column;
`

export const PostWrap = styled.li`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;

    padding: 30px;
    margin: 20px;

    border-radius: 5px;
    box-shadow: 0 0 10px lightgrey;

    text-align: left;

    &:hover {
        background-color: rgba(220,220,220, 0.9);
    }
`

export const PostHead = styled.div`    
    padding: 5px;

    border-bottom: 1px solid rgb(100,100,100);
`
export const PostTitle = styled.a`
    font-size: 20px;
    font-weight: 500;
`

export const PostBody = styled.span`
    padding: 15px 5px;
`