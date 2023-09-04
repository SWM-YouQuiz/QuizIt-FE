"use client"
import {default as OptionsSvg} from "@/components/svgs/options.svg";
import {MouseEventHandler, ReactNode, useContext, useState} from "react";
import {OptionSheetContext, OptionSheetContextType} from "@/modules/curriculum/Context";

type OptionsProps = {
    documentUrl?: string
}
const Options = ({documentUrl}: OptionsProps) => {
    const context = useContext<OptionSheetContextType>(OptionSheetContext);

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if(context !== null && documentUrl) {
            context.setDocumentUrl(documentUrl)
            context.handleOptionsClick(event);
        }
    }

    return (
        <div className="relative" onClick={handleClick}>
            <OptionsSvg/>
        </div>
    )
}

export default Options;

