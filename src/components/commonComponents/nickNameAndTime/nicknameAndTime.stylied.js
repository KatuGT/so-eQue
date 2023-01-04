import styled from 'styled-components';

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
