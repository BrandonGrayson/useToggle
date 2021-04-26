import { Flex } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

// components
import Toggler from "../src/components/Toggler";
import ContactForm from "../src/components/ContactForm";



export default function Index() {
  return (
    <Layout>
      <Flex direction="column"></Flex>
      <Toggler />
      <ContactForm />
    </Layout>
  );
}
