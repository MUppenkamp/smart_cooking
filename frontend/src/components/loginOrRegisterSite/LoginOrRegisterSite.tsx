import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './loginOrRegisterSite.scss';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useAppDispatch } from '../../hook';
import { fetchLoginUser } from '../../redux/user/userActions';
import { SelectedSite } from '../../constants/selectedSite';

type LoginSiteProps = {
    selectedSite: number | null,
    setSelectedSite: Dispatch<SetStateAction<number | null>>
};

const LoginOrRegisterSite: React.FunctionComponent<LoginSiteProps> = ({
                                                                          selectedSite,
                                                                          setSelectedSite
                                                                      }) => {
    const dispatch = useAppDispatch();

    const [login, setLogin] = useState(true);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    useEffect(() => {
        setMail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setPasswordRepeat('');
    }, [login]);

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
                            type='password'
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
    };

    const renderButtonLogin = () => {
        return (
            <div className={!login ? 'login-or-register__button-other' : 'login-or-register__button'}>
                <Button
                    className='btn btn-secondary'
                    onClick={() => {
                        if (!login) setLogin(true);
                        if (mail != '' && password != '') {
                            console.log("login user")
                            dispatch(fetchLoginUser({
                                mail,
                                password
                            }));
                            setSelectedSite(SelectedSite.RECIPE_SITE)
                        }
                    }}
                >
                    Einloggen
                </Button>
            </div>
        );
    };

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
        );
    };

    return (
        <>
            <svg id='visual' viewBox='0 0 900 600' width='900' height='600'>
                <path
                    className='svg-path'
                    d='M0 357L30 354.7C60 352.3 120 347.7 180 349.2C240 350.7 300 358.3 360 340.8C420 323.3 480 280.7 540 280.5C600 280.3 660 322.7 720 332.7C780 342.7 840 320.3 870 309.2L900 298L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z'
                    fill='#ace08b' strokeLinecap='round' strokeLinejoin='miter'
                >
                </path>
            </svg>
            <div className='login-or-register'>
                <h3 className='login-or-register__greeting'>
                    <p className='login-or-register__greeting__1'>
                        {
                            login ? 'Willkommen' : 'Account'
                        }
                    </p>
                    <p>
                        {

                            login ? 'Zurück' : 'Erstellen'
                        }
                    </p>
                </h3>
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
        </>
    );
};

export default LoginOrRegisterSite;
