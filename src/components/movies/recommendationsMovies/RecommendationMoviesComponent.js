import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions, pagesActions} from "../../../redux/slices";
import {BadgePaperComponent, MovieFromListComponent, PaginationComponent} from "../../index";

import css from '../movieList/moviesList/MoviesList.module.css'


const RecommendationMoviesComponent = ({movieId}) => {

    const {movies} = useSelector(state => state.movies);
    const {pages} = useSelector(state => state.pages)

    const [query,setQuery] = useSearchParams({page:'1'});

    const dispatch = useDispatch();

    useEffect(()=>{
        if(movieId){
            dispatch(movieActions.getRecommendationMovies({id:movieId,page:query.get('page')}));
            dispatch(pagesActions.getRecommendationMoviesPages({id:movieId}));
        }
    },[movieId,query,dispatch])

    const theme = localStorage.getItem('theme');
    let color = 'white';

    if(theme==='dark'){
        color = 'black'
    }
    return (
        <div className={css.recommendWrap}>
            <div className={css.recommend}><BadgePaperComponent data={'Similar movies'} width={420} color={color} height={50}/></div>
            <div className={theme === 'dark' ? css.postersWrapLight : css.postersWrapDark}>
                {
                    movies.map(movie => <MovieFromListComponent movie={movie} key={movie.id}/>)
                }
            </div>
            <div>
                <PaginationComponent query={query} setQuery={setQuery} count={+pages}/>
            </div>
        </div>
    );
};

export default RecommendationMoviesComponent;