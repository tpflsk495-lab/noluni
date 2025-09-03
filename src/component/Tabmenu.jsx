import { Routes, Route, NavLink } from "react-router-dom"
import Tablist1 from "./Tablist1"
import Tablist2 from "./Tablist2"
import Tablist3 from "./Tablist3"

const Tabmenu = () => {
    return (
        <>
            <div className="tabmenu">
                <div className="inner">
                    <h2>HOT! 인기 공연/전시</h2>
                    <div className="tab_btn">
                        <NavLink to="/Musical" activeClassName="active-link">뮤지컬</NavLink>
                        <NavLink to="/Theater" activeClassName="active-link">연극</NavLink>
                        <NavLink to="/Exhibit" activeClassName="active-link">전시/행사</NavLink>
                    </div>
                    <div className="tab_list">
                        <Routes>
                            <Route path="/Musical" elememt={<Tablist1 />} />
                            <Route path="/Theater" elememt={<Tablist2 />} />
                            <Route path="/Exhibit" elememt={<Tablist3 />} />
                        </Routes>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tabmenu