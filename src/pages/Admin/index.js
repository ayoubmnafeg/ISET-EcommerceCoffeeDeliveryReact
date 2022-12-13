import { Container, Grid } from "./styled";
import AddToMenu from "../../components/AddToMenu";
import ListCafes from "../../components/ListCafes";
import menu from "../../menu";



export default function Admin() {
  return (
    <Container>
      <AddToMenu />
      <Grid>
        {menu?.map((item, index) => (
          <div key={index}>
            <ListCafes
              img={item.srcImg}
              price={item.price}
              cardTitle={item.title}
            />
          </div>
        ))}
      </Grid>
    </Container>
  );
}
