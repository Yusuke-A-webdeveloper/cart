import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Title from './Title';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RemoveBtn } from './Button';
import Loading from './Loading';

const Main = () => {
  const { product, loading, removeItem, increaseAmt, decreaseAmt } =
    useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (product.length === 0) {
    return (
      <EmptyCart className="empty-cart">
        <h2>no items in your cart</h2>
      </EmptyCart>
    );
  }

  return (
    <Wrapper>
      <Title />
      {product.map((item) => {
        const { id, title, price, img, amount } = item;
        return (
          <div className="single-item" key={id}>
            <article>
              <div className="img-con">
                <img src={img} alt={title} />
              </div>
              <div className="text">
                <h2>{title}</h2>
                <h4>${price}</h4>
                <RemoveBtn onClick={() => removeItem(id)}>
                  remove item
                </RemoveBtn>
              </div>
            </article>
            <aside>
              <div className="icon up" onClick={() => increaseAmt(id)}>
                <IoIosArrowUp />
              </div>
              <p>{amount}</p>
              <div className="icon down" onClick={() => decreaseAmt(id)}>
                <IoIosArrowDown />
              </div>
            </aside>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  .single-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 650px;
    margin: 0 auto 50px;
    article {
      position: relative;
      display: flex;
      align-items: center;
      .img-con {
        position: relative;
        width: 80px;
        height: 150px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .text {
        margin-left: 50px;
        h2 {
          color: var(--header);
          font-size: 30px;
          text-transform: capitalize;
        }
        h4 {
          color: var(--amt);
        }
      }
    }
    aside {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon {
        cursor: pointer;
      }
      svg {
        position: relative;
        top: 2px;
        font-size: 25px;
      }
      p {
        font-weight: 700;
      }
    }
  }
  @media (max-width: 415px) {
    .single-item {
      padding: 0 20px;
    }
    .single-item article .text {
      margin-left: 25px;
    }
    .single-item article .text h2 {
      font-size: 21px;
    }
    .single-item article .img-con {
      height: 120px;
    }
  }
  @media (max-width: 670px) and (max-height: 415px) {
    .single-item {
      padding: 0 20px;
    }
  }
`;

const EmptyCart = styled.div`
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

export default Main;
