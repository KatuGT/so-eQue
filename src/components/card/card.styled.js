import styled from 'styled-components';

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UserWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const UserProfilePic = styled.figure`
    height: 4rem;
    width: 4rem;
    overflow: hidden;
    border-radius: 100vh;
`;

export const ProfilePic = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`;

export const NicknameAndTime = styled.div`
`;

export const Nickname = styled.a`
    margin-bottom: .3rem;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
`;

export const Time = styled.h4`
    display: flex;
    align-items: center;
    gap: .2rem;
    color: var(--medium-grey-clr);
    line-height: 0;
    font-weight: normal;
    font-size: .8rem;
`;

export const LikeAndOpen = styled.div`
    display: flex;
    font-size: 2rem;
    gap: .5rem;
`;

export const Like = styled.div`
    cursor: pointer;
`;

export const Open = styled.a`
    color: var(--main-clr);
`;

export const TextContainer = styled.div`
    color: var(--light-grey-clr);
    position: relative;
    height: 5rem;
    overflow: hidden;
    transition: all .5s ease-in-out;
     &&:not(.longText):after{
        content: '';
        height: 100%;
        width: 100%;
        background:linear-gradient(180deg, rgba(2,0,36,0) 50%, rgba(0,0,0,1) 100%);
        top: 0;
        left: 0;
        position: absolute;
        transition: opacity .5s ease;
    }
`;
export const Text = styled.p`
`;

export const CheckboxVerMas = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

export const CardText = styled.div`
    margin: 1rem 0;
    /* &&:has(${CheckboxVerMas}:checked) > ${TextContainer}{
        height: ${(props) => `${props.dreamLenght}px`};
    }
    &&:has(${CheckboxVerMas}:checked) > ${TextContainer}:after{
        opacity: 0;
    } */
`;

export const WrapperCard = styled.div`
    width: min(100%, 500px);
    margin-left: 10rem;
    background-color: black;
    padding: 1rem;
    color: var(--main-clr);
    &&:has(${CheckboxVerMas}:checked) ${TextContainer}{
        height: ${(props) => `${props.dreamLenght}px`};
    }
    &&:has(${CheckboxVerMas}:checked) ${TextContainer}:after{
        opacity: 0;
    }
`;

export const VerMas = styled.label`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;;
`;

export const VerMarText = styled.p``;

export const VerMasIcon = styled.div``;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FooterComentsAndImage = styled.div`
    position: relative;
    height: -1rem;
    display: flex;
    gap: 1rem;
`;

export const IconsContainer = styled.div`
    font-size: 2.5rem;
    position: relative;
`;
export const FooterIcon = styled.div``;
export const FooterIconCount = styled.div`
    height: 1.3rem;
    width: 1.3rem;
    background-color: var(--main-dark-clr);
    border-radius: 100vh;
    position: absolute;
    right: -.5rem;
    bottom: .5rem;
    font-size: 1rem;
    display: grid;
    place-items: center;
    color: #fff;
    line-height: 0;
`;

export const RedesContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const RedesLink = styled.a`
`;
export const RedesIcon = styled.img`
    height: 2.2rem;
    width: 2.2rem;
`;
