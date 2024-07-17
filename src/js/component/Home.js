import React from "react";
import Digit from "../Digit";

const Home = (props) => {
    let data = [
        { unit: props.six },
        { unit: props.five },
        { unit: props.four },
        { unit: props.three },
        { unit: props.two },
        { unit: props.one }
    ];

    return (
        <div className="d-flex justify-content-between align-items-center p-5" style={{ width: "100%", height: "100%", background: "#28ADB5", textAlign: "center" }}>
            <div className="d-flex align-items-center justify-content-center rounded p-2" style={{ width: "9rem", height: "16rem", textAlign: "center" }}>
                <img src="https://res.cloudinary.com/dx4vddpud/image/upload/v1720627314/Recurso_3_xtdkuq.svg" alt="Logo" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            {data.map((value, index) => {
                return <Digit key={index} unit={value.unit} />;
            })}
        </div>
    );
};

export default Home;
