// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Components
import { Header } from '../../components/Header';
import { Images } from '../../components/Images';
import { Table } from '../../components/Table';

// Elements
import { ModalButton } from '../../elements/ModalButton';


const Main: FC = () => {
    return (
        <div>
            <Header/>
            <Table/>
            <ModalButton/>
            <Images/>
        </div>

    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
