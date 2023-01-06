import styled from 'styled-components';
import checkedIcon from '../../assets/iconsSVG/iconChecked.svg';
import uncheckedIcon from '../../assets/iconsSVG/iconUnchecked.svg';

export const WrapperNewDream = styled.main`
    padding: 5rem 1.5rem;
    margin: 0 auto;
    width: min(100%, 700px);
    color: #fff;
`;

export const FormNewDream = styled.form`
     display: flex;
     flex-direction: column;
     gap: 2rem;
`;

export const LabelCheck = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Check = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

export const CheckText = styled.span``;

export const NewCheckIcon = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    background-image: url(${uncheckedIcon});
    background-size:contain;   
    ${Check}:checked + &&{
        background-image: url(${checkedIcon});
     }
`;

export const TextArea = styled.textarea`
    padding: 0.5rem;
    border-radius: 0.2rem;
    width: 100%;
    height: 10rem;
    color: #fff;
    background-color: rgba( 255 255 255 / .3);
    &&::placeholder{
        color: #fff;
    }
`;

export const MinimunCharacters = styled.p`
    font-size: 13px;
`;

export const TitleFilter = styled.p`
`;

export const Underline = styled.div`
    height: 1px;
    width: 60%;
    background-color: var(--main-clr);
    margin-bottom: 0.2rem;
`;

export const WrapperFilters = styled.div`
`;

export const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

export const FilterInput = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

export const FilterLabel = styled.label`
    background-color: var(--main-dark-clr);
    padding: 0.5rem 1rem;
    border-radius: 25rem;
    &&:has(${FilterInput}:checked){
        background-color: var(--main-clr);
        color: #000;
    }
`;

export const FilterText = styled.span`
`;

export const WrapperImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
