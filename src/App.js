import styled from 'styled-components';
import Nav from './components/Nav';
import Main from './components/Main';
import Total from './components/Total';

function App() {
  return (
    <Wrapper>
      <Nav />
      <Main />
      <Total />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export default App;
