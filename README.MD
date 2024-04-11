# Next.js - Criptocurrencies values - SSG (Static Site Generation)

<p align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png" width="300" alt="Nest Logo" /></a>
</p>

[![NextJS](https://img.shields.io/badge/Next.js-14.1.3-black.svg)](https://nextjs.org/)

<b>Project link:</b> <a href="https://next-js-ssg-static-site-generation.vercel.app/" target="_blank" style="color: blue, textDecoration: underline">https://next-js-ssg-static-site-generation.vercel.app/</a>

<b>Objective:</b> The primary objective of this project is to create a static website that provides information about different cryptocurrencies by fetching data from an API and revalidating this data every 60 seconds through Incremental Static Regeneration (ISR) using the <a href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#incremental-static-regeneration-getstaticprops-with-revalidate" target="_blank" style="color: blue, textDecoration: underline">
revalidate</a> property inside <a href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops" target="_blank" style="color: blue, textDecoration: underline">getStaticProps</a>.

<b>Static Site Generation:</b> The project utilizes Next.js Static Site Generation (SSG) to pre-render the website's pages in advance, as opposed to generating them dynamically on the server upon each request. This approach offers benefits such as improved performance, security, and simpler hosting requirements.

To enable SSG, the following resources from Next.js were utilized: <a href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops" target="\_blank" style="color: blue, textDecoration: underline">getStaticProps</a>, <a href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#dynamic-paths-getstaticpaths" target="\_blank" style="color: blue, textDecoration: underline">getStaticPaths</a>, <a href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#incremental-static-regeneration-getstaticprops-with-revalidate" target="\_blank" style="color: blue, textDecoration: underline">Incremental Static Regeneration</a>

<b>Data fetching:</b> The cryptocurrency data is fetched from the <a href="https://www.coinlore.com/" target="_blank" style="color: blue, textDecoration: underline">CoinLore</a> API.

## Features

- Criptocurrencies values
- Criptocurrencies individual values
