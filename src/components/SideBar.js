import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EnhancedEncryptionOutlinedIcon from '@material-ui/icons/EnhancedEncryptionOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
const SideBar = () => {
  return (
    <Container>
        <Wrapper>
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
                    <p></p>
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
        </Wrapper>
    </Container>
  )
}

export default SideBar


const Container = styled.div ``
const Wrapper = styled.div ``
const Item = styled.div ``

