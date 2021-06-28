import styled, {keyframes} from 'styled-components';

const blink = keyframes`
    0%{
        opacity:0;
        transform:scale(0)
    }
    25%{
        opacity:1;
    }
    100%{
        opacity:0;
        transform:scale(1)
    }
`;

const blink2 = keyframes`
    0%{
        opacity:0;
        transform:scale(0)
    }
    50%{
        opacity:1;
    }
    100%{
        opacity:0;
        transform:scale(1)
    }
`;

const blink3 = keyframes`
    0%{
        opacity:0;
        transform:scale(0)
    }
    75%{
        opacity:1;
    }
    100%{
        opacity:0;
        transform:scale(1)
    }
`;

export const LoadingContainer = styled.div`
    height:calc(100vh - 80px);
    width:100vw;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const LoadingWrapper = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const LoadingCircle = styled.div`
    width:40px;
    margin:20px;
    height:40px;
    border-radius:50px;
    background:orange;
    animation: ${blink} 2s infinite;
`

export const LoadingCircle2 = styled.div`
    width:40px;
    margin:20px;
    height:40px;
    border-radius:50px;
    background:orange;
    animation: ${blink2} 2s infinite;
`

export const LoadingCircle3 = styled.div`
    width:40px;
    margin:20px;
    height:40px;
    border-radius:50px;
    background:orange;
    animation: ${blink3} 2s infinite;
`