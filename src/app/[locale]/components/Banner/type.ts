type ImageProps = {
    link: string;

    image: string
}

export type BannerProps = {
    col?: number | string;

    data: ImageProps | ImageProps[]

    radius?: number;

}