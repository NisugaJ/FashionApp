import React from "react"
import Loader from "react-loader-spinner"

const OverlayLoadingSpinner = ({ message }) => {
    return (
        <div className="overlay">
            <div className="container">
                <div class="row" style={{
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    height: "100vh",
                    justifyContent: "center",
                    width: "100vh"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        width: "100vh"
                    }}>
                        <Loader
                            type="Bars"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </div >
                </div>
                <div className="row">
                    {message}
                </div>
            </div>
        </div >
    )
}

export default OverlayLoadingSpinner