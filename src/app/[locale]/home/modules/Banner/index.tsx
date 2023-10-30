import { default as BannerBase } from "../../../components/Banner";
import { ModuleProp } from "../../types";
import { resolveBannerLink } from "@/app/[locale]/utils/general";
import { Container } from "@/app/[locale]/components/Grids";

export default function Banner({ record }: ModuleProp) {

  console.log(record)

  const banners = record.map((banner: any) => ({
    image: banner.image,
    link: resolveBannerLink(banner),
  }));

  return (
    <Container>
      <BannerBase
        col={1}
        radius={10}
        data={banners as any}
      />
    </Container>
  );
}
