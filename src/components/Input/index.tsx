import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && (
        <label htmlFor={fieldName} style={{ color: '#6C6C80' }}>
          {label}
        </label>
      )}
      <Container>
        {Icon && <Icon size={24} />}
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />

        {error && (
          <Error title={error}>
            <FiAlertCircle size={20} color="#E63946" />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Input;
