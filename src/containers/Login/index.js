import React from 'react'
import { useForm } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useUser } from '../../hooks/UserContext'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import LoginImg from '../../assets/image-login.svg'
import Logo from '../../assets/logo.svg'

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMensage
} from './styles'

function Login() {
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido.')
      .required('O e-mail é obrigatório.'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 caracteres.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Aguarde estamos verificando seus dados!',
        success: 'Olá! Sirva-se! 👌',
        error: 'Verifique seu e-mail e senha 🤯'
      }
    )
    putUserData(data)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="imagem-login" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burguer" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMensage>{errors.email?.message}</ErrorMensage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMensage>{errors.password?.message}</ErrorMensage>

          <Button type="submit" style={{ marginTop: 65, marginBottom: 15 }}>
            Entrar
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
