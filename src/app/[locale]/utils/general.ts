import URLS from "./urls";

export function trimmed(value: string, length: number) {
  if (value?.length < length) return value;

  return  ' ...' + value?.substring(0, length);
}

export function resolveLink(data: any) {
  let link = '';

  const { redirect_type, redirect_id } = data;

  if(redirect_type === 1){
    link = URLS.viewProduct({ id: redirect_id, slug: 'product' });
  }

  if(redirect_type === 2 ){
    link = URLS.category.dashboard + '?category_id[]=' + redirect_id;
  }

  if(redirect_type === 3){
    link = data.link;
  }

  if(redirect_type === 4){
    link = URLS.category.dashboard + '?brand_id[]=' + redirect_id;
  }

  return link;
}