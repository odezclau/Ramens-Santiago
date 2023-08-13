import { DATA_DELICIOSOS_PLATOS_DULCES } from "../../data"
import { AppSubtitle, Card, ContainerBox, Container } from "../common"


export const DelicisosPlatosDulces = () => {
  return (
    <Container>
      <AppSubtitle
        subTitle='¡Deliciosos platos dulces!'
      />
      <ContainerBox>
        {
          DATA_DELICIOSOS_PLATOS_DULCES.map((ramenAndBao) => (
            <Card key={ramenAndBao.title} {...ramenAndBao} />
          ))
        }
      </ContainerBox>
    </Container>
  )
}
