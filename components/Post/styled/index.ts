import styled from 'styled-components'

export const PostWrap = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    font-family: Open-Sans;
`

export const PostTitle = styled.h3`
    font-size: 24px;
    font-weight: 500;

    padding: 5px 0;

    border-bottom: 1px solid black;
`

export const PostHeading = styled.h5`
    font-size: 18px;
    font-weight: 500;

    font-family: "Fritz";
`

export const PostBody = styled.span`
    font-size: 18px;

    margin-bottom: 20px;
`

export const PostComments = styled.ul`
    display: flex;
    flex-direction: column;

    font-family: "Fritz";

    margin-bottom: 20px;
`

export const PostComment = styled.li`
    border-radius: 5%;

    padding: 10px 30px;
    margin: 10px 0;

    box-shadow: 0 0 7px lightgrey;
`
