interface LayoutProps {
    children: React.ReactNode
}
function Layout({children} : LayoutProps) {
    return (
        <main>
            <header>
                <div className="site-name">Сайт с личным кабинетом</div>
                <button>Выйти</button>
            </header>
            {children}
        </main>
    )
}
export default Layout;