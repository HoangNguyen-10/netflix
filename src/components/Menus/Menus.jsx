import { FaHotjar, FaStar } from 'react-icons/fa'
import { GiNinjaHead, GiGhost, GiRomanToga, GiBandageRoll } from 'react-icons/gi'
import { MdTheaterComedy } from 'react-icons/md'
import { SiNetflix } from 'react-icons/si'

import styled from 'styled-components'
import MenuItem from './MenuItem'

function Menus(props) {

    return (
        <MenusPane>
            <MenuItem name='Netflix' Icon={SiNetflix} to='netflix' />
            <MenuItem name='Trending' Icon={FaHotjar} to='trending' />
            <MenuItem name='Top rated' Icon={FaStar} to='topRated' />
            <MenuItem name='Action movies' Icon={GiNinjaHead} to='actionMovies' />
            <MenuItem name='Comedy movies' Icon={MdTheaterComedy} to='comedyMovies' />
            <MenuItem name='Horror movies' Icon={GiGhost} to='horrorMovies' />
            <MenuItem name='Romance movies' Icon={GiRomanToga} to='romanceMovies' />
            <MenuItem name='Documentaries' Icon={GiBandageRoll} to='documentaries' />
        </MenusPane>
    )
}

export default Menus

const MenusPane = styled.div`
position:fixed;
left:0;
top:20%;
width:45px;
padding:4px 0;
background:rgba(0,0,0,0.3);
z-index:100;
display:flex;
flex-direction:column;
transform-origin:left center;
transition:all 0.3s linear;
overflow:hidden;

&:hover{
    width:180px;
    background:rgba(0,0,0,0.5);
}

.subMenu{
    display:flex;
    align-items:center;
    width:max-content;
    margin-left:2px;
    padding:4px;
    cursor:pointer;

    .icon{
        font-size:30px;
        margin-right:8px;
    }

    span{
        font-size:16px;
        font-weight:400;
        color:rgba(255,255,255,0.6);

        &:hover{
            color:white;
        }
    }
}
`