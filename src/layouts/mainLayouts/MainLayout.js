import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom'

import {useDispatch} from "react-redux";

import {movieActions} from "../../redux/slices";

import {FooterComponent, HeaderComponent} from "../../components";

const MainLayout = () => {
    const {state} = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieInfo(state));
    }, [state, dispatch])


    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>

        </div>
    );
};

export default MainLayout;