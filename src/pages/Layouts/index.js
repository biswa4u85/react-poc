import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useTheme } from "../../theme/use-theme";

const { Header, Footer, Sider, Content } = Layout;

function Layouts() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useTheme();
    const langChange = () => {
        let lang = (i18n.language === 'de') ? 'en' : 'de'
        i18n.changeLanguage(lang)
    }
    return (
        <Layout>
            <Header>
                <Button type="primary" onClick={() => langChange()}>LANG {i18n.language}</Button>
                <Switch checked={darkMode} onChange={setDarkMode} />
                <Button onClick={() => { navigate(`'/'`) }}>Login Page</Button>
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/login'}>Login</NavLink>
            </Footer>
        </Layout>
    );
}

export default Layouts;