import React, { Dispatch, SetStateAction, useState } from 'react';
import './loginOrRegisterSite.scss';
import { Button, Form, InputGroup } from 'react-bootstrap';

type LoginSiteProps = {
    selectedSite: number | null,
    setSelectedSite: Dispatch<SetStateAction<number | null>>
};

const LoginOrRegisterSite: React.FunctionComponent<LoginSiteProps> = ({
                                                                          selectedSite,
                                                                          setSelectedSite
                                                                      }) => {
    const [login, setLogin] = useState(true);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login-or-register'>
            {
                login && (
                    <>
                        <p>Login</p>
                        <InputGroup className='mb-3'>
                            <Form.Control
                                className='login-or-register__input'
                                value={mail}
                                onChange={(value) => {
                                    setMail(value.target.value);
                                }}
                                placeholder='E-Mail'
                            />
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <Form.Control
                                className='login-or-register__input'
                                value={password}
                                onChange={(value) => {
                                    setPassword(value.target.value);
                                }}
                                placeholder='Passwort'
                            />
                        </InputGroup>
                        <p className='login-or-register__password-reset'>Passwort vergessen</p>
                    </>
                )
            }
            <div className={!login ? 'login-or-register__button login-or-register__button-other' : 'login-or-register__button'}>
                <Button
                    onClick={() => console.log('Click')}
                >
                    Einloggen
                </Button>
            </div>
            <div className='login-or-register__or'>
                <div className='login-or-register__or__1'></div>
                <span className='login-or-register__or__2'>oder</span>
                <div className='login-or-register__or__3'></div>
            </div>
            {
                !login && (
                    <>
                        <p>Registrieren</p>
                        <InputGroup className='mb-3'>
                            <Form.Control
                                className='login-or-register__input'
                                value={mail}
                                onChange={(value) => {
                                    setMail(value.target.value);
                                }}
                                placeholder='E-Mail'
                            />
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <Form.Control
                                className='login-or-register__input'
                                value={password}
                                onChange={(value) => {
                                    setPassword(value.target.value);
                                }}
                                placeholder='Passwort'
                            />
                        </InputGroup>
                        <p className='login-or-register__password-reset'>Passwort vergessen</p>
                    </>
                )
            }
            <div className={login ? 'login-or-register__button-other' : 'login-or-register__button'}>
                <Button
                    className='btn btn-secondary'
                    onClick={() => console.log('Click')}
                >
                    Registrieren
                </Button>
            </div>
        </div>
    );
};

export default LoginOrRegisterSite;
