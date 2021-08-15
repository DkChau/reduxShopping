import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const DragContainer = styled.div`
    width:100%;
    height:100vh;
    position:fixed;
    margin:0;
    padding:0;
    top:0;
    background:white;
    z-index:999;
    transition: 0.3s ease-in-out;

    &.hidden{
        opacity:0;
        margin-left: -100%;
    }

`

export const DragWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

export const TopRow=styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    height:80px;
    width:calc(100% - 40px);
    padding-right:40px;
    color:black;
    font-size: 24px;
`

export const DragItem = styled.div`
    width:100%;
    height:80px;
    display:flex;
    justify-content: center;
    align-items: center;
    
`

export const DragLink = styled(Link)`
    color:black;
    text-decoration: none;
    margin:8px 0;
    text-decoration: underline;
    font-size: 18px;
    font-weight: 400;

`

export const CategoryWrapper = styled.div`
    display:flex;
    width:100%;
    height:auto;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const CategoryHeading = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:80px;
`

export const HeaderLink = styled(Link)`
    text-align: center;
    font-size: 24px;
    text-decoration:none;
    font-weight: 400;
    color:black;
`

export const CategoryTitle=styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    color:black;
`

export const ArrowIcon = styled.div`
    display:flex;
    width:calc(100vw - 150px);
    justify-content: center;
    padding-left:150px;
    align-items: end;
    position: absolute;
    right:0;
`

export const CategoryList = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width:100%;
    height:auto;

    &.hidden{
        display:none;
    }
`