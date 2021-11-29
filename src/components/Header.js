import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {useGlobalContext} from '../contextapi/context'

// import {AmplifySignOut} from '@aws-amplify/ui-react'
const Header = () => {
    const {toggleTheme,toggleSidebar} = useGlobalContext();
  return (
    <HeaderSection>
        <Container>
            <h3>Alpha Book</h3>
            <Right>
                <ThemeButton  onClick={toggleTheme}>
                    changer theme
                </ThemeButton>
                <div>
                    <input type="text" />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </div>
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
                {/* <AmplifySignOut /> */}
                
            </Right>
        </Container>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.header `
    height: 50px;
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
        color: red;
       cursor: pointer;
       font-size: 1.5rem;
    }
`
const Right = styled.div `
    height:100%;
    display: flex;
    align-items:center;

    div{
        display:flex;
        align-items:center;
        justify-content: space-between;
        border:1px solid white;
        background-color: white;
        color:black;
        border-radius: 10px;
        height: 80%;
        margin-right: 10px;
        
        svg{
            color:black;
        }
        input{
            border:none;
            outline:none;
            padding:5px;
            background-color: transparent;
            
        }
    }
    
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
const ThemeButton = styled.button `
    padding:6px 20px;
    border-radius: 8px;
    border:none;
    outline:none;
    background-color:red;
    color:white;
    text-transform: capitalize;
    margin-right:5px;
    cursor: pointer;
`
