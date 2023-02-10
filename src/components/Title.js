import styled from 'styled-components';

const Title = () => {
  return (
    <Wrapper>
      <h2>your cart</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  padding: 50px;
  h2 {
    font-size: 30px;
    text-transform: uppercase;
    color: var(--nav);
    letter-spacing: 2px;
  }
`;

export default Title;
