import { Inter } from "@next/font/google";
import Banner from "../components/banner";
import FooterC from "../components/footer";
import InfoCom from "../components/info";
import QuienesSomosC from "../components/quienessomos";
import Servicios from "../components/servicios";
import {
  Bannercss,
  Container,
  ContentGrid,
  Footer,
  Frase,
  Info,
  Serv,
} from "../styles/Home.module";

export default function Home() {
  return (
    // <>
    <Container>
      <ContentGrid>
        <Bannercss>
          <Banner />
        </Bannercss>
        <Info>
          <InfoCom />
        </Info>
        <Frase>
          <QuienesSomosC />
        </Frase>
        <hr className="line"/>
        <br />
        <Serv>
          <Servicios />
        </Serv>
        <Footer><FooterC/></Footer>
      </ContentGrid>
    </Container>
    // </>
  );
}
