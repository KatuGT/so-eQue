import styled from 'styled-components';

export const UploadImages = styled.div`
    height: 7rem;
    width: 7rem;
    border-radius: 0.5rem;
    border: 1px dotted var(--main-clr);
    background-color: rgba(255 255 255 / .2);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    && .icono{
        font-size: 4rem;
    }
`;

export const TextUploadImage = styled.p`
    text-align: center;
`;
