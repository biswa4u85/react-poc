import React from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../theme/use-theme";


function Home() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <>
            Home...
            {t("thankyou.label")}
        </>
    );
}

export default Home;
