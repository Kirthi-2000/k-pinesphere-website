import React, { useState } from 'react';
import './ArtistList.css';
import img1 from './images/Nandhini.jpg';
import img2 from './images/Kiruthika.jpg';
import img6 from './images/Vishali.jpeg';
import img7 from './images/Vandhana.jpg';
import img8 from './images/Kauvery.jpeg';
import img9 from './images/Gokul.jpg';
import { FaLinkedin } from 'react-icons/fa';

// Sample data for the artists
const artists = [
  {
    name: "Team Leader, Nandhini",
    bio: "Dom Dolla is one of the latest Australian DJ/Producers to break globally following a succession of releases like “Take It”, “San Frandisco” & “Pump The Brakes”. Dom’s unique blend of house music has amassed over 300 million+ streams, Platinum-certified records, ARIA Award for Best Dance Release, back to back Beatport #1’s, US Billboard Dance top 10’s, triple j’s hottest 100, Shazam & Spotify Global top 100 charts.",
    image: img1,
    linkedin: "https://www.linkedin.com/in/nandhini-profile"
  },
  {
    name: "Kiruthika",
    bio: "Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album \"Langata\".",
    image: img2,
    linkedin: "https://www.linkedin.com/in/kiruthika-profile"
  },
  {
    name: "Gokul",
    bio: "Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album \"Langata\".",
    image: img9,
    linkedin: "https://www.linkedin.com/in/gokul-profile"
  },
  {
    name: "Vishali",
    bio: "Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane. Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).",
    image: img6,
    linkedin: "https://www.linkedin.com/in/vishali-profile"
  },
  {
    name: "Vandhana",
    bio: "Tom Gaynor, better known by his stage name “Allday”, is an Australian rapper from Adelaide, South Australia. Allday became active in 2011, when Gaynor began uploading his music for free online. Millennial rapper Allday got his break with a pair of radio hits in his home country of Australia in 2014. \"Right Now\" and \"You Always Know the DJ\" were included on his debut album, Startup Cult. Since his debut, Allday continues to establish himself as a household name with tracks like “Wonder Drug” and “Protection” which received ARIA Gold awards.",
    image: img7,
    linkedin: "https://www.linkedin.com/in/vandhana-profile"
  },
  {
    name: "Kauvery",
    bio: "Boo Seeka is the artist name of Australian electro-pop singer-songwriter, Ben Gumbleton. After bursting onto the scene in 2015 with his debut song, Kingdom Leader - he has continued to establish himself as a must-see live act with his unmatchable energy, and continuous flow of hits such as Deception Bay, Oh My, Does This Last, Never Enough & Don’t Waste Your Love.",
    image: img8,
    linkedin: "https://www.linkedin.com/in/kauvery-profile"
  },
];

const ArtistList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="Services">
      <header className="header">
        <h1>Our Talented Team</h1>
        <p>Meet the creative minds behind our success</p>
      </header>
      <ul className="services">
        {artists.map((artist, index) => (
          <li
            key={index}
            role="button"
            className={index === activeIndex ? "active" : ""}
            style={{ backgroundImage: `url(${artist.image})` }}
            onClick={() => handleClick(index)}
          >
            <h3>{artist.name}</h3>
            <div className="section-content">
              <div className="inner">
                <div className="text-default">
                  <h2>{artist.name}</h2>
                  <p>{artist.bio}</p>
                  <a
                    href={artist.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artist-profile-link md:hidden"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
