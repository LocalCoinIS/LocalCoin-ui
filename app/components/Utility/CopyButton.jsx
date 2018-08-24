import React from "react";
import counterpart from "counterpart";
import ClipboardButton from "react-clipboard.js";
import Icon from "../Icon/Icon";

const CopyButton = ({
    className = "button",
    text = "",
    tip = "tooltip.copy_tip",
    dataPlace = "right",
    buttonIcon = "clippy",
    buttonText = ""
}) => {
    return (
        <ClipboardButton
            data-clipboard-text={text}
            className={className}
            data-place={dataPlace}
            data-tip={counterpart.translate(tip)}
            style={{backgroundColor: "#00195b"}}
        >
            {!buttonText ? (
                <Icon
                    name={buttonIcon}
                    title={"icons.clippy.copy"}
                    style={{color: "#fff"}}
                />
            ) : (
                buttonText
            )}
        </ClipboardButton>
    );
};

export default CopyButton;
