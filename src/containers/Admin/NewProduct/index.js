import React, { useEffect, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import ReactSelect from 'react-select'
import { Container, Input, Label, ButtonStyles, LabelUpload } from './styles'
import api from '../../../services/api'
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMensage } from '../../../components'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    price: Yup.string().required('O preço é obrigatório.'),
    category: Yup.object().required('A categoria é obrigatória.'),
    file: Yup.mixed().test('required', 'Carregue um arquivo', (value) => {
      return value && value.length > 0
    })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async (data) => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Criando novo produto...',
      success: 'Produto cadastrado com sucesso!',
      error: 'Ih! Deu ruim! Tente novamente!'
    })

    setTimeout(() => {
      push('/listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMensage>{errors.name?.message}</ErrorMensage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMensage>{errors.price?.message}</ErrorMensage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do Produto
              </>
            )}

            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(value) => setFileName(value.target.files[0]?.name)}
            />
          </LabelUpload>
          <ErrorMensage>{errors.file?.message}</ErrorMensage>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Selecione uma categoria"
                />
              )
            }}
          ></Controller>
          <ErrorMensage>{errors.category?.message}</ErrorMensage>
        </div>
        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct
