import React from "react";
import { Button, DatePicker } from 'antd';
import Icon from 'react-web-vector-icons';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

function Splash() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <>
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/home`}
                key={'invoice.number'}
            >
                Home
            </Link>
            <div onClick={() => { navigate('/home') }}>Click</div>
            <DatePicker placeholder="select date" />
            <Icon
                name='tools'
                font='Entypo'
                color='green'
                size={20}
            />
        </>
    );
}

export default Splash;
