import { Container, Grid } from "./styled";
import About from "./../../components/about";
import Cafes from "../../components/cafes";
import menu from "../../menu";
export default function Home() {
  return (
    <Container>
      <About />
      <Grid>
        {menu?.map((item, index) => (
          <div key={index}>
            <Cafes
              img={item.srcImg}
              tag={item.tags}
              price={item.price}
              cardTitle={item.title}
              about={item.description}
            />
          </div>
        ))}
      </Grid>
    </Container>
  );
}
