import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import styles from "./cryptocoinCard.module.css";

export default function CryptocoinCard({ coin }) {
  return (
    <div className={styles.coinCard}>
      <Card className="bg-white text-black">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">
              {coin.name} - {coin.symbol}
            </h1>
          </div>
        </CardHeader>
        <CardBody>
          <p>Price in USD: ${coin.price_usd}</p>
        </CardBody>
        <CardFooter className={styles.cardFooter}>
          <Link className={styles.cardFooterLink} href={"coin/" + coin.id}>
            Access coin
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
