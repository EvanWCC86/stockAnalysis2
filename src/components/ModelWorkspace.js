import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
const ModelWorkspace = ({toggleWorkspace}) => {
  return (
    <Container>
        <Wrapper>
            <span onClick={toggleWorkspace}>
                <CloseIcon />
            </span>
        
            <Top>
                <div>
                    <h2>Workspace 1</h2>
                    <button>rename</button>
                </div>
                <p>User-save workspace</p>
            </Top>
            <Middle>
                <button>user set ticker</button>
                <button>user set timestamp</button>
                <button>user set timestamp</button>
                <button>user set timestamp</button>
            </Middle>
            <Bottom>
                <p>standard reset templates</p>
                <div>
                    <button>blank workspace</button>
                    <button>quant view - alpha book</button>
                    <button>analyst view - top & rollups</button>
                </div>
            </Bottom>
            <button>save configuration</button>
        </Wrapper>
        
    </Container>
  )
}

export default ModelWorkspace

const Container = styled.div `
    position: absolute;
    z-index: 100;
    background-color: var(--background-color3);
    box-shadow:var(--shadow);
    display: grid;
    place-items: center;
    width:100%;
    max-width: 500px;
    height:400px;
    span{
        position:absolute;
        top:10px;
        right:10px;
        cursor:pointer;
        
        &:hover{
            color:red;
        }
    }
`
const Wrapper = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`
const Top = styled.div ``
const Middle = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Bottom = styled.div `
    text-align: center;

    div{
        display: flex;
        flex-direction: column;

    }
`
