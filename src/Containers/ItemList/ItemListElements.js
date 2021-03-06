import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ListContainer = styled.div`
    display:flex;
    width:100%;
    height:auto;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`
export const ListHeading = styled.div`
    color:black;
    font-size:2rem;
    padding: 7rem 0 1rem 0;
    margin-bottom: 5rem;
    font-weight:300;
`
export const ListWrapper=styled.div`
    width:80%;
    display:grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows:400px;
    justify-content: center;
    align-content:center;
`

export const ItemImg=styled.img`
    height:210px;
    margin: 0 auto;
    transition: height 0.2s ease-in;
`
export const ItemName=styled.h2`
    padding:0;
    margin:0%;
    font-weight:600;
    font-size:1.2rem;
    
`

export const ItemSeries=styled.h3`
    padding:0;
    margin:0%;
    font-weight:300;
    font-size:1.1rem;
`
export const Item=styled(Link)`
    display:grid;
    height:300px;
    width:100%;
    grid-template-rows: 1fr auto auto;
    grid-template-columns:1fr;
    text-align:center;
    justify-content:center;
    align-content:center;
    flex-direction: column;
    text-decoration:none;
    color:black;

    &:hover{
        ${ItemImg}{
            height:230px;
        }
        ${ItemName}{color:#005bc6;}
        ${ItemSeries}{color:#005bc6}
    }
`