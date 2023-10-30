import URLS from "./urls";

export function trimmed(value: string, length: number) {
  if (value.length < length) return value;

  return value.substring(0, length) + ' ...';
}

export function resolveBannerLink(data: any) {
  let link = '';

  const { redirect_type, redirect_id } = data;

  switch (redirect_type) {
    case 1:
      link = URLS.viewProduct({ id: redirect_id, slug: 'product' });
    case 2:
      link = URLS.category.dashboard + '?category_id[]=' + redirect_id;
      break;
    case 3:
      link = data.link;
      break;
    case 4:
      link = URLS.category.dashboard + '?brand_id[]=' + redirect_id;
      break;
    default:
  }

  return link;
}