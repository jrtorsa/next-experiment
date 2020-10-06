import Link from "next/link";

export default function First() {
  return (
    <>
      <h1>First</h1>

      <Link href="/">
        <a>App</a>
      </Link>
      <br />
      <Link href="/first/second/second">
        <a>Second</a>
      </Link>
      <br />
      <Link href="/first/second/third/third">
        <a>Third</a>
      </Link>
    </>
  );
}

export async function getServerSideProps() {
  const url = "https://graphqlzero.almansi.me/api";
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  return {
    props: {},
  };
}
