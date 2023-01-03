import styled from 'styled-components';
import Background from '../../assets/background.jpg';

export const HomeWrapper = styled.main`
    background-image: url(${Background});
    background-size: cover;
    background-attachment: fixed ;
    min-height: 100vh;
    position: relative;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;
