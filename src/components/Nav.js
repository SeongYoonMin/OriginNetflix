import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  z-index: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  ${(props) => props.state ? "background-color: black" : "background-color: none"}
`;

const Logoimg = styled.img`
  width: 200px;
  height: 50px;
  position: fixed;
  left: 40px;
  object-fit: contain;
`;

const Userlogo = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 40px;
  object-fit: contain;
`;
export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, []);

  return (
    <Navbar state={show}>
      <Logoimg
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        onClick={() => window.location.reload()}
      />
      <Userlogo
        alt="User Logo Img"
        src="https://i0.wp.com/ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
      />
    </Navbar>
  );
}
