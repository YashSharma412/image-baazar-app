import React from "react";

const ImageListDisplay = ({imageArr})=>{

    return (
        <div className="image__display-section page-section">
            <h1>Images Grid goes here</h1>
            <div>
                {
                    imageArr.map(value => (
                        <img 
                            src={value.urls.thumb} alt={value.alt_description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ImageListDisplay;