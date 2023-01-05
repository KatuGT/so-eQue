import styled from 'styled-components';

export const WrapperDreamPost = styled.main`
    padding: 5rem 1.5rem;
`;

export const WrapperPost = styled.div`
    color: var(--main-clr);
`;

export const HeaderPost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DreamText = styled.p`
    color: var(--light-grey-clr);
    padding: 1rem 0;
    font-size: 14px;
`;

export const WrapperImages = styled.div`
`;

export const GroupImages = styled.div`
    margin-bottom: 3rem;
`;

export const TitleSection = styled.p`
    color: #fff;
    font-weight: 500;
    margin-bottom: .5rem;
`;

export const WrapperPreview = styled.div`
    display: flex;
    gap: .5rem;
`;

export const Images = styled.img`
    height: 7rem;
    width: 7rem;
    border-radius: 0.5rem;
    object-fit: cover;
    cursor: pointer;

`;

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
