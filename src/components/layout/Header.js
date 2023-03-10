import {Fragment} from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
        <header><h1>React 프로젝트</h1></header>
            <nav>
            <ul className="navul">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/member/join">
                        회원가입
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/member/login">
                        로그인
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/board/list">
                        게시판
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/member/myinfo">
                        회원정보
                    </NavLink>
                </li>
            </ul>
            <hr className="clear"></hr>
            </nav>
        </Fragment>
    );
}

export default Header;