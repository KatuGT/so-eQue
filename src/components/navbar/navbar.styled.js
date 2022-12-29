import styled from 'styled-components';
import checkedIcon from '../../assets/iconsSVG/iconChecked.svg';
import uncheckedIcon from '../../assets/iconsSVG/iconUnchecked.svg';

export const WrapperHeader = styled.header`
    color: var(--main-clr);
`;
export const WrapperNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--purple-clr);

`;

export const ItemNavbar = styled.div`   
    font-size: 1.5rem;
    font-weight: 700;
`;

export const ItemNavbarIcon = styled.div`   
    font-size: 2rem;
    line-height: 0;
`;

export const WrapperFilter = styled.div`   
    background-color: var(--light-grey-clr);
    color: #000;
    width: 80%;
    padding-bottom: 1rem;
    translate: ${props => (props.show ? '0' : '-100%')};
    transition: .3s translate ease-in;
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

export const CloseFilter = styled.span`   
    line-height: 0;
    font-size: 2.5rem;
`;

export const Divisor = styled.div`   
    height: 1px;
    width: 90%;
    background-color: #000;
    margin: .5rem auto;
`;

export const WrapperFiltrList = styled.form`
`;

export const FiltrList = styled.ul`   
    list-style: none;
`;

export const WrapperFilterInput = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
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
`;
