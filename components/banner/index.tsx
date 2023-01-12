import Image from "next/image";
import { ContentTrans, Form, Text } from "./styled";

const Banner = () => {
  return (
    <div>
      <Image src={"/images/img2.png"} alt="" width={1440} height={550} />
      <ContentTrans>
        <Text>
          <h1>He4llo to Our Awesome new Template MyFlat</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            labore unde et reprehenderit cumque necessitatibus esse eveniet,
            quasi accusamus autem 
          </p>
          <br />
          <h3>loe hsjufghsdu juyfuewhyfu jahgsudsh jhfhgsjadhh hf hejw hwq</h3>
        </Text>
        <Form>
          <h2>Lotre input ikahfhjis</h2>
          <br />
          <br />
          <form action="">
            <label htmlFor="">user</label>
            <input type="text" />
            <br />
            <label htmlFor="">correo</label>
            <input type="text" name="" id="" />
            <br />
            <label htmlFor="">contraseña</label>
            <input type="text" />
            <br />
            <button>submit</button>
          </form>
        </Form>
      </ContentTrans>
    </div>
  );
};

export default Banner;
