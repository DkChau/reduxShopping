import React from 'react'
import { 
    LoadingContainer,
    LoadingWrapper,
    LoadingCircle,
    LoadingCircle2,
    LoadingCircle3
} from './LoadingElements'

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingWrapper>
                <LoadingCircle></LoadingCircle>
                <LoadingCircle2></LoadingCircle2>
                <LoadingCircle3></LoadingCircle3>
            </LoadingWrapper>
        </LoadingContainer>
    )
}

export default Loading
