import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const Nav = () => {
  const { amount } = useGlobalContext();

  return (
    <Wrapper>
      <div className="title">
        <h1>cart</h1>
      </div>
      <aside>
        <AiOutlineShoppingCart />
        <div className="amt">
          <span>{amount}</span>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  background: var(--nav);
  height: 80px;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    text-transform: uppercase;
    color: var(--white);
    letter-spacing: 2px;
  }
  aside {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 60px;
    z-index: 10;
    svg {
      color: var(--white);
      font-size: 45px;
    }
    .amt {
      position: relative;
      bottom: 10px;
      right: 10px;
      background: var(--white);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 20px;
        font-weight: 700;
        color: var(--amt);
      }
    }
  }
  @media (max-width: 415px) {
    h1 {
      font-size: 38px;
    }
    aside {
      padding-right: 10px;
    }
    aside svg {
      font-size: 38px;
    }
    aside .amt {
      bottom: 0px;
      right: 0px;
    }
  }
`;

export default Nav;
