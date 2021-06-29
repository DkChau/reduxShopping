import React, {useState} from 'react'
import {BiDownArrow, BiUpArrow} from 'react-icons/bi';
import {ImCross} from 'react-icons/im';
import {
     DragContainer,
    DragWrapper,
    TopRow,
    DragItem,
    DragLink,
    CategoryHeading,
    CategoryWrapper,
    CategoryTitle,
    ArrowIcon,
    CategoryList,
} from './DragDownElements';

const DragDown = (props) => {

    const [categoryDrop , setCategoryDrop] = useState(false);

    const toggleCategory = () =>{
        setCategoryDrop(!categoryDrop)
    }
    return (
        <DragContainer className={props.dragToggle === false ? 'hidden' : 'active'}>
            <DragWrapper>
                <TopRow>
                    <ImCross onClick={props.toggleDrag}></ImCross>
                </TopRow>
                <DragItem>
                    <DragLink>Home</DragLink>
                </DragItem>
                <CategoryWrapper>
                    <CategoryHeading onClick={toggleCategory}>
                        <CategoryTitle>Categories</CategoryTitle>
                        <ArrowIcon>
                            {categoryDrop===false ? <BiDownArrow/> : <BiUpArrow/>}
                        </ArrowIcon>
                    </CategoryHeading>
                    <CategoryList className={categoryDrop===false ? 'hidden' : 'active'}>
                        <DragLink>Test1</DragLink>
                        <DragLink>Test1</DragLink>
                        <DragLink>Test1</DragLink>
                        <DragLink>Test1</DragLink>
                        <DragLink>Test1</DragLink>
                        <DragLink>Test1</DragLink>
                    </CategoryList>
                </CategoryWrapper>
                <DragItem>
                    <DragLink>Cart</DragLink>
                </DragItem>
            </DragWrapper>
        </DragContainer>
    )
}


export default DragDown
