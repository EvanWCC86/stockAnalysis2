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
            <Button>save configuration</Button>
        </Wrapper>
        
    </Container>
  )
}

export default ModelWorkspace

const Container = styled.div `
    position: absolute;
    z-index: 100;
    background-color: transparent;
    box-shadow:var(--shadow);
    display: grid;
    place-items: center;
    width:100%;
    
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
    position: relative;
    width:90%;
    max-width: 700px;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
    height: 400px;

    p{
        text-transform: capitalize;
    }
`
const Top = styled.div `
    text-align: center;

    button{
        text-transform: capitalize;
        padding:6px 20px;
        border-radius:6px;
        border:none;
        outline:none;
        margin: 8px;
        cursor: pointer;
        
        &:hover{
            transform: scale(1.2);
        }
    }
   
`
const Middle = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    button{
       border:none;
       outline:none;
       padding:6px 20px;
       text-transform:capitalize;
       border-radius: 8px;
        cursor: pointer;
       &:hover{
           transform: scale(1.2);
       }
    }
`
const Bottom = styled.div `
    text-align: center;

    div{
        display: flex;
        flex-direction: column;

    }
    button{
       border:none;
       outline:none;
       padding:6px 20px;
       text-transform:capitalize;
       border-radius: 8px;
        cursor: pointer;
        margin-top: 10px;
       &:hover{
           transform: scale(1.2);
       }
    }
`
const Button = styled.button `
    
        text-transform: capitalize;
        padding:6px 20px;
        border-radius:6px;
        border:none;
        outline:none;
        margin: 8px;
        cursor: pointer;
        
        &:hover{
            transform: scale(1.2);
        }
    
`
