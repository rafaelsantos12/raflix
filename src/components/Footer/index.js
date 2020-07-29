import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo Alura" />
      </a>
    </FooterBase>
  );
}

export default Footer;
