import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Generic from "../components/Generic";
import { request } from "graphql-request";

export async function getServerSideProps() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      info: data,
    },
  };
}

// const query = `
// query{
//     photo(id: 2){
//       title
//       url
//     }
//   }
// `;

// export async function getServerSideProps() {
//   const url = "https://graphqlzero.almansi.me/api";
//   const res = await request(url, query);
//   const data = await res.photo;

//   console.log(data);

//   return {
//     props: {
//       data: data,
//     },
//   };
// }

export default function Home({ info }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>app route</h1>
      <Link href="/first/first">
        <a>First</a>
      </Link>
      <Link href="/first/second/second">
        <a>Second</a>
      </Link>
      <Link href="/first/second/third/third">
        <a>Third</a>
      </Link>

      <div>
        {info.map((data) => (
          <Generic key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
