import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <Container>
        <header>
            <div>
                <p>Today's Low</p>
                <span>$64.21</span>
            </div>
            <div>
                <p>Today's High</p>
                <span>$74.21</span>
            </div>
        </header>
        <div className={classes.root}>
        
        <Slider
            defaultValue={0.00000005}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={0.00000001}
            marks
            min={-0.00000005}
            max={0.0000001}
            valueLabelDisplay="auto"
        />
        </div>
    </Container>
  );
}

const Container = styled.div `


    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

