import styled from "styled-components";

export const UserItem = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export const UserInformations = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserPseudo = styled.p`
  color: #424244;
  font-weight: 500;
  padding-right: 15px;
`;

export const UserFollowers = styled.p`
  font-size: 12px;
  color: #898989;
  font-weight: 400;
`;
