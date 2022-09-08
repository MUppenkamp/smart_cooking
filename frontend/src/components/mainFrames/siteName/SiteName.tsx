import React from 'react';
import './siteName.scss';

type SiteNameProps = {
    selectedSite: number | null
};

const SiteName: React.FunctionComponent<SiteNameProps> = ({ selectedSite }) => {
    let siteName: string;
    switch (selectedSite) {
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
