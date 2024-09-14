import React, { useState } from 'react';
import './NewsLayout.css';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
// import logo from './images/pinelogo.jpeg'

const newsData = [
    {
        date: 'Jul 30, 2024',
        title: "THINKR'S NEXT PHASE",
        image: img1,
    },
    {
        date: 'Jul 23, 2024',
        title: 'NPC LABS RAISES $18M TO BRING MAINSTREAM GAMES TO WEB3',
        image: img2,
    },
    {
        date: 'Jul 12, 2024',
        title: 'MEDAL RAISES $13M AS IT BUILDS OUT A CONTEXTUAL AI ASSISTANT FOR DESKTOP',
        image: img3,
    },
    {
        date: 'Jul 30, 2024',
        title: "THINKR'S NEXT PHASE",
        image: img1,
    },
    {
        date: 'Jul 23, 2024',
        title: 'NPC LABS RAISES $18M TO BRING MAINSTREAM GAMES TO WEB3',
        image: img2,
    },
    {
        date: 'Jul 12, 2024',
        title: 'MEDAL RAISES $13M AS IT BUILDS OUT A CONTEXTUAL AI ASSISTANT FOR DESKTOP',
        image: img3,
    },
    // Add more items as needed
];

const NewsLayout = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);

    const openModal = (newsItem) => {
        setSelectedNews(newsItem);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedNews(null);
    };

    return (
        <div className="news-container">
            <div className="sidebar">
            {/* <img src={logo} alt="Logo" className="logo" />  */}
                <div className="filter">
                    <span>Filter</span>
                    {/* Add filter options here */}
                </div>
            </div>

            <div className="news-content">
                {newsData.map((newsItem, index) => (
                    <div key={index} className="news-item" onClick={() => openModal(newsItem)}>
                        <img src={newsItem.image} alt={newsItem.title} className="news-image" />
                        <div className="news-details">
                            <p className="news-date">{newsItem.date}</p>
                            <h2 className="news-title">{newsItem.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div className={`modal-overlay ${modalOpen ? 'open' : ''}`} onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-icon" onClick={closeModal}>&times;</span>
                        <img src={selectedNews.image} alt={selectedNews.title} className="modal-image" />
                        <div className="modal-details">
                            <p className="modal-date">{selectedNews.date}</p>
                            <h2 className="modal-title">{selectedNews.title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsLayout;
