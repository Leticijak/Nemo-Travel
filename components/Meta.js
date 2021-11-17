import Head from "next/head"

export default function Meta({ title }) {
  return (
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap'
        rel='stylesheet'
      />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Travel/Stories",
}
