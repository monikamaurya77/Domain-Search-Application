import React from 'react';

const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ suggestedName }) => {
    return (
        <>
            <a className="card-link" target="_blank"
                rel="noreferrer"
                href={`${nameCheapUrl}${suggestedName}`}>

                <div className="result-name-card">
                    <p className="result-name">{suggestedName}</p>
                </div>
            </a>
        </>
    );
}

export default NameCard;