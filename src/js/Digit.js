import React from 'react';

const Digit = ({ unit }) => {
    return (
        <div className="rounded border p-2" style={{ width: "9rem", height: "12rem", fontSize: "120px", color: "white", textAlign: "center" }}>
            <div className="counter">{unit}</div>
        </div>
    );
};

export default Digit;
