import styled from 'styled-components';
import { ButtonComp } from '../../components/commonComponents/button/button.styled';

export const WrapperPerfil = styled.div`
    color: #fff;
    margin: 1rem auto;
    padding: 1rem;
    width: min(100%, 700px);
`;

export const ImgAndData = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
`;

export const ImgUser = styled.img`
    height: 7rem;
    width: 7rem;
    border-radius: 100vh;
    object-fit: cover;
`;

export const DataUser = styled.div``;

export const UserName = styled.h3`
    font-size: 1.5rem;
`;

export const OtherData = styled.p``;

export const GroupButtons = styled.div`
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const CenteredButton = styled(ButtonComp)`
    margin-left: initial;
    background-color: ${props => props.danger && '#ff0000'};
    color: ${props => props.danger && '#fff'};
`;
