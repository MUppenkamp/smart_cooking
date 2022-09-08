import React, { useState } from 'react';
import './loginSite.scss';
import { Button, InputGroup, Form } from 'react-bootstrap';

type LoginSiteProps = {};

const LoginSite: React.FunctionComponent<LoginSiteProps> = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <p>Login</p>
            <InputGroup className="mb-3">
                <Form.Control
                    className='login__input'
                    value={mail}
                    onChange={(value) => {
                        setMail(value.target.value);
                    }}
                    placeholder='E-Mail'
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control
                    className='login__input'
                    value={password}
                    onChange={(value) => {
                        setPassword(value.target.value);
                    }}
                    placeholder='Passwort'
                />
            </InputGroup>
            <p className='login__password-reset'>Passwort vergessen</p>
            <div className='login__button'>
                <Button
                    onClick={() => console.log('Click')}
                >
                    Einloggen
                </Button>
            </div>
        </div>
    );
};

export default LoginSite;
