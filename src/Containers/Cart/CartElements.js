import styled from 'styled-components';

export const CartContainer=styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`

//Last Column
export const ItemPrice = styled.p`
   text-align: center;
`

//Second Column
export const ItemDescription=styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const ItemName=styled.p`
    margin:0;
    padding:0;
`

export const ItemSeries=styled.p`
    
`
export const ItemQuantity = styled.input`
    
`

export const BtnWrapper = styled.div`

`

export const DeleteBtn = styled.button`

`

//Footer
export const CartFooter = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    height:80px;
    border:1px solid black;
    width:100%;
`

export const CartTotal=styled.div`
  
`



