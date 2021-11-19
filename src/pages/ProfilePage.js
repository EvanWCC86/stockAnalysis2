import React,{useState} from 'react'
import styled from 'styled-components'
const ProfilePage = () => {
    const [profileData, setProfileData] = useState({
        firstName:"Evan",
        lastName:"Chen",
        email:"evanweichen@gmail.com",
        role:"full-stack web-developer",
        phone:514-555-5555,
        company:"freelancer"
    })
    const profileHandleChange = (e) => {
       
        const name = e.target.name
        const value = e.target.value
        setProfileData({ ...profileData, [name]:value })
        
    }
    
  return (
    <Container>
        <Wrapper>
            <img src="../../images/profileHeader.jpg" alt="pic" />
            <Top>
                <img src="../../images/profilepic.jpg" alt="profilePic" />
                <button>upload image</button>
            </Top>
            <Middle>
                <form>
                    <div>
                        <label>First name</label>
                        <input type="text" value={profileData.firstName} name="firstName" onChange={profileHandleChange} />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input type="text" value={profileData.lastName} name="lastName" onChange={profileHandleChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={profileData.email} name="email" onChange={profileHandleChange} />
                    </div>
                    <div>
                        <lable>Role</lable>
                        <input type="text" value={profileData.role} name="role" onChange={profileHandleChange} />
                    </div>
                    <div>
                        <lable>Phone number</lable>
                        <input type="number" value={profileData.phone} name="phone" onChange={profileHandleChange} />
                    </div>
                    <div>
                        <lable>company</lable>
                        <input type="text" value={profileData.company} name="company" onChange={profileHandleChange} />
                    </div>
                </form>
            </Middle>
            <Bottom>
                <button>Save</button>
                <button>Cancel</button>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default ProfilePage

const Container = styled.div ``
const Wrapper = styled.div `
    
    
    img{
        height: 300px;
        object-fit: cover;
        width:100%;
    }
`
const Top = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:-50px;
    img{
        width:120px;
        height:120px;
        border-radius:50%;
    }
`
const Middle = styled.div `
    width:90%;
    max-width:600px;
    margin:auto;
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    lable{
        flex:0.3
    }
    input{
        color:white;
        padding:7px;
        width:300px;
    }
`
const Bottom = styled.div ``
