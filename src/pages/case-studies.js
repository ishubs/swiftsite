import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Card } from 'antd'

const { Meta } = Card;

export default function CaseStudies() {
    const studies = [
        {
            id: '1',
            title: 'BugClaim',
            description: 'BugClaim, a prominent player in the security domain specializing in penetration testing and vulnerability management, sought to enhance its service delivery and user experience.',
            link: 'https://ishubs.notion.site/BugClaim-8ef9193f24e54698aac269b722296a9c',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: '2',
            title: 'Hisab',
            description: 'Hisab Softwares, a trusted provider of accounting solutions for small and medium businesses, embarked on a journey to enhance its platform frontend to deliver a seamless and intuitive user experience.',
            link: 'https://ishubs.notion.site/Hisab-Accounting-Software-ed6f69bb8fab43e2b987224a77d95e94?pvs=4',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: '3',
            title: 'Catholic Store',
            description: 'Embarking on a mission to create an immersive online marketplace for Catholic-themed products, Catholic.store sought to build its platform from scratch.',
            link: 'https://ishubs.notion.site/Catholic-store-0fb0250d808148c1a0598f6c85a68707?pvs=4',
            image: 'https://images.unsplash.com/photo-1528357136257-0c25517acfea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

    ]
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="ByteBath Labs"
                    description="ByteBath Labs is a web development company that specializes in providing IT services for all kinds of business needs."
                />
                <div className='w-full sm:w-[70%] mx-auto'>
                    <h1 className='text-center text-5xl'>Case Studies</h1>
                    <div className='mt-20 flex gap-4'>
                        {studies.map((study) => (
                            <Card
                                onClick={() => window.open(study.link)}
                                className='cursor-pointer'
                                cover={<img height={200} alt="example" src={study.image} />}
                                key={study.id}
                                // title={study.title}
                                // extra={<a href={study.link}>Learn More</a>}
                                style={{ width: 300 }}
                            >
                                <Meta
                                    title={study.title}
                                    description={study.description}
                                />
                            </Card>
                        ))}
                    </div>
                </div>
            </Layout>
        </ThemeProvider>
    )
}