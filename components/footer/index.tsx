import Image from "next/image";
import { ContainerGrid, Content, ContText } from "./styled";

const FooterC = () => {
  return (
    <>
    <head>
    
    </head>
    <ContainerGrid>
      <div>
        <h2>Welcome to Our Company</h2>
        <ContText>
          <Image
            className="icon"
            src={"/images/oficina.svg"}
            alt="edi"
            width={50}
            height={50}
          />
          <p>
            Lorem ipsum dolor st liquam, soluta suscipit maxime sint odio fuga
            fugit dict officia qui?
          </p>
        </ContText>
        <ContText>
          <Image
            className="icon"
            src={"/images/reglas.svg"}
            alt="edi"
            width={50}
            height={50}
          />
          <p>
            Lorem ipsum dolor st liquam, soluta suscipit maxime sint odio fuga
            fugit dict officia qui?
          </p>
        </ContText>
        <ContText>
          <Image
            className="icon"
            src={"/images/time.svg"}
            alt="edi"
            width={50}
            height={50}
          />
          <p>
            Lorem ipsum dolor st liquam, soluta suscipit maxime sint odio fuga
            fugit dict officia qui?
          </p>
        </ContText>
      </div>
      <Content>
        <Image src={"/images/thanks.png"} width={500} height={300} alt="" />
      </Content>
    </ContainerGrid>
    </>
  );
};

export default FooterC;
