import Head from "next/head";

import ContactForm from "../components/contact/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Jagger's Blog - Contact</title>
      </Head>
      <ContactForm />
    </>
  );
}
