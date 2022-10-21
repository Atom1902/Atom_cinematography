import React from 'react';

import BadgePaginationComponent from "../../badge/badgePagination/BadgePaginationComponent";

import css from './Pagination.module.css'

const PaginationComponent = ({query,setQuery,count}) => {

    const paginate = page => setQuery({page:`${page}`});

    if(count>500){
        count = 500;
    }

    return(
        <div className={css.paginationWrap}>
            <BadgePaginationComponent currentPage={ +query.get('page')} paginate={paginate} count={count}/>
        </div>
    )

};

export default PaginationComponent;