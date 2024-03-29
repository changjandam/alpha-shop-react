import React from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';

const navLinks = [
  { linkName: '男款', linkHref: '#' },
  { linkName: '女款', linkHref: '#' },
  { linkName: '最新消息', linkHref: '#' },
  { linkName: '聯絡我們', linkHref: '#' },
  { linkName: '客製商品', linkHref: '#' },
];

const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 780px) {
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 300px;
    justify-content: space-between;
  }
`;

const NavbarUl = () => {
  return (
    <Ul>
      {navLinks.map((item) => (
        <NavbarItem
          linkHref={item.linkHref}
          linkName={item.linkName}
          key={item.linkName}
        />
      ))}
    </Ul>
  );
};

export default NavbarUl;
