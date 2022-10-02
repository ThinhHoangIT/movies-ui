import React from 'react';
import './Loading.scss';
import { VscLoading } from 'react-icons/vsc';

export default function Loading() {
    return (
        <div className="loading">
            <div className="loading_content">
                <VscLoading className="loading_content-icon" />
            </div>
        </div>
    );
}
