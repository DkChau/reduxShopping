import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ListContainer = styled.div`
    display:flex;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100vw;
    height:auto;
`

export const ListWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`

export const ListItem=styled.ul`
    display:flex;
    height:auto;
    width:auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`

export const Item=styled(Link)`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin:40px 60px;
    width:250px;
    height:290px;
    padding:0 10px;
    padding-top: 20px;
    border:1px solid black;
    border-radius: 50px;
    text-decoration:none;
    /* transition: width 0.5s, height 0.5s;  */

    /* &:hover{
        width:260px;
        height:300px;
    }  */
`

export const ItemImg=styled.img`
    height:150px;
    /* border:1px solid black;
    padding: 20px;
    border-radius: 50px; */
    width:auto;
`

export const ItemName=styled.h2`
    padding-top: 20px;
    margin:0;
    text-align:center;
    font-size: 16px;
    color:#3d70b2;
`

export const ItemSeries=styled.h3`
    color:black;
    font-weight:300;
    margin:5px;
`

export const ItemRelease = styled.p`
    color:black;
`