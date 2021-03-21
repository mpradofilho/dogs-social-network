import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;

  .activeMobile{
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;

    ::after {
      transform: rotate(-90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  }
  .navMobile {
    display: block;
    position: absolute;
    top: 70px;
    height: 0px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1 2px rgba(0, 0, 0, .2);
    border-radius: .2rem;
    transform: translateX(-10px);
    opacity: 1;
  }
`;

export const UserHeaderNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a, .buttonExit {
    background: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

      :hover {
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      }
    }

  .active {
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;

    svg > * {
      fill: #fb1;
    }
  }


`;

export const Mobile = styled.button`
    background: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    :after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 2px;
      background: currentColor;
      border-radius: 2px;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: .2s;
    }
    :hover,:focus {
      outline: none;
      background: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
    }
  }
`;
