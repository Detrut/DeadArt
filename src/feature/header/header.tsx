import { NavLink } from "react-router-dom"
import ButtonDefault from "../../shared/ui/ButtonDefault/ButtonDefault"

export default function Header() {
    return (
        <header className="bg-[var(--background)] h-[100px] font-bold flex items-center justify-center relative px-8">
            <div className="flex text-[length:var(--main-text-size)] text-[color:var(--main-text-color)] mr-12">
                <NavLink to="/" aria-label="main page">
                    <h1 className="rounded-[10%] hover:bg-[var(--background-hover)] w-[104px] h-[56px] flex items-center justify-center">Home</h1>
                </NavLink>
                <NavLink to="/stat" aria-label="">
                    <h1 className="rounded-[10%] hover:bg-[var(--background-hover)] w-[104px] h-[56px] flex items-center justify-center">Stat</h1>
                </NavLink>
                <NavLink to="/test" aria-label="">
                    <h1 className="rounded-[10%] hover:bg-[var(--background-hover)] w-[104px] h-[56px] flex items-center justify-center">Test</h1>
                </NavLink>
                <NavLink to="test2" aria-label="">
                    <h1 className="rounded-[10%] hover:bg-[var(--background-hover)] w-[104px] h-[56px] flex items-center justify-center">Test2</h1>
                </NavLink>
            </div>
            <ButtonDefault
                type="button"
                name="Profile"
                ariaLabel="Profile"
                styleButton="mr-[32px] rounded-[5%] bg-[var(--button-color-default)] w-[136px] h-[60px] flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 hover:bg-[var(--button-color-default-hover)] hover:text-[var(--acent-main-text-color)]"
            >
                    Profile
            </ButtonDefault>
        </header>
    )
}