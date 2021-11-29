import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EnhancedEncryptionOutlinedIcon from '@material-ui/icons/EnhancedEncryptionOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import {useGlobalContext} from '../contextapi/context'
import styled from 'styled-components'
const Sidebar2 = () => {
    const { showSidebar, toggleSidebar } = useGlobalContext();
    return (
        <SidebarSection showSidebar={showSidebar}>
          <SidebarContainer>
               <SidebarTop>
                   
                   <h3>Alpha Book</h3>
                   <button>
                    <CloseIcon style={{ color:"red" }} onClick={toggleSidebar} />
                   </button>
               </SidebarTop>
               <SidebarCenter>
               <Item>
                <span>
                    <FavoriteBorderIcon />
                </span>
                <div>
                    <h3>appereance</h3>
                    <p>dark and light mode font size</p>
                </div>
            </Item>
            <Item>
                <span>
                    <AppsOutlinedIcon />
                </span>
                <div>
                    <h3>admin page</h3>
                    
                </div>
            </Item>
            <Item>
                <span>
                    <NotificationsNoneIcon />
                </span>
                <div>
                    <h3>notifications</h3>
                    <p></p>
                </div>
            </Item>
            <Item>
                <span>
                    <EnhancedEncryptionOutlinedIcon />
                </span>
                <div>
                    <h3>security</h3>
                    <p></p>
                </div>
            </Item>
            <Item>
                <span>
                    <InfoOutlinedIcon />
                </span>
                <div>
                    <h3>about us</h3>
                    <p></p>
                </div>
            </Item>
                   
                </SidebarCenter>
                <SidebarFooter>
                    <span><FacebookIcon style={{ color:"#585B89" }} /></span>
                    <span><TwitterIcon style={{ color:"#585B89" }} /></span>
                    <span><LinkedInIcon style={{ color:"#585B89" }} /></span>
                    <span><InstagramIcon style={{ color:"#585B89" }} /></span>
                    
                </SidebarFooter>
           </SidebarContainer>
        </SidebarSection>
    )
}

export default Sidebar2

const SidebarSection = styled.div `
    width:50%;
    max-width:300px;
    height:100vh;
    background-color:var(--background-color2);

    position:fixed;
    top:0;
    left: 0;
    z-index: 10000;
    transform: ${props => props.showSidebar ? "translateX(0)" :"translateX(-100%)"};
    transition: all 0.3s ease-out;
    
`
const SidebarContainer = styled.div `
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* width:90%;
    margin:0 auto; */
   
    
`
const SidebarTop = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
   
    background-color: var(--background-color3);
    
    width:100%;
    padding-left: 10px;
    padding-right: 10px;

    button{
        border:none;
        outline:none;
        background-color: transparent;
        cursor:pointer;
        
        svg{
            color:red;
        }
    }
`
const SidebarCenter = styled.ul `


    li {
        list-style: none;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
    }
    a{
        text-decoration: none;
        margin-left: 10px;
        text-transform: capitalize;
        color:gray;

        &:hover{
            color:#595C89;
            font-weight:bold;
        }
    }
    button{
        background-color:#585B89;
        color:white;
        border:none;
        outline:none;
        margin-left:10px;
        border-radius: 6px;
    }
`
const SidebarFooter = styled.div `
    margin-bottom:20px;
    display:flex;
    justify-content: center;
`

const Item = styled.div `
    display: flex;
    align-items: center;
    padding:20px;
    cursor:pointer;
    svg{
        margin-right:10px;
    }
    &:hover{
        color:blue;
    }
`