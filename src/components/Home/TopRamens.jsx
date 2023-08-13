import { DATA_MEJORES_RAMENS_BAO } from "../../data"
import { AppSubtitle, Card, Container, ContainerBox } from "../common"

export const TopRamens = () => {
  return (
    <Container>
      <AppSubtitle
        subTitle='Buscas los mejores ramens y bao del mundo...'
      />
      <ContainerBox>
        {
          DATA_MEJORES_RAMENS_BAO.map((ramenAndBao) => (
            <Card key={ramenAndBao.title} {...ramenAndBao} />
          ))
        }
      </ContainerBox>
    </Container>
  )
}
