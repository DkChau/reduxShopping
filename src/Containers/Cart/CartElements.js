import styled from 'styled-components';

export const CartContainer=styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`
//Row 1
export const CartWrapper = styled.div`
    display:grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    width:40%;
`
export const CartHeading=styled.div`
    display:grid;
    grid-template-columns: 120px 1fr 150px;
    justify-content: center;
    align-content: center;
    text-align:center;

`
export const CartTagItem=styled.h2`
    margin:0;
    padding:0;
`

export const CartTagPrice=styled.h2`
    grid-column: 3/4;
    margin:0;
    padding:0;
`

export const CartItem = styled.div`
    display:grid;
    grid-template-columns: auto 1fr 150px;
    justify-content: center;
    align-content: center;
    grid-gap: 40px;
    border-top: 1px solid black;
    padding-top: 40px;

    &:last-child{
        margin-bottom: 120px;
    }

`

//First Column
export const ItemImg = styled.img`
    width:125px;
    box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
    border-radius:20px;
    padding:20px;
`

//Last Column
export const ItemPrice = styled.p`
   text-align: center;
   font-size:1.5rem;
   font-weight:300;
`

//Second Column
export const ItemDescription=styled.div`
    display:grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    justify-content: start;
    align-content:start;
    grid-gap: 10px;
`

export const ItemName=styled.p`
    margin:0;
    padding:0;
    font-weight:300;
    font-size:1.5rem;
`
export const ItemQuantity = styled.input`
    justify-self: start;
`

export const BtnWrapper = styled.div`
`

export const DeleteBtn = styled.button`
    border:none;
    background:none;
    text-decoration:underline;
    cursor: pointer;
`

//Footer
export const CartFooter = styled.div`
    position:fixed;
    bottom:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background:White;
    left:0;
    height:80px;
    border:1px solid black;
    width:100%;
`
export const CartTotal=styled.div`
    font-size:1.5rem;
    font-weight:300;
`
export const CartBtnWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding:0 40px;
    font-weight:300;
`
export const CartBtn = styled.button`
    border:1px solid black;
    background:none;
    font-size: 1.5rem;
    font-weight:300;
`



