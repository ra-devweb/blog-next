import Head from "next/head";

import ContactComponent from "../../components/Contact";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Blog</title>
        <meta name="description" content="Send message!" />
      </Head>
      <ContactComponent />
    </>
  );
}

export default Contact;
