import { Box, Text, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Single = ({ imageUrl, title, text, cta }) => {
  return (
    <>
      {cta?.url ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <NextLink href={cta?.url || "#"} passHref prefetch={false}>
            <Link pos="relative" as={"a"}>
              <Image src={imageUrl} height={"65px"} alt="product" m="auto" />
              <Text
                as={"h4"}
                fontSize="16px"
                lineHeight="20px"
                color={"black"}
                fontWeight="bold"
                paddingBottom={"25px"}
                paddingTop={"25px"}
                alt={title}
              >
                {title}
              </Text>
              <Text as={"div"} color={"black"} textStyle="sectionP">
                {text}
              </Text>
            </Link>
          </NextLink>
        </Box>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Image src={imageUrl} height={"65px"} alt="product" />
          <Text
            as={"h4"}
            fontSize="16px"
            lineHeight="20px"
            color={"black"}
            fontWeight="bold"
            paddingBottom={"25px"}
            paddingTop={"25px"}
            alt={title}
          >
            {title}
          </Text>
          <Text as={"div"} color={"black"} textStyle="sectionP">
            {text}
          </Text>{" "}
        </Box>
      )}
    </>
  );
};

export default Single;
