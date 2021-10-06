// Core
import React, { FC } from 'react';

// Styles
import styled from 'styled-components';

// MUI
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


// Data
const itemData = [
    {
        img:    'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title:  'Bed',
        author: 'swabdesign',
    },
    {
        img:    'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title:  'Books',
        author: 'Pavel Nekoranec',
    },
    {
        img:    'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title:  'Sink',
        author: 'Charles Deluvio',
    },
    {
        img:    'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title:  'Kitchen',
        author: 'Christian Mackie',
    },
    {
        img:    'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title:  'Blinds',
        author: 'Darren Richardson',
    },
    {
        img:    'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title:  'Chairs',
        author: 'Taylor Simpson',
    },
    {
        img:    'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title:  'Laptop',
        author: 'Ben Kolde',
    },
    {
        img:    'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title:  'Doors',
        author: 'Philipp Berndt',
    },
    {
        img:    'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title:  'Coffee',
        author: 'Jen P.',
    },
    {
        img:    'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title:  'Storage',
        author: 'Douglas Sheppard',
    },
    {
        img:    'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title:  'Candle',
        author: 'Fi Bell',
    },
    {
        img:    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title:  'Coffee table',
        author: 'Hutomo Abrianto',
    },
];
const itemData2 = [
    {
        img:      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title:    'Breakfast',
        author:   '@bkristastucchio',
        rows:     2,
        cols:     2,
        featured: true,
    },
    {
        img:    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title:  'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img:    'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title:  'Camera',
        author: '@helloimnik',
    },
    {
        img:    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title:  'Coffee',
        author: '@nolanissac',
        cols:   2,
    },
    {
        img:    'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title:  'Hats',
        author: '@hjrc33',
        cols:   2,
    },
    {
        img:      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title:    'Honey',
        author:   '@arwinneil',
        rows:     2,
        cols:     2,
        featured: true,
    },
    {
        img:    'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title:  'Basketball',
        author: '@tjdragotta',
    },
    {
        img:    'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title:  'Fern',
        author: '@katie_wasserman',
    },
    {
        img:    'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title:  'Mushrooms',
        author: '@silverdalex',
        rows:   2,
        cols:   2,
    },
    {
        img:    'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title:  'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img:    'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title:  'Sea star',
        author: '@peterlaster',
    },
    {
        img:    'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title:  'Bike',
        author: '@southside_customs',
        cols:   2,
    },
];

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
`;

export const Images: FC = () => {
    return (
        <Wrapper>
            <Box sx = {{ width: 600, height: 500, overflowY: 'scroll' }}>
                <ImageList
                    cols = { 3 }
                    gap = { 8 }
                    variant = 'masonry'>
                    {itemData.map((item) => (
                        <ImageListItem key = { item.img }>
                            <img
                                alt = { item.title }
                                loading = 'lazy'
                                src = { `${item.img}?w=248&fit=crop&auto=format` }
                                srcSet = { `${item.img}?w=248&fit=crop&auto=format&dpr=2 2x` }
                            />
                            <ImageListItemBar
                                position = 'below'
                                title = { item.author }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>


            <ImageList sx = {{ width: 600, height: 500 }}>
                <ImageListItem
                    cols = { 2 }
                    key = 'Subheader'>
                    <ListSubheader component = 'div'>December</ListSubheader>
                </ImageListItem>
                {itemData2.map((item) => (
                    <ImageListItem key = { item.img }>
                        <img
                            alt = { item.title }
                            loading = 'lazy'
                            src = { `${item.img}?w=248&fit=crop&auto=format` }
                            srcSet = { `${item.img}?w=248&fit=crop&auto=format&dpr=2 2x` }
                        />
                        <ImageListItemBar
                            actionIcon = {
                                <IconButton
                                    aria-label = { `info about ${item.title}` }
                                    sx = {{ color: 'rgba(255, 255, 255, 0.54)' }}>
                                    <InfoIcon />
                                </IconButton>
                            }
                            subtitle = { item.author }
                            title = { item.title }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Wrapper>
    );
};
