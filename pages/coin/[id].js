import styles from "./coin.module.css";
import { Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import { SlArrowLeft } from "react-icons/sl";
import Head from "next/head";

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("https://api.coinlore.net/api/ticker/?id=" + id);
  const coin = await res.json();
  console.log("Gerou!", coin[0].price_usd);

  return {
    props: { coin },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // false or 'blocking'
  };
}

export default function Coin(props) {
  return (
    <div>
      <Head>
        <title>
          Next.js - Criptocurrencies values - SSG (Static Site Generation)
        </title>
        <meta
          name="description"
          content="Next.js - Criptocurrencies values - SSG (Static Site Generation)"
        />
        <link rel="icon" href="/images/code.png" />
      </Head>
      <div className={styles.backBtnContainer}>
        <Link className={styles.backBtnLink} href={"/"}>
          <SlArrowLeft />
        </Link>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.coinCard}>
          <Card>
            <CardHeader className="flex gap-3 justify-center items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">
                  {props.coin[0].name} - {props.coin[0].symbol}
                </h1>
              </div>
            </CardHeader>
            <CardBody className="flex justify-center items-center">
              <p>Price in USD: ${props.coin[0].price_usd}</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
