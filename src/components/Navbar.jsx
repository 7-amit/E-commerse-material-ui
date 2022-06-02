import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
       height: 60px;
       background-color : White ;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`; 

const Left = styled.div`
flex: 1;
display: flex;
align-items: centre;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    display: flex
`
const SearchContainer = styled.div`
      border: 0.5px solid lightgray;
      display: flex;
      align-items: centre;
      margin-left: 25px;
      padding: 0.5px;   
`
const Input = styled.input``

const Centre = styled.div`
flex: 1;
text-align: centre;
`
const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: centre;
justify-content: space-between
`  
const MenuItem = styled.div`
font-size: 14px;
`
 
const Navbar = () => {
  return (
    <Container>
      <Wrapper> 
<Left>
  <Language>EN</Language>
  <SearchContainer>
    <Input/> 
    <Search style={{color:"green" , fontsize: 16}}/>
  </SearchContainer>
  </Left>
<Centre><Logo>SAMA</Logo></Centre>
<Right>

<MenuItem>Register</MenuItem>
<MenuItem>Sign in</MenuItem>
<MenuItem>
<Badge badgeContent={2} color="primary">
</Badge>
<ShoppingCartOutlined/>
</MenuItem>
</Right>
      </Wrapper>
    </Container>
  );
};
export default  Navbar;

