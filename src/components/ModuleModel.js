import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
const ModuleModel = ({toggleModule}) => {
  return (
    <Container>
        
            <span onClick={toggleModule}>
                <CloseIcon />
            </span>
            <h2>L2 View Modules</h2>
            <h4>Drag & Drop</h4>
            <p>Single Ticker & Single Timstamp Inputs</p>
            <div>
                <h2>Time travel package</h2>
                <p>time travel view control panel events</p>
            </div>
            <button>Matches Trends</button>
            <button>News</button>
            <button>social media</button>
            <button>sentiment analysis</button>
            <buttton>top of book view</buttton>
            <button>rollup view</button>
            <button>alpha book file download</button>
        
    </Container>

  )
}

export default ModuleModel

const Container = styled.div `
    background-color:var(--background-color3);
    width:500px;
    box-shadow: var(--shadow);
    position: absolute;
    /* display: grid;
    place-items: center; */
    z-index: 100;
    margin:auto;
    padding:20px;
    

`
// const Wrapper = styled.div `
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `
