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
            <EmptyImageWrapper src={EmptyImage}>
            </EmptyImageWrapper>
            <EmptyText>Empty Cart</EmptyText>
        </EmptyContainer>
    )
}

export default EmptyPage
