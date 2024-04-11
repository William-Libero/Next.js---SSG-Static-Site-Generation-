import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function HomeInfoDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Modal size="xl" isOpen={isOpen}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Cryptocurrencies List - SSG (Static Site Generation)
            </ModalHeader>
            <ModalBody>
              <p>
                <b>Objective:</b> The primary objective of this project is to
                create a static website that provides information about
                different cryptocurrencies by fetching data from an API and
                revalidating this data every 60 seconds through Incremental
                Static Regeneration (ISR) using the revalidate property inside{" "}
                <a
                  href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#incremental-static-regeneration-getstaticprops-with-revalidate"
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  revalidate
                </a>{" "}
                property inside{" "}
                <a
                  href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops"
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  getStaticProps
                </a>{" "}
                .
              </p>
              <p>
                <b>Static Site Generation:</b> The project utilizes Next.js
                static site generation (SSG) to pre-render the website's pages
                in advance, as opposed to generating them dynamically on the
                server upon each request. This approach offers benefits such as
                improved performance, security, and simpler hosting
                requirements.
              </p>
              <p>
                To enable SSG, the following resources from Next.js were
                utilized:{" "}
                <a
                  href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops"
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  getStaticProps
                </a>
                {", "}
                <a
                  href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#dynamic-paths-getstaticpaths"
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  getStaticPaths
                </a>
                {", "}
                <a
                  href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#incremental-static-regeneration-getstaticprops-with-revalidate"
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Incremental Static Regeneration
                </a>{" "}
              </p>
              <p>
                <b>Data fetching:</b> The cryptocurrency data is fetched from
                the{" "}
                <a
                  href="https://www.coinlore.com/"
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  CoinLore
                </a>{" "}
                API.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
