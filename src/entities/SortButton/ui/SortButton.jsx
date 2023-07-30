import React, {useState} from 'react';
import {Button} from '../../../shared/ui/Button';

const SortButton = () => {

    const [latest, setLatest] = useState(true);
    const swapLatest = () => setLatest(prev => !prev);
    return (
        <Button
            onClick={swapLatest}
        >
            {latest ? 'Сначала новые' : 'Сначала старые'}
        </Button>
    );
};

export default SortButton;