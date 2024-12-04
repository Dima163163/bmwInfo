import { useEffect, useState } from 'react';

type TypeForm = {
  type: string;
};

export const useForm = ({ type }: TypeForm) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('Имя не должно быь пустым');
  const [emailError, setEmailError] = useState('Email не должен быть пустым');
  const [passwordError, setPasswordError] = useState(
    'Пароль не должен быть пустым'
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (type === 'registration') {
      if (emailError || passwordError || nameError) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    }
  }, [emailError, passwordError, nameError]);

  useEffect(() => {
    if (type === 'login') {
      if (emailError || passwordError) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    }
  }, [emailError, passwordError]);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const regExp =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (!regExp.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.trim().length < 4) {
      setNameError('Имя должно быть длиннее 4 символов');
    } else {
      setNameError('');
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.trim().length < 4) {
      setPasswordError('Пароль должен быть длиннее 4 символов');
      if (!e.target.value) {
        setPasswordError('Пароль не должен быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'name':
        setNameDirty(true);
        break;
    }
  };
  return {
    name,
    email,
    password,
    emailDirty,
    emailError,
    passwordDirty,
    passwordError,
    nameDirty,
    nameError,
    blurHandler,
    emailHandler,
    passwordHandler,
    nameHandler,
    formValid
  };
};
