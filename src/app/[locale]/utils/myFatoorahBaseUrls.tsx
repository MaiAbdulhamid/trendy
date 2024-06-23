const myFatoorahBaseURLs: any = {
  ALL: "https://api.myfatoorah.com", // all
  SAR: "https://api-sa.myfatoorah.com", // Saudi Arabia
  QAR: "https://api-qa.myfatoorah.com/", // QAR
  // Add other countries as needed
};

export function getMyFatoorahBaseURL(countryCode: any) {
  if (countryCode === "SAR" || countryCode === "QAR") {
    return myFatoorahBaseURLs[countryCode];
  } else {
    return myFatoorahBaseURLs["ALL"];
  }
}
