import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../store/store";
import { logout } from "../../store/userSlice";
import Container from "./Container";

interface LayoutProps {
    children: React.ReactNode
}
function Layout({children} : LayoutProps) {
    const location = useLocation();
    const dispatch = useDispatch();

    const {user, isAuth} = useSelector(
        (state: RootState) => state.user
    );
    const siteHeaderText = isAuth ? user : 'Сайт с личным кабинетом';

    if (location.pathname === '/' && isAuth) 
        return <Navigate to="/contacts"/>
    if (location.pathname === '/contacts' && !isAuth) 
        return <Navigate to="/"/>


    return (
        <>
        <header>
            <Container>
                <div className="hader-wrapper">
                    <div className="site-name">{siteHeaderText}</div>
                    {isAuth && 
                    <button 
                    onClick={() => {
                        dispatch(logout())
                    }}
                    className="wrarning-button">Выйти</button>}
                </div>
            </Container>
        </header>
        <main>
            <Container>
                {children}
            </Container>
        </main>
        </>
    )
}
export default Layout;