import styled from 'styled-components';

export const WrapperDreamPost = styled.main`
    padding: 5rem 1.5rem;
    margin: 0 auto;
    width: min(100%, 700px);
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

export const WrapperCommentsForm = styled.section`
    display: flex;
    gap: 0.5rem;
 `;

export const UserAvatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 100vh;
    object-fit: cover;
`;

export const MessageForm = styled.form`
    width: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
`;

export const TextArea = styled.textarea`
    padding: 0.5rem;
    border-radius: 0.2rem;
    width: inherit;
    height: 6rem;
    color: #fff;
    background-color: rgba( 255 255 255 / .3);
    &&::placeholder{
        color: #fff;
    }
`;

export const WrapperComments = styled.div`
    color: #fff;
`;

export const CommentsCounts = styled.p`
    font-size: 14px;
`;

export const Divisor = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--main-clr);
    margin: 0.5rem 0;
`;

export const Comment = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const UserAndText = styled.div`
`;

export const TimeAndNickName = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const NickName = styled.p`
    color: var(--main-clr);
    font-weight: 500;
    font-size: 18px;
`;

export const Time = styled.span`
    display: flex;  
    gap: 0.3rem;
    align-items: center;
    font-size: 14px;
    color: var(--light-grey-clr );
    line-height: 0;
`;

export const TextComment = styled.p``;
