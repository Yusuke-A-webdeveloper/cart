import styled from 'styled-components';

export const ClearBtn = styled.button`
  display: inline-block;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 30px;
  padding: 8px 15px;
  background: transparent;
  color: var(--nav);
  border: 1px solid var(--nav);
  transition: 0.3s ease-out;
  cursor: pointer;
  &:hover {
    background: var(--nav);
    color: var(--white);
  }
`;

export const RemoveBtn = styled(ClearBtn)`
  padding: 5px 8px;
  margin-top: 20px;
  text-transform: capitalize;
`;
