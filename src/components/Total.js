import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { ClearBtn } from './Button';

const Total = () => {
  const { clearItems, total } = useGlobalContext();

  return (
    <Wrapper>
      <article>
        <div className="title">
          <h3>total</h3>
        </div>
        <aside>
          <h4>${total}</h4>
        </aside>
      </article>
      <div className="clear-btn">
        <ClearBtn onClick={clearItems}>clear all items</ClearBtn>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  border-top: 2px solid var(--nav);
  max-width: 650px;
  margin: 0 auto 50px;
  padding-top: 20px;
  article {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  h3 {
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--nav);
  }
  h4 {
    font-size: 22px;
    letter-spacing: 1px;
    color: var(--nav);
  }
  .clear-btn {
    text-align: center;
  }
`;

export default Total;
