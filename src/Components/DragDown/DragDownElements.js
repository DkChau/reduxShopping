import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const DragContainer = styled.div`
    width:100vw;
    height:100%;
    position:absolute;
    margin:0;
    padding:0;
    overflow-x: hidden;
    top:0;
    background:white;
    z-index:999;

    &.hidden{
        display:none;
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
    width:100%;
    padding-right: 40px;
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
    color:green;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
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

export const CategoryTitle=styled.div`
    text-align: center;
    font-size: 24px;
    padding-right: 20px;
    font-weight: 600;
    color:green;
`

export const ArrowIcon = styled.div`
    display:flex;
    justify-content: end;
    align-items: end;
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