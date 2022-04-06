import Container from "./Container";

interface LayoutProps {
    children: React.ReactNode
}
function Layout({children} : LayoutProps) {
    return (
        <>
        <header>
            <Container>
                <div className="hader-wrapper">
                    <div className="site-name">Сайт с личным кабинетом</div>
                    <button className="wrarning-button">Выйти</button>
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