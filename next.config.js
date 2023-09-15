module.exports = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  publicRuntimeConfig: {
    applicationName: "Test",
    apiUrl: "https://localhost:7289", //https://private-730e6-anggarasucinugraha.apiary-mock.com/' //'https://api.partainasdem.id',
    appLogo: "",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["128.199.220.44", "api.12819922044.com"],
  },
};
