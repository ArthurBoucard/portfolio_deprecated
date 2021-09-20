import styled from "styled-components";
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background:rgba(0,0,0,0.8);
    backdrop-filter: blur(6px);
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.5ren calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #FFFFFF;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;