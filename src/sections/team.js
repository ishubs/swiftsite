/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
    {
        id: 1,
        imgSrc: Member1,
        altText: 'Shubham Giri',
        title: 'Shubham Giri',
        designation: 'Senior Frontend Developer',
        socialProfile: [
            // {
            //     id: 3,
            //     name: 'instagram',
            //     path: '#',
            //     icon: <FaInstagram />,
            // },
        ],
    },
    {
        id: 2,
        imgSrc: Member2,
        altText: 'Swetha Rani S',
        title: 'Swetha Rani S',
        designation: 'Business Lead',
        socialProfile: [
            // {
            //     id: 1,
            //     name: 'facebook',
            //     path: '#',
            //     icon: <FaFacebookF />,
            // },
            // {
            //     id: 2,
            //     name: 'twitter',
            //     path: '#',
            //     icon: <FaTwitter />,
            // },
            // {
            //     id: 3,
            //     name: 'instagram',
            //     path: '#',
            //     icon: <FaInstagram />,
            // },
        ],
    },
    {
        id: 3,
        imgSrc: Member3,
        altText: 'Pavan Kumar C',
        title: 'Pavan Kumar C',
        designation: 'Senior Software Developer',
        socialProfile: [
            // {
            //     id: 1,
            //     name: 'facebook',
            //     path: '#',
            //     icon: <FaFacebookF />,
            // },
            // {
            //     id: 2,
            //     name: 'twitter',
            //     path: '#',
            //     icon: <FaTwitter />,
            // },
            // {
            //     id: 3,
            //     name: 'instagram',
            //     path: '#',
            //     icon: <FaInstagram />,
            // },
        ],
    },
    {
        id: 4,
        imgSrc: Member4,
        altText: 'Aakash Kumar',
        title: 'Aakash Kumar',
        designation: 'Tech Lead',
        socialProfile: [
            // {
            //     id: 1,
            //     name: 'facebook',
            //     path: '#',
            //     icon: <FaFacebookF />,
            // },
            // {
            //     id: 2,
            //     name: 'twitter',
            //     path: '#',
            //     icon: <FaTwitter />,
            // },
            // {
            //     id: 3,
            //     name: 'instagram',
            //     path: '#',
            //     icon: <FaInstagram />,
            // },
        ],
    },
    {
        id: 5,
        imgSrc: Member5,
        altText: 'Gosavi Sneha G',
        title: 'Gosavi Sneha G',
        designation: 'Web Design Lead',
        socialProfile: [
            // {
            //     id: 1,
            //     name: 'facebook',
            //     path: '#',
            //     icon: <FaFacebookF />,
            // },
            // {
            //     id: 2,
            //     name: 'twitter',
            //     path: '#',
            //     icon: <FaTwitter />,
            // },
            // {
            //     id: 3,
            //     name: 'instagram',
            //     path: '#',
            //     icon: <FaInstagram />,
            // },
        ],
    },
    {
        id: 6,
        imgSrc: Member6,
        altText: 'Mridul Singh',
        title: 'Mridul Singh',
        designation: 'Cloud Engineer',
        socialProfile: [
            // {
            //     id: 1,
            //     name: 'facebook',
            //     path: '#',
            //     icon: <FaFacebookF />,
            // },
            // {
            //     id: 2,
            //     name: 'twitter',
            //     path: '#',
            //     icon: <FaTwitter />,
            // },
            // {
            //     id: 3,
            //     name: 'instagram',
            //     path: '#',
            //     icon: <FaInstagram />,
            // },
        ],
    },
];

export default function TeamSection() {
    return (
        <section style={{
            margin: '30px auto'
        }}>
            <Container style={{
                margin: "50px auto"
            }}>
                <SectionHeader
                    slogan="our team"
                    title="The most qualified and talented individuals"
                />

                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <TeamCard
                            key={`team--key${item.id}`}
                            src={item.imgSrc}
                            altText={item.altText}
                            title={item.title}
                            designation={item.designation}
                            social={item.socialProfile}
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    grid: {
        mt: ['40px', null, -6, null, -4],
        gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
        gridTemplateColumns: [
            'repeat(2,1fr)',
            null,
            'repeat(2,1fr)',
            null,
            'repeat(3,1fr)',
        ],
    },
};