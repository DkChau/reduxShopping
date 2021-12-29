import React from 'react'
import EmptyImage from '../../Images/EmptyImage.png'
import {
    EmptyContainer,
    EmptyImageWrapper,
    EmptyText
} from './EmptyPageElements'

const EmptyPage = () => {
    return (
        <EmptyContainer>
            <EmptyImageWrapper alt='Mr. Resetti from Animal Crossing' src={EmptyImage}>
            </EmptyImageWrapper>
            <EmptyText>Empty Cart</EmptyText>
        </EmptyContainer>
    )
}

export default EmptyPage
