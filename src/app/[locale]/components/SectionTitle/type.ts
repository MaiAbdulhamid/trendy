import React, { FC } from "react"

export type SectionTitleProps = {
    title: React.ReactNode;

    TitleComponent?: FC<any>;

    to?: string;

    buttonText?: string
    
    enableViewAll?: boolean;

    color?: any;
}