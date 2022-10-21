import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {postersURL} from "../../../constants";

import {BadgePaperComponent, RateComponent, ReviewsComponent} from "../../index";

import css from './MovieInfo.module.css'

import {ForwardIcon} from "../../badge/badgeIcons";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const MovieInfoComponent = () => {
    const {movie} = useSelector(state => state.movies)

    const theme = localStorage.getItem('theme');

    let color = 'white';

    if(theme==='dark'){
        color = 'black'
    }

    return (<div className={theme === 'dark' ? css.infoPageLight : css.infoPageDark}>{movie &&

               <div >
                    <NavLink to={movie.id.toString() + '/recommendation'}>
                        <div >
                            <Box

                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                marginTop={10}

                            >
                                <Button variant="contained"  sx={{
                                    height: 40,
                                    color: 'black',
                                    background: "#9ea1a1",
                                    fontFamily: 'success',
                                    letterSpacing: '6px',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        background: "#4a4d4e",
                                    },
                                }}>
                                    check similar movies
                                </Button>
                            </Box>

                        </div>
                    </NavLink>


            <div className={theme === 'dark' ? css.wrapLight : css.wrapDark}>

                <div className={css.titlePoster}>
                    <div className={css.aboutTheMovie}><BadgePaperComponent data={movie.title} color={color} width={390} height={50}/>
                    </div>
                    {movie.poster_path &&
                        <img src={`${postersURL + movie.poster_path}`} style={{width: '400px'}} alt=""/>}
                    {movie.vote_average &&
                        <RateComponent initialRating={movie.vote_average} numTotalStars={10} color={color}/>}

                </div>


                <div className={css.data}>
                    <div>Adult : {movie.adult ? 'Yes' : 'No'}</div>
                    <div>Original language : {movie.original_language}</div>
                    <div>Original title : {movie.original_title}</div>
                    <div>Popularity : {movie.popularity}</div>
                    <div>Release date : {movie.release_date}</div>
                    <div>Average vote : {movie.vote_average}</div>
                    <div>Count votes : {movie.vote_count}</div>
                    <div className={css.overview}><p>Overview :</p> {movie.overview}</div>
                    <div className={css.img}><img src={`${postersURL + movie.backdrop_path}`} style={{width: '400px'}}
                                                  alt=""/></div>
                </div>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <div className={css.plane}>
                <div className={css.reviews}>
                    <ForwardIcon className={css.down}/>
                    <BadgePaperComponent data={'Reviews'} width={500}  height={50}/>
                    <ForwardIcon className={css.down}/>
                </div>
              </div>
            <div>
                <ReviewsComponent id={movie.id}/>
            </div>
        </div>}
    </div>);
};

export default MovieInfoComponent;
