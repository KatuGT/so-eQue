import styled from 'styled-components';

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LikeAndOpen = styled.div`
    display: flex;
    font-size: 2rem;
    gap: .5rem;
`;

export const LikeInput = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

export const Like = styled.label`
    cursor: pointer;

 `;

export const HeartLabel = styled.span`
    color: #ffa7a7;
     ${LikeInput}:checked + &&{
        color: rgb(255 0 0);
    }
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
     &&:after{
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
`;

export const WrapperCard = styled.div`
    width: min(500px, 100%);
    background-color: rgba(0 0 0 /.9);
    padding: 1.2rem;
    color: var(--main-clr);
    border-radius: 0.5rem;
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
export const FooterIcon = styled.div`
    color: var(${(props) => (props.hasComment ? '--main-clr' : '--dark-grey-clr')});
`;
export const FooterIconCount = styled.div`
    height: 1.3rem;
    width: 1.3rem;
    background-color: var(--main-dark-clr);
    border-radius: 100vh;
    position: absolute;
    right: -.5rem;
    bottom: .5rem;
    font-size: 1rem;
    display: ${(props) => (props.hasComment ? 'grid' : 'none')};
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
