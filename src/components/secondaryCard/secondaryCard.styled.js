import styled from 'styled-components';

export const WrapperSecondaryCard = styled.div`
  color: #fff;
  width: min(100%, 500px);
  margin: 0 auto;
  padding: 1rem;
`;

export const WrapperDate = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`;

export const TextDate = styled.p`
  font-size: 14px;
  color: var(--light-grey-clr);
`;

export const DreamOwner = styled.a`
  font-size: 1.2rem;
  color: var(--main-clr);
  font-weight: 500;
  text-decoration: none;
`;

export const DreamText = styled.p`
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px; /* fallback */
  max-height: 64px; /* fallback */
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const PreviewImageWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Image = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const ActionButtonsGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  color: var(--main-clr);
`;

export const ActionButton = styled.div`
  text-align: right;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  && .icon {
    font-size: 1.5rem;
  }
`;

export const ButtonText = styled.p``;
