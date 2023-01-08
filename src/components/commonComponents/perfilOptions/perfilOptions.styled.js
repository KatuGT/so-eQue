import styled from 'styled-components';

export const WrapperOptions = styled.div`
  margin-top: 4rem;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1px;
  && a.navItem {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
    padding: 1rem 0;
    background-color: var(--main-dark-clr);
    display: flex;
    justify-content: center;
    width: ${(props) => props.width};
  }

  && a.navItem.active {
    text-decoration: none;
    background-color: var(--main-clr);
    color: #000;
  }
`;

export const Option = styled.div`
  width: ${(props) => props.width};
`;
