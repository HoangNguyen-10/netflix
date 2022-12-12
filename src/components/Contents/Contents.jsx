import React, { useEffect } from "react";
import MoviesRow from "./MoviesRow";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getActionMovies, getComedyMovies, getDocumentaries, getHorrorMovies, getNetflixOrignals, getRomanceMovies, getTopRatedMovies, getTrendingMovies } from "../store/actions";
import { FaArrowAltCircleUp } from 'react-icons/fa'
import styled from "styled-components";
import { animateScroll as scroll } from 'react-scroll'
import { useScrollY } from "../hooks";

const ScrollToTop = () => {
    scroll.scrollToTop()
}
function Contents(props) {
    const dispatch = useDispatch()
    const [scrollY] = useScrollY()
    const { NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries

    } = useSelector(state => state.infoMovies)
    useEffect(() => {
        dispatch(getNetflixOrignals());
        dispatch(getTrendingMovies());
        dispatch(getTopRatedMovies());
        dispatch(getActionMovies());
        dispatch(getComedyMovies());
        dispatch(getHorrorMovies());
        dispatch(getRomanceMovies());
        dispatch(getDocumentaries());

    }, [dispatch])


    return (
        <div>
            <MoviesRow movies={NetflixOriginals} title='Netflix Original' isNetflix={true} idSection='netflix' />
            <MoviesRow movies={TrendingMovies} title='Trending movies' idSection='trending' />
            <MoviesRow movies={TopRatedMovies} title='Top rated movies' idSection='topRated' />
            <MoviesRow movies={ActionMovies} title='Action movies' idSection='actionMovies' />
            <MoviesRow movies={ComedyMovies} title='Comedy movies' idSection='comedyMovies' />
            <MoviesRow movies={HorrorMovies} title='Horror movies' idSection='horrorMovies' />
            <MoviesRow movies={RomanceMovies} title='Romance movies' idSection='romanceMovies' />
            <MoviesRow movies={Documentaries} title='Documentaries' idSection='documentariesMovies' />
            <GoToTop onClick={() => ScrollToTop()}
                style={{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`
                }}

            >
                <FaArrowAltCircleUp />
            </GoToTop>

        </div>
    )
}

export default Contents

const GoToTop = styled.div`
position:fixed;
z-index:10;
right:70px;
bottom:50px;
font-size:50px;
color:rgba(255,255,255,0.4);
transition:all 0.3s linear;

&:hover{
    color:rgba(255,255,255,0.8);
}

@media screen and (max-width:600px){
    right:40px;
}
`