import "../header2/header2.scss";
import { DropdownHeader } from "../dropdownHeader/Dropdown";
import { Logo } from "../logo/Logo";
import { HeaderNav } from "../headerNav/HeaderNav";

export const Header2 = () => {
    return(
        <header className="flex justif-ss-betw align-cent container">
            <Logo/>
            <HeaderNav/>
            <DropdownHeader/>
        </header>
    )
}