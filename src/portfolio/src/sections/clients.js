/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Image from '../components/image';
import clients from '../assets/clients.png';
import aarc from '../assets/aarc.png';
import artefact from '../assets/artefact.png';
import carboledger from '../assets/carboledger.png';
import catholicstore from '../assets/catholicstore.png';
import picis from '../assets/picis.png';
import hisab from '../assets/hisab.png';
import hops from '../assets/hops.png';
const clientsList = [
    {
        id: 1,
        name: 'AARC',
        logo: aarc,
        link: '#',
    },
    {
        id: 2,
        name: 'Artefact',
        logo: artefact,
        link: '#',
    },
    {
        id: 3,
        name: 'Carboledger',
        logo: carboledger,
        link: '#',
    },
    {
        id: 4,
        name: 'Catholic Store',
        logo: catholicstore,
        link: '#',
    },
    {
        id: 5,
        name: 'Picis',
        logo: picis,
        link: '#',
    },
    {
        id: 6,
        name: 'Hisab',
        logo: hisab,
        link: '#'
    },
    {
        id: 7,
        name: 'Hops',
        logo: hops,
        link: '#'

    }
];


const Clients = () => {
    return (
        <section id="clients" sx={styles.section}>
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Companies I have worked with"
                    description="Helping companies across various domains level up their frontend game"
                // learnMore="Explore Details"
                />
                {/* <Flex as="figure" sx={styles.illustration}>
                    <Image src={clients} alt="clients" />
                </Flex> */}
                <Flex className="!my-20" sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                    {clientsList.map((client) => (
                        <Flex
                            key={client.id}
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexBasis: ['50%', null, '33.333%', '20%'],
                                mt: [4, null, null, 5],
                            }}
                        >
                            <Image src={client.logo} alt={client.name} />
                        </Flex>
                    ))}
                </Flex>
            </Container>
        </section>
    );
};

export default Clients;

const styles = {
    section: {
        pt: [8, null, null, null, 10, 14],
        pb: [6, null, null, null, 10, 14],
    },
    heading: {
        h3: {
            fontSize: [4, null, null, 6, 9],
            lineHeight: 1.5,
            mb: 3,
        },
    },
    illustration: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: [3, null, null, 0],
    },
};
