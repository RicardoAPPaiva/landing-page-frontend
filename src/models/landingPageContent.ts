import type { MenuItem } from "./menuItem";

export interface LandingPageContent{
    name: string;
    icon: string,
    role: string,
    citation: string,
    menuItems: MenuItem[]
}
