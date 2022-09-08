import React, { useState } from 'react';
import './settingsSite.scss';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SettingsSiteProps = {};

const SettingsSite: React.FunctionComponent<SettingsSiteProps> = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [passwordOld, setPasswordOld] = useState('');

    return (
        <div className='settings'>
            <div className='settings__picture'>
                <FontAwesomeIcon
                    icon={faUser}
                    className='settings__picture__icon'
                />
            </div>

            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input'
                    value={firstName}
                    onChange={(value) => {
                        setFirstName(value.target.value);
                    }}
                    placeholder='Vorname'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input'
                    value={lastName}
                    onChange={(value) => {
                        setLastName(value.target.value);
                    }}
                    placeholder='Nachname'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input'
                    value={mail}
                    onChange={(value) => {
                        setMail(value.target.value);
                    }}
                    placeholder='E-Mail'
                />
            </InputGroup>
            <Button
                className='btn'
                onClick={() => {
                }}
            >
                Speichern
            </Button>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input'
                    value={passwordOld}
                    onChange={(value) => {
                        setPasswordOld(value.target.value);
                    }}
                    placeholder='Altes Passwort'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input'
                    value={password}
                    onChange={(value) => {
                        setPassword(value.target.value);
                    }}
                    placeholder='Passwort'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input'
                    value={passwordRepeat}
                    onChange={(value) => {
                        setPasswordRepeat(value.target.value);
                    }}
                    placeholder='Passwort wiederholen'
                />
            </InputGroup>
            <Button
                className='btn'
                onClick={() => {
                }}
            >
                Speichern
            </Button>
        </div>
    );
};

export default SettingsSite;
