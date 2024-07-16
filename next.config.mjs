import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    prependData: `@import "@/styles/variables.scss";`,
  },
};

export default nextConfig;
