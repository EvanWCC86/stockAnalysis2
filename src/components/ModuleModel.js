import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
const ModuleModel = ({toggleModule}) => {
  return (
    <Container>
        <Wrapper>
            <span onClick={toggleModule}>
                <CloseIcon />
            </span>
            <Header>
              <h2>L2 View Modules</h2>
              <h4>Drag & Drop</h4>
              <p>Single Ticker & Single Timstamp Inputs</p>
            </Header>
            <div>
                <h2>Time travel package</h2>
                <p>time travel view control panel events</p>
            </div>
            <button>Matches Trends</button>
            <button>News</button>
            <button>social media</button>
            <button>sentiment analysis</button>
            <button>top of book view</button>
            <button>rollup view</button>
            <button>alpha book file download</button>
        </Wrapper>
    </Container>

  )
}

export default ModuleModel

const Container = styled.div `
    background-color:transparent;
    width:100%;
    height:100%;
    
    
    position: absolute;
    /* display: grid;
    place-items: center; */
    z-index: 100;
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    

`
const Wrapper = styled.div `
    position: relative;
    width:90%;
    max-width:700px;
    margin:auto;
    background-color:gray;
    padding:20px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    
    align-items: center;
    text-align: center;

    span{
      position: absolute;
      right:10px;
      top:10px;
      z-index: 10;
      cursor: pointer;

      &:hover{
        color:red;
      }
    }

   div{
     box-shadow: var(--shadow);
     padding:10px;
     background-color: white;
     color:black;
     cursor: pointer;
     border-radius: 10px;
     &:hover{
       transform:scale(1.2);
     }
   }
   button{
     border:none;
     outline:none;
     border-radius: 10px;
    box-shadow: var(--shadow);
    width:300px;
    padding:10px;
    margin-top:10px;
    text-transform: capitalize;
    cursor: pointer;
    &:hover{
       transform:scale(1.2);
     }
   }
`
const Header = styled.header `
  text-align: center;
  margin-bottom: 20px;
`
