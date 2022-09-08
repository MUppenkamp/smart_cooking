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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const renderInputs = () => {
        if (login) {
            return (
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
            );
        } else {
            return (
                <>
                    <p>Registrieren</p>
                    <InputGroup className='mb-3'>
                        <Form.Control
                            className='login-or-register__input'
                            value={firstName}
                            onChange={(value) => {
                                setFirstName(value.target.value);
                            }}
                            placeholder='Vorname'
                        />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <Form.Control
                            className='login-or-register__input'
                            value={lastName}
                            onChange={(value) => {
                                setLastName(value.target.value);
                            }}
                            placeholder='Nachname'
                        />
                    </InputGroup>
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
                    <InputGroup className='mb-3'>
                        <Form.Control
                            className='login-or-register__input'
                            value={passwordRepeat}
                            onChange={(value) => {
                                setPasswordRepeat(value.target.value);
                            }}
                            placeholder='Passwort wiederholen'
                        />
                    </InputGroup>
                    <p className='login-or-register__password-reset'>Passwort vergessen</p>
                </>
            );
        }
    }

    const renderButtonLogin = () => {
        return (
            <div className={!login ? 'login-or-register__button-other' : 'login-or-register__button'}>
                <Button
                    className='btn btn-secondary'
                    onClick={() => {
                        if (!login) setLogin(true);
                    }}
                >
                    Einloggen
                </Button>
            </div>
        )
    }

    const renderButtonRegister = () => {
        return (
            <div className={login ? 'login-or-register__button-other' : 'login-or-register__button'}>
                <Button
                    className='btn btn-secondary'
                    onClick={() => {
                        if (login) setLogin(false);
                    }}
                >
                    Registrieren
                </Button>
            </div>
        )
    }

    return (
        <div className='login-or-register'>
            {renderInputs()}
            {
                login ? renderButtonLogin() : renderButtonRegister()
            }
            <div className='login-or-register__or'>
                <div className='login-or-register__or__1'></div>
                <span className='login-or-register__or__2'>oder</span>
                <div className='login-or-register__or__3'></div>
            </div>
            {
                login ? renderButtonRegister() : renderButtonLogin()
            }
        </div>
    );
};

export default LoginOrRegisterSite;
