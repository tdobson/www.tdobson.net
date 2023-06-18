import React, { useState } from 'react';
import { ImageList, ImageListItem, Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

function GalleryPage() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <h1>Image Gallery</h1>
            <ImageList cols={3} gap={8}>
                <ImageListItem onClick={() => handleImageClick('1.jpeg')}>
                    <img src="1.jpeg" alt="Image 1" />
                </ImageListItem>
                <ImageListItem onClick={() => handleImageClick('2.jpeg')}>
                    <img src="2.jpeg" alt="Image 2" />
                </ImageListItem>
                <ImageListItem onClick={() => handleImageClick('3.jpeg')}>
                    <img src="3.jpeg" alt="Image 3" />
                </ImageListItem>
                <ImageListItem onClick={() => handleImageClick('4.jpeg')}>
                    <img src="4.jpeg" alt="Image 3" />
                </ImageListItem>
                <ImageListItem onClick={() => handleImageClick('5.jpeg')}>
                    <img src="5.jpeg" alt="Image 3" />
                </ImageListItem>
                <ImageListItem onClick={() => handleImageClick('6.jpeg')}>
                    <img src="6.jpeg" alt="Image 3" />
                </ImageListItem>
                {/* Add more ImageListItems as needed */}
            </ImageList>
            <Dialog open={open} onClose={handleClose}>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                <img src={selectedImage} alt="Enlarged" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Dialog>
        </div>
    );
}

export default GalleryPage;
