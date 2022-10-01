import React, { useState } from 'react';
import './settingsSite.scss';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from "../../hook";
import {selectUser} from "../../redux/user/userSelectors";
import {removeLocalStorage} from "../../utils/localstorageHelper";
import { USER_DATA_KEY } from "../../constants/localstorage";

type SettingsSiteProps = {};

const SettingsSite: React.FunctionComponent<SettingsSiteProps> = () => {
    const user = useAppSelector(selectUser);
    const [firstName, setFirstName] = useState(user?.firstName ?? '');
    const [lastName, setLastName] = useState(user?.lastName ?? '');
    const [mail, setMail] = useState(user?.mail ?? '');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [passwordOld, setPasswordOld] = useState('');

    return (
        <div className='settings'>
            <div className='settings__picture'>
                <div className='settings__picture__wrapper'>
                    <FontAwesomeIcon
                        icon={faUser}
                        className='settings__picture__wrapper__icon'
                    />
                </div>
            </div>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input input'
                    value={firstName}
                    onChange={(value) => {
                        setFirstName(value.target.value);
                    }}
                    placeholder='Vorname'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input input'
                    value={lastName}
                    onChange={(value) => {
                        setLastName(value.target.value);
                    }}
                    placeholder='Nachname'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input input'
                    value={mail}
                    onChange={(value) => {
                        setMail(value.target.value);
                    }}
                    placeholder='E-Mail'
                />
            </InputGroup>
            <Button
                className='btn save'
                onClick={() => {
                }}
            >
                Speichern
            </Button>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input input'
                    type='password'
                    value={passwordOld}
                    onChange={(value) => {
                        setPasswordOld(value.target.value);
                    }}
                    placeholder='Altes Passwort'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input input'
                    type='password'
                    value={password}
                    onChange={(value) => {
                        setPassword(value.target.value);
                    }}
                    placeholder='Passwort'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    className='settings__input input'
                    type='password'
                    value={passwordRepeat}
                    onChange={(value) => {
                        setPasswordRepeat(value.target.value);
                    }}
                    placeholder='Passwort wiederholen'
                />
            </InputGroup>
            <Button
                className='btn save'
                onClick={() => {
                }}
            >
                Speichern
            </Button>
            <Button
                className='btn btn-secondary'
                onClick={() => {
                    removeLocalStorage(USER_DATA_KEY);
                    window.location.reload();
                }}
            >
                Abmelden
            </Button>
        </div>
    );
};

export default SettingsSite;
