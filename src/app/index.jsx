import React, {Suspense} from 'react';
import {Header} from '../widgets/Header';
import {MissionsPage} from '../pages/MissionsPage';

const App = () => {

    return (
        <div className={'app'}>
            <Suspense fallback="">
                <Header />
                <div className="content-page">
                    <MissionsPage/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;