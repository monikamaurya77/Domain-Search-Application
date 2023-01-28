import React from 'react';
import NameCard from './NameCard';

const ResultContainer = ({ suggestedNames }) => {

    const suggestedNamesJsx = suggestedNames.map((suggestedName, index) => {
        return <NameCard key={index} suggestedName={suggestedName} />
    });

    return (
        <div className="results-container">
            {suggestedNamesJsx}
        </div>
    );
}

export default ResultContainer;