import styled from 'styled-components';

export const CartContainer=styled.div`
    width:100vw;
    height:calc(100vh - 80px);
    display:flex;
    justify-content: center;
    align-items: center;
`

export const CartWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CartItem = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 200px;
`

export const ItemImg = styled.img`
    height:150px;
    width:auto;
`

export const ItemQuantity = styled.input`
    color:green;
`

export const ItemPrice = styled.p`
    color:black;
`

export const BtnWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

export const DeleteBtn = styled.button`
    height:auto;
    padding:10px;
    width:100px;
`

export const CartFooter = styled.div`
    position:absolute;
    bottom: 0;
    left:0;
    width:100vw;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const CartTotal=styled.div`
    color:black;
`