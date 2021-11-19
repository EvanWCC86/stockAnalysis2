import React,{useState} from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import ModelWorkspace from './ModelWorkspace';
const SubNavbar = () => {
    const [workspaceShow, setWorkspaceShow] = useState(false)
    const toggleWorkspace = () => {
        setWorkspaceShow(!workspaceShow)
    }
  return (
    <SubNavbarSection>
        <Container>
            <button>
                <span>Workspace 1</span>
                <MoreVertIcon />
            </button>
            <button>
                <span>Workspace 1</span>
                <MoreVertIcon />
            </button>
            <MenuIcon onClick={toggleWorkspace} />
        </Container>
        {workspaceShow && <ModelWorkspace toggleWorkspace={toggleWorkspace} />}
    </SubNavbarSection>
  )
}

export default SubNavbar

const SubNavbarSection = styled.div `
    height: 40px;
    background-color: transparent;
`
const Container = styled.div `
    height: 100%;
    display: flex;
    align-items: center;
    width:90%;
    max-width: 1200px;
    margin:auto;
    button{
        background-color: transparent;
        color:white;
        border:none;
        outline:none;
        display: flex;
        align-items: center;
        margin-right:10px;
    }
    svg{
        cursor: pointer;

        &:hover{
            color: blue;
        }
    }
`
