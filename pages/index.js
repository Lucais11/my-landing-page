/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { GraphQLClient } from "graphql-request";
import Hero from '../components/hero';
import Nav from '../components/nav'

export default function Home({}) {
  return (
    <div css={css({
      paddingRight: '50px',
      paddingLeft: '50px',
      background: 'white',
      borderRadius: '4px'
    })}>
      <header>
        <nav>
          <Nav />
        </nav>
        <div>
          <Hero image="https://picsum.photos/600/600/?blur" title="Hi there!!!!!" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        </div>
      </header>
    </div>
  )
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
