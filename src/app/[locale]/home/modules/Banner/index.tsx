import { default as BannerBase } from "../../../components/Banner";
import { ModuleProp } from "../../types";
import { resolveLink } from "../../../utils/general";
import { Container } from "../../../components/Grids";

export default function Banner({ record }: ModuleProp) {

  const banners = record.map((banner: any) => ({
    image: banner.image,
    link: resolveLink(banner),
  }));

  return (
    <Container>
      <BannerBase
        col={1}
        radius={5}
        data={banners as any}
      />
    </Container>
  );
}
