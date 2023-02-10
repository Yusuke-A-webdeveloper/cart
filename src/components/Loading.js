import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <h2>loading...</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-transform: capitalize;
    font-size: 50px;
    color: var(--nav);
  }
`;

export default Loading;
