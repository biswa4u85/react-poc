import React from "react";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../theme/use-theme";

const { Header, Footer, Sider, Content } = Layout;


export default function Example() {
    let navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const phone = useSelector((state) => state.auth.phone)
    const [darkMode, setDarkMode] = useTheme();
    const langChange = () => {
        let lang = i18n.language === 'de' ? 'en' : 'de'
        i18n.changeLanguage(lang)
    }

    return (
        <>
            Home...
            <br />
            <Switch checked={darkMode} onChange={setDarkMode} />
            <br />
            {phone}
            <br />
            {t("home.label")}
            <br />
            <Button type="primary" onClick={() => langChange()}>LANG</Button>
            <br />
            <Button onClick={() => { navigate('/') }}>Click</Button>
            <br />
            <Icon
                name='tools'
                font='Entypo'
                color='green'
                size={20}
            />

            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>

        </>
    );
}
