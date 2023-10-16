"use client";

const Document = ({ children, locale }: any) => {
  let direction;
  if (locale === "ar") {
    direction = "rtl";
  } else {
    direction = "ltr";
  }
  return (
    <html lang={locale} dir={direction}>
      {children}
    </html>
  );
};

export default Document;
