import styled from 'styled-components';

export const CartContainer=styled.div`
    width:100vw;
    height:calc(100vh - 80px);
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
//Row 1
export const CartHeading=styled.div`
    display:grid;
    grid-template-columns: 150px 1fr auto;
    justify-content: center;
    align-content: center;
    width:80%;
    max-width:800px;
    height: 200px;

`
export const CartTagItem=styled.h2`
    color:black;
    text-align:center;
`

export const CartTagPrice=styled.h2`
    color:black;
    grid-column: 3/4;
`
//All other rows
export const CartWrapper = styled.div`
    width:80%;
    max-width:800px;
    height:80%;
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const CartItem = styled.div`
    display:grid;
    grid-template-columns: 150px 1fr auto;
    justify-content: start;
    align-content: start;
    width:100%;
    height: 200px;

`

//First Column
export const ItemImg = styled.img`
    height:150px;
    justify-self: center;
    width:auto;
`

//Last Column
export const ItemPrice = styled.p`
    color:black;
`

//Second Column
export const ItemDescription=styled.div`
    flex-direction: column;
    align-items: start;
    display:flex;
`

export const ItemName=styled.p`
    color:red;
`

export const ItemSeries=styled.p`
    color:black;
`
export const ItemQuantity = styled.input`
    color:green;
`

export const BtnWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    justify-: flex-end;
`

export const DeleteBtn = styled.button`
    height:30px;
    background: none;
    border:none;
    text-decoration:underline;
    width:150px;
`

//Footer
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



