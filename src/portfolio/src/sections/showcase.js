import './showcase.module.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { useState } from 'react';
import { Carousel, Image } from 'antd'
import SectionHeading from '../components/section-heading'
function OverlapCarousel() {
    const images = [
        project1,
        project2,
        project3,
        project4,
        project5,
        project6
    ]
    const [currentImage, setCurrentImage] = useState(0)
    let prev = currentImage == 0 ? images[images.length - 1] : images[currentImage - 1]
    let next = currentImage == images.length - 1 ? images[0] : images[currentImage + 1]

    const handlePrev = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }

    const handleNext = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }
    return (
        <div style={{
            textAlign: 'center',
        }}>
            <SectionHeading
                sx={styles.heading}
                title="Project Showcase"
                description=""
            // learnMore="Explore Details"
            />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px',
                marginTop: '40px',

            }}

                className='flex flex-wrap px-10 pb-10 md:pb-20'
            >
                {
                    images.map((image, index) => {
                        return (
                            <div key={index} style={{
                                margin: '0 auto',
                                // boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                            }}
                                className='cursor-pointer w-full md:w-1/3 lg:w-1/4 box-shadow-2xl rounded-sm'
                            >
                                <Image width={'100%'} src={image} alt="" />
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div style={{
                padding: '20px 100px'
            }}>
                {/* <App /> */}
            </div>
        </div>
    )
}

import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    // {
    //     title: 'Age',
    //     dataIndex: 'age',
    //     key: 'age',
    // },
    // {
    //     title: 'Address',
    //     dataIndex: 'address',
    //     key: 'address',
    // },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'Aarc Dashboard',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const App = () => <Table columns={columns} dataSource={data} />;

export default OverlapCarousel;

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