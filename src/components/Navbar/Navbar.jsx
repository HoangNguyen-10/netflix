import NetflixLogo from '../../assets/images/image2.jpg'
import { MdSearch } from 'react-icons/md'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useScrollY } from '../hooks'
import { useNavigate } from 'react-router-dom'
function Navbar(props) {
    const [scrollY] = useScrollY()
    const [keywords, setKeywords] = useState('')
    const navigate = useNavigate()

    const handleChangeInput = e => {
        let keywords = e.target.value
        setKeywords(keywords)
        if (keywords.length > 0) {
            navigate(`/search?keywords=${keywords.trim()}`)
        } else navigate('/')
    }

    const goHome = () => {
        navigate('/')
        setKeywords('')
    }

    return (
        <Navigation style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: 'var(--color-background)' }}>
            <div className='navContainer'>
                <div className='logo' onClick={goHome} >
                    <img src={NetflixLogo} alt="" />
                </div>
                <div className='navSearch'>
                    <MdSearch className='iconSearch' />
                    <input type="text" name="" id="" placeholder='input title,change,people'
                        onChange={handleChangeInput}
                        value={keywords}
                    />
                </div>
            </div>
        </Navigation>
    )
}

export default Navbar

const Navigation = styled.div`
width:100%;
height:80px;
position:fixed;
top:0;
transition-timing-function:ease-in;
transition:all 1s;
z-index:1000;

@media only screen and (max-width:600px){
   
    height:100px;
}

.navContainer{
    background:transparent;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    height:100%;
    flex-direction:row;

    @media only screen and (max-width:600px){
        flex-direction:column;
       
    }

    .logo{
        width:120px;
        cursor:pointer;
        img{
            width:100%;

        }
    }

    .navSearch{
        color:var(--color-white);
        padding-right:20px;
        display:flex;
        justify-content:flex-end;
       

        &:hover .iconSearch{
            color:var(--color-white);
        }

        .iconSearch{
            width:20px;
            height:20px;
            cursor:pointer;
            transform:translateX(24px) translateY(10px);
            color:#bbb;

        }

        input{
            font-size:14px;
            border:1px solid #fff;
            color:white;
            outline:none;
            width:0;
            padding:10px;
            cursor:pointer;
            opacity:0;  

            &:focus{
                padding-left:26px;
                width:300px;
                cursor:text;
                opacity:1;
                border-radius:4px;
                background:var(--color-background);
                transition:width 0.5s;
            }
        }
    }
}

`