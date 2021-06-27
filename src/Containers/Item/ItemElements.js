import styled from 'styled-components';

export const ItemContainer=styled.div`
    width:100vw;
    height:calc(100vh - 80px);
    display:flex;
    justify-content: center;
    align-items: center;
`
export const ItemWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content: center;
    align-items: center;
`

export const ItemInfo=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    height:100%;
`

export const ItemImg=styled.img`
    height:300px;
    width:auto;
`

export const ItemDescription=styled.p`
    color:green;
`

export const ItemPrice = styled.p`
    color:red
`

