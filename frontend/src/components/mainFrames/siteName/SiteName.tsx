import React from 'react';
import './siteName.scss';

type SiteNameProps = {
    selectedNav: number
};

const SiteName: React.FunctionComponent<SiteNameProps> = ({selectedNav}) => {
    let siteName: string;
    switch (selectedNav) {
        case 1:
            siteName = 'Rezepte';
            break;
        case 2:
            siteName = 'Favoriten';
            break;
        case 3:
            siteName = 'Wochenplan';
            break;
        case 4:
            siteName = 'Einkaufsliste';
            break;
        default:
            siteName = '';
            break;
    }

    return (
        <>
            <h4 className='site-name'>{siteName}</h4>
        </>
    );
};

export default SiteName;
