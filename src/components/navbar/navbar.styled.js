import styled from 'styled-components';
import checkedIcon from '../../assets/iconsSVG/iconChecked.svg';
import uncheckedIcon from '../../assets/iconsSVG/iconUnchecked.svg';
import leftArrow from '../../assets/iconsSVG/arrowLeftSolid.svg';
import filterIcon from '../../assets/iconsSVG/filterIcon.svg';

export const WrapperHeader = styled.header`
    color: var(--main-clr);
    background-color: var(--purple-clr);
    margin: 0;
    z-index: 10000;
    position: fixed;
    top: 0;
    width: 100%;
`;
export const WrapperNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    @media screen and (min-width: 900px) {
        width: 70%;
        margin: 0 auto ;
    }

    @media screen and (min-width: 1200px) {
        width: 50%;
        margin: 0 auto ;
    }
`;

export const ItemNavbar = styled.div`   
    font-size: 1.5rem;
    font-weight: 700;
`;

export const ItemNavbarIcon = styled.div`   
    font-size: 2rem;
    line-height: 0;
    &&.filterIcon{
        @media screen and (min-width: 900px) {
        display: none;
    }
    }
`;

export const WrapperFiltrList = styled.form`

`;

export const CloseCheckbox = styled.input.attrs({ type: 'checkbox' })`   
    display: none;
`;

export const WrapperFilter = styled.div`   
    background-color: var(${props => (props.shrink ? '--light-grey-clr' : '--transparent-grey-clr')});
    color: #000;
    width: 80%;
    padding-bottom: 1rem;
    translate: ${props => (props.shrink ? '0' : '-100%')};
    transition: .3s translate ease-in;
    z-index: 1000;
    min-height: 100vh;
    transition: all .3s ease-in-out;
    position: fixed;
    left: 0;
    top: 64px;

    &&:hover{
        background-color: var(--light-grey-clr);
    }
    @media screen and (min-width: 900px) {
        translate: ${props => (props.shrink ? '0' : '-80%')};
        width: max-content;
    }
`;

export const HeaderFilter = styled.div`   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem .5rem;
`;

export const TitleFilter = styled.h3`   
    font-size: 1.5rem;
    font-weight: 500;
`;

export const CloseFilter = styled.label` 
    cursor: pointer ;
`;

export const CloseIcon = styled.div`
    display: none;
    @media screen and (min-width: 900px) {
        display: block;
        background-image: url(${filterIcon});
        background-size: contain;
        background-repeat: no-repeat;
        height: 30px;
        width: 30px;
        ${CloseCheckbox}:checked + &&{
            background-image: url(${leftArrow});
        }
    }
`;

export const Divisor = styled.div`   
    height: 1px;
    width: 90%;
    background-color: #000;
    margin: .5rem auto;
`;

export const FiltrList = styled.ul`   
    list-style: none;
    transition: opacity 0.2s ease-in-out;
 @media screen and (min-width: 900px) {
        opacity: ${props => (props.shrink ? '1' : '0')};
    }`;

export const WrapperFilterInput = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 1000;
    @media screen and (min-width: 900px) {
        display: flex;
        gap: 3rem;
    }
`;

export const FilterText = styled.p`
`;

export const CheckInput = styled.input.attrs({ type: 'checkbox' })`   
    display: none;
`;

export const CheckIcon = styled.div`
    background-image: url(${uncheckedIcon});
    background-size: contain;
    height: 20px;
    width: 20px;
    ${CheckInput}:checked + &&{
        background-image: url(${checkedIcon});
    }
`;

export const FiltrItem = styled.li`   
        padding: 0.2rem 1rem;
        &&:has(${CheckInput}:checked) {
            font-weight: bolder;
            background-color: var(--medium-grey-clr);
        }
`;

export const WrapperButton = styled.div`
    display: flex;
    padding: 1rem;
    transition: opacity 0.2s ease-in-out;
    @media screen and (min-width: 900px) {
        opacity: ${props => (props.shrink ? '1' : '0')};
    }
`;
