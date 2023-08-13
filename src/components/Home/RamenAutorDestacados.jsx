import { DATA_RAMENS_AUTOR_DESTACADOS } from '../../data/ramensAutorDestacados'
import { AppSubtitle, Container, ContainerBox, Card } from '../common'


export const RamenAutorDestacados = () => {
  return (
    <Container>
      <AppSubtitle
        subTitle='Nuestros ramen de autor destacados 🤤👍'
      />
      <ContainerBox>
        {
          DATA_RAMENS_AUTOR_DESTACADOS.map((ramensAutor) => (
            <Card key={ramensAutor.title} {...ramensAutor} />
          ))
        }
      </ContainerBox>
    </Container>
  )
}
