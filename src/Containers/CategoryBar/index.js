import React from 'react'
import { 
    CategoryContainer,
    CategoryLink,
    CategoryWrapper,
    CategoryWord,
    CategoryHeading,
} from './CategoryBarElements'

const CategoryBar = () => {
    return (
        <CategoryContainer>
            <CategoryWrapper>
                <CategoryLink to='/category/Super_Mario'>
                    <CategoryWord>Super Mario</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/Metroid'>
                    <CategoryWord>Metroid</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/The_Legend_of_Zelda'>
                    <CategoryWord>Legend of Zelda</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/Animal_Crossing'>
                    <CategoryWord>Animal Crossing</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/Star_Fox'>
                    <CategoryWord>Star Fox</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/Splatoon'>
                    <CategoryWord>Splatoon</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/Pokemon'>
                    <CategoryWord>Pokemon</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/Kirby'>
                    <CategoryWord>Kirby</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/Fire_Emblem'>
                    <CategoryWord>Fire Emblem</CategoryWord>
                </CategoryLink>
                <CategoryLink to='/category/Monster_Hunter'>
                    <CategoryWord>Monster Hunter</CategoryWord>
                </CategoryLink>
            </CategoryWrapper>
        </CategoryContainer>
    )
}

export default CategoryBar
