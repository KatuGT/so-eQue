import styled from 'styled-components';

export const NicknameAndTime = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const Nickname = styled.a`
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

export const ButtonComp = styled.button`
    all: unset;
    background-color: var(--main-clr);
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    border-radius: 10px;
    margin-left: auto;
`;
