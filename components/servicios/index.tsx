import Image from "next/image";
import { Card, ContainerGrid } from "./styled";

const Servicios = () => {
  return (
    <ContainerGrid>
      <Card>
        <Image src={"/images/img1.jpg"} alt="1" width={300} height={175} />
        <h3>Pan con quesito</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rerum veniam quasi soluta, odio.
        </p>
        <button>
            OBTENER
        </button>
      </Card>
      <Card>
        <Image src={"/images/img2.jpg"} alt="1" width={300} height={175} />
        <h3>Pan con quesito</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rerum veniam
        </p>
        <button>
            OBTENER
        </button>
      </Card>
      <Card>
        <Image src={"/images/img3.jpg"} alt="1" width={300} height={175} />
        <h3>Pan con quesito</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rerum veniam quasi soluta, odio tempora,
        </p>
        <button>
            OBTENER
        </button>
      </Card>
    </ContainerGrid>
  );
};

export default Servicios;
