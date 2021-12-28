import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import App from "./_app";
import Box from "@mui/material/Box";
import { GraphQLClient } from "graphql-request";

export default function Home({}) {
  // return <Box>{<App />}</Box>;
}

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient(
    "https://api-us-west-2.graphcms.com/v2/ckxnx5ht05bke01xp6h0r2b4y/master"
  );
  const data = await graphcms.request(`{
    homePages {
      id
      title
      subTitle
      cards {
        id
        title
        description
        link
      }
      
    }
  }
  `);
  console.log(data);
  return {
    props: {
      page: data.homePages[0],
    },
  };
};
