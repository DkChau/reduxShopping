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
    HeaderLink,
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
                    <ImCross onClick={()=>{
                        props.toggleDrag()
                        setCategoryDrop(false)}}></ImCross>
                </TopRow>
                <DragItem>
                    <HeaderLink className='heading' onClick={props.toggleDrag} to='/'>Home</HeaderLink>
                </DragItem>
                <CategoryWrapper>
                    <CategoryHeading onClick={toggleCategory}>
                        <CategoryTitle>Categories</CategoryTitle>
                        <ArrowIcon>
                            {categoryDrop===false ? <BiDownArrow/> : <BiUpArrow/>}
                        </ArrowIcon>
                    </CategoryHeading>
                    <CategoryList onClick={()=>{
                        props.toggleDrag();
                        setCategoryDrop(false);
                    }} className={categoryDrop===false ? 'hidden' : 'active'}>
                        <DragLink to='/shop'>All Items</DragLink>
                        <DragLink to='/category/Super_Mario'>Super Mario </DragLink>
                        <DragLink to='/category/The_Legend_of_Zelda'>The Legend of Zelda</DragLink>
                        <DragLink to='/category/Animal_Crossing'>Animal Crossing</DragLink>
                        <DragLink to='/category/Star_Fox'>Star Fox</DragLink>
                        <DragLink to='/category/Metroid'>Metroid</DragLink>
                        <DragLink to='/category/Splatoon'>Splatoon</DragLink>
                        <DragLink to='/category/Pokemon'>Pokemon</DragLink>
                        <DragLink to='/category/Kirby'>Kirby</DragLink>
                        <DragLink to='/category/Fire_Emblem'>Fire Emblem</DragLink>
                        <DragLink to='/category/Monster_Hunter'>Monster Hunter</DragLink>
                    </CategoryList>
                </CategoryWrapper>
                <DragItem>
                    <HeaderLink className='heading' onClick={props.toggleDrag} to='/cart'>Cart</HeaderLink>
                </DragItem>
            </DragWrapper>
        </DragContainer>
    )
}


export default DragDown
