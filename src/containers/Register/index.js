import React from 'react'
import { useForm } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import RegisterImg from '../../assets/register-image.svg'
import Logo from '../../assets/logo.svg'

import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMensage
} from './styles'
import { toast } from 'react-toastify'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    email: Yup.string()
      .email('Digite um email válido.')
      .required('O e-mail é obrigatório.'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais!')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('Cadastro criado com sucesso!')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça o login.')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente!')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="imagem-register" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burguer" />
        <h1>Cadastre-se aqui</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMensage>{errors.name?.message}</ErrorMensage>

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

          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMensage>{errors.confirmPassword?.message}</ErrorMensage>

          <Button type="submit" style={{ marginTop: 10, marginBottom: 10 }}>
            Cadastrar
          </Button>
        </form>
        <SignInLink>
          Já possui conta?{' '}
          <Link style={{ color: 'white' }} to="/login">
            Entre aqui
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Register
