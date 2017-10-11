/** model used for UI / Interactions */

/** Models a dynamic footer link */
export interface FooterLink {
    text?: string;
    icon?: string;
    title?: string;
    link?: string;
    routerLink?: string[];
    onClick?: () => void;
}

/** Models alert info */
export interface AlertData {
    text: string;
    type?: string;
    autoClose?: boolean;
}
