import React from 'react';
import { MainContent } from './MainContent';
import { Navigation } from './MainContent';

export const Header = () => {
    return (
        <header className='header'>
        <h2>My Star Wars React Blog</h2>

        <MainContent></MainContent>
        </header>
    )
}