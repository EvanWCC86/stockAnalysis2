import React from 'react'
import styled from 'styled-components'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ControlSlider from './ControlSlider'
const ControlPanel = () => {
  return (
    <Container>
        <Header>
            <Left>
                <h3>Control panel</h3>
                <span>stock TD on Oct 14, 2020 at 10.30.21.620</span>
            </Left>
            <button>
                <SystemUpdateAltIcon />
            </button>
        </Header>
        <ControlNarbar>
            <NavbarLeft>
                <button>
                    <ChevronLeftIcon />
                    <span>Previous Event</span>
                </button>
                <button>
                    <span>Next event</span>
                    <ChevronRightIcon />
                </button>
            </NavbarLeft>
            <NavbarRight>
                <button>
                    <ChevronLeftIcon />
                    <span>Previous trade</span>
                </button>
                <button>
                    <span>Next trade</span>
                    <ChevronRightIcon />
                </button>
            </NavbarRight>
        </ControlNarbar>
        <ContentContainer>
            <ContentLeft>
                <Item>
                    <span>open price</span>
                    <span>$68.21</span>
                </Item>
                <Item>
                    <span>prev close</span>
                    <span>$64.21</span>
                </Item>
                <Item>
                    <span>volume</span>
                    <span>70,899,365</span>
                </Item>
            </ContentLeft>
            <ContentRight>
                <ControlSlider />
                <ControlSlider />
            </ContentRight>
        </ContentContainer>
    </Container>
  )
}

export default ControlPanel

const Container = styled.div ``
const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div ``

const ControlNarbar = styled.div `
   padding:20px;
   background-color: var(--background-color3);
   box-shadow: var(--shadow);
   display:grid;
   grid-template-columns: 1fr 1fr;

    button{
        /* display: flex;
        margin-right:10px;
        align-items: center;
        justify-content: space-between;
        padding:5px; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding:8px 20px;
        
       
        border: none;
        outline: none;
        border-radius: 4px;
        background: #833ab4;
        background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4 );
        background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
        color: #fff;
        transition: all 0.3s ease;
        cursor: pointer;
        margin-right: 5px;
        &:hover{
            color: #9518fc;
            transform: scale(1.2);
        }
    }
`
const NavbarLeft = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const NavbarRight = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div `
    margin-top:10px;
    box-shadow:var(--shadow);
    background-color: var(--background-color3);
    display: grid;
    grid-template-columns: 40% 60%;

`
const ContentLeft = styled.div `
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ContentRight = styled.div `
    padding:20px;
`
const Item = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`



