import React, { useState } from 'react';
import './loginSite.scss';
import { Button, InputGroup, Form } from 'react-bootstrap';

type LoginSiteProps = {};

const LoginSite: React.FunctionComponent<LoginSiteProps> = () => {
    const [mail, setMail] = useState('');

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    value=''
                    placeholder='E-Mail'
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control
                    value=''
                    placeholder='Passwort'
                />
            </InputGroup>
        </>
    );
};

export default LoginSite;
