import React  from 'react';

import css from './footer.module.css'

const FooterComponent = () => {

    const theme = localStorage.getItem('theme');
    return (
        <div className={theme === 'dark'? css.footerLight : css.footerDark}>
            <div className={css.link}>
                ATOM DESIGN @ 2022
            </div>
        </div>
    );
};

export default FooterComponent;