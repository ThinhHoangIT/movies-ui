import React from 'react';
import { useParams } from 'react-router';

import { category as cate } from '~/api/tmdbApi';
import MovieGrid from '~/components/MovieGrid/MovieGrid';
import PageHeader from '~/components/PageHeader/PageHeader';

function Catalog() {
    const { category } = useParams();

    return (
        <>
            <PageHeader>{category === cate.movie ? 'Movie' : 'TV Series'}</PageHeader>
            <div className="section mb-3">
                <MovieGrid category={category} />
            </div>
        </>
    );
}

export default Catalog;
