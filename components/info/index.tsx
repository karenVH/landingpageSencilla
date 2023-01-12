import Image from "next/image";
import { ContainerGrid, ContText } from "./styled";

const InfoCom = () => {
  return (
    <ContainerGrid>
      <ContText>
        <div>
          <Image src={"/images/home.svg"} alt="home" width={70} height={70} />
        </div>
        <div>
          <h3>Arroz con leche</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto a
            iure tempore autem nulla nobis.
          </p>
        </div>
      </ContText>
      <ContText>
        <div>
          <Image
            src={"/images/tarjeta.svg"}
            alt="home"
            width={70}
            height={70}
          />
        </div>
        <div>
          <h3>Licuadora limpia</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto a
            iure tempore autem nulla.
          </p>
        </div>
      </ContText>
      <ContText>
        <div>
          <Image src={"/images/tool.svg"} alt="home" width={70} height={70} />
        </div>
        <div>
          <h3>Pan con limón</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto a
            iure tempore autem nulla nobis, quia, ex quae accusantium.
          </p>
        </div>
      </ContText>
    </ContainerGrid>
  );
};

export default InfoCom;
