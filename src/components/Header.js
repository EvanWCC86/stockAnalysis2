import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const Header = ({toggleSidebar}) => {
    
  return (
    <HeaderSection>
        <Container>
            <h3>Alpha Book</h3>
            <Right>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton onClick={toggleSidebar} style={{backgroundColor:"red"}}>
                    <Brightness5OutlinedIcon />
                </IconButton>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <NotificationsNoneIcon />
                </IconButton>
                
                <Link to="/profile">
                    <img src="../../images/profilepic.jpg" alt="profile" />
                </Link>
                
                
            </Right>
        </Container>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.header `
    height: 40px;
`
const Container = styled.div `
    height: 100%;
    width:90%;
    max-width: 1200px;
    margin:auto;
    display: flex;
    justify-content:space-between;
    align-items:center;

    h3{
        background-color: #ff8177;
        background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
        background-size: 100%;
        background-clip:text;
        -webkit-background-clip: text;
        /* -moz-background-clip: text; */
        
        
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        
        display: flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        font-size: 1.5rem;
    }
`
const Right = styled.div `
    height:100%;
    display: flex;
    align-items:center;
    
    svg{
        color:white;
    }
    
    img{
        width:35px;
        height:35px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }

   
`
