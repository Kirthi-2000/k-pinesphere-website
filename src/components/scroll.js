import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'; // Import DRACOLoader
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './scroll.css';
import FancyMenu from './FancyMenu';
import { useNavigate } from 'react-router-dom';
import "./PopupCard.css"; // Import your CSS file for styling
import PopupCard from './PopupCard';
import '@fortawesome/fontawesome-free/css/all.min.css';


gsap.registerPlugin(ScrollTrigger);

const ScrollNavbar = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  
const styles = {
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftPanel: {
    flex: 1,
    paddingRight: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#C5FF37',
    borderRadius: '25px',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    paddingLeft: '10px',
    fontSize: '1.5rem',
  },
  reviewsWrapper: {
    display: 'flex',
    gap: '20px',
    flex: 2,
  },
  reviewCard: {
    backgroundColor: '#F7F8FA',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
  },
  stars: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  reviewer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  initialBox: {
    width: '40px',
    height: '40px',
    backgroundColor: '#C5FF37',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  reviewerName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginLeft: '10px',
  },
  companyName: {
    marginLeft: '10px',
    color: '#777',
    fontSize: '10px',

  },
};
  const content = [
    {
      id: 'blue',
      color: 'blue',
      title: 'Agile Methodology',
      content: [
        'We follow the Agile methodology, which allows us to be flexible, respond to changes quickly, and continuously improve our processes.',
      ],
    },
    {
      id: 'red',
      color: 'red',
      title: 'Teamwork',
      content: [
        'Our team is made up of highly skilled professionals with diverse backgrounds and expertise.',
      ],
    },
    {
      id: 'yellow',
      color: 'yellow',
      title: 'Quality Assurance',
      content: [
        'Quality is our top priority. We have a dedicated team of quality assurance specialists who ensure that every project we deliver meets our high standards.',
      ],
    },
    {
      id: 'green',
      color: 'green',
      title: 'Customer Focus',
      content: [
        'We prioritize client success and work collaboratively to deliver tailored solutions that exceed expectations.',
      ],
    },
  ];
  
  const cards = [
    {
      title: "Digital Web & Mobility",
      content: "Utilize the transformational power of cloud computing to realize the boundless potential of our company."
    },
    {
      title: "Cloud Transformation",
      content: "Empower decisions with intelligent things and revolutionize industries through edge computing."
    },
    {
      title: "Internet Of Things",
      content: "Enhance operational efficiency through the implementation of Robotic Process Automation (RPA)."
    },
    {
      title: "Robotic Process Automation",
      content: "Unlock a diverse range of courses and resources on our platform to enhance skills and expand knowledge."
    },
    {
      title: "Digital Learning",
      content: "Unleash the boundless potential of Machine Learning for reshaping industries for enhancing the future."
    },
    {
      title: "Machine Learning",
      content: "Unleashing the Potential of AI for future and bridging the gap between Science Fiction and Reality."
    },
    {
      title: "Artificial Intelligence",
      content: "Innovating Tomorrow, Coding Today: Crafting Next-Gen Applications with Technology Expertise."
    },
  ];

  const navigate = useNavigate();

  // State for heading and logos
  const [currentIndex, setCurrentIndex] = useState(0);

  const headings = ["Website", "Web Application", "Mobile Application"];
  const logos = [
    ["midnite.png", "bitstar.png", "audiomob.png"], // Logos for Website
    ["webapp1.png", "webapp2.png", "webapp3.png"], // Logos for Web Application
    ["mobile1.png", "mobile2.png", "mobile3.png"], // Logos for Mobile Application
  ];
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? headings.length - 1 : prevIndex - 1
    );
  };

  const handlePortfolioClick = () => {
    const currentHeading = headings[currentIndex];
    navigate(`/portfolio/${currentHeading.toLowerCase().replace(/\s+/g, '-')}`);
  };

  // Navbar State
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Animation State
  const sceneRef = useRef();
  const modelRef = useRef(); // Ref to the 3D model for visibility control
  const [currentSentence, setCurrentSentence] = useState(0);
  const sentences = [
    "<span style='color:#FF5733; font-weight:bold;'>Transform</span> every digital process",
    "Embrace <span style='color:#33FF57; font-weight:bold;'>innovation</span> unleash potential",
    "Creating <span style='color:#3357FF; font-weight:bold;'>better</span> IT solutions"
  ];

  // Toggle Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Toggle model visibility based on the navbar state
    if (modelRef.current) {
      modelRef.current.visible = !menuOpen;
    }
  };

  // Text Animation Interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prevSentence) => (prevSentence + 1) % sentences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sentences.length]);

  // Scroll and Three.js Animation Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    
    //get scroll value
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress })
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0); // Transparent background
    sceneRef.current.appendChild(renderer.domElement);
// Set up Ambient Light (increase intensity for better illumination)
const ambientLight = new THREE.AmbientLight(0x53a3d6, 10); // Increased intensity to brighten up the scene
scene.add(ambientLight);

// Set up Point Light for the logo (increase intensity and adjust position)
const pointLight = new THREE.PointLight(0x53a3d6, 10); // Increased intensity for sharper highlights
pointLight.position.set(5, 5, 5); // Adjust position to highlight model
scene.add(pointLight);

// Set up Directional Light (increase intensity and adjust position for a softer light)
const directionalLight = new THREE.DirectionalLight(0x53a3d6, 9); // Increased intensity for more pronounced shadows
directionalLight.position.set(0, 1, 0); // Light coming from above
scene.add(directionalLight);
    // Configure DRACOLoader and GLTFLoader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/'); // Set the path to the Draco decoder

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader); // Assign DRACOLoader to GLTFLoader

    loader.load('/logo.glb', (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.5, 0.5, 0.5);
      model.position.set(2.649822102, 0.145446924, 0.3690322287);
      model.rotation.set(0, 0, 0);
    
      scene.add(model);
    
      modelRef.current = model;
    
      // Animation setup
      const mixer = new THREE.AnimationMixer(model);
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
    
      const clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);
    
        const delta = clock.getDelta();
        mixer.update(delta);
    
        renderer.render(scene, camera);
      };
    
      animate();
      const sphere = model.getObjectByName('Sphere');

      if (sphere) {
        sphere.material = new THREE.MeshStandardMaterial({ color: 0x969696 });

        gsap.to(sphere.rotation, {
          y: Math.PI * 2,
          duration: 10,
          repeat: -1,
          ease: 'none'
        });
      }

      const carAnim = gsap.timeline();
      carAnim.to(model.rotation, {
        x: 1.50,
        y: 0.00,
        scrollTrigger: {
          trigger: ".section-one",
          endTrigger: ".section-three",
          end: "top bottom",
          scrub: true,
        },
      });

      carAnim.to(model.rotation, {
        x: 1.50,
        y: 0.00,
        scrollTrigger: {
          trigger: ".section-two",
          endTrigger: ".section-four",
          scrub: true,
        },
      });

      carAnim.to(camera.position, {
        x: -0.1,
        scrollTrigger: {
          trigger: ".section-two",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      carAnim.to(model.position, {
        x: -3,
        scrollTrigger: {
          trigger: ".section-two",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
     // In your carAnim.to section for section-three

carAnim.to(model.rotation, {
  y: 2.6,
  scrollTrigger: {
    trigger: ".section-three",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});

carAnim.to(modelRef.current, {
  opacity: 0.2, // Reduce opacity to make the model more transparent
  scrollTrigger: {
    trigger: ".section-three",
    start: "top bottom",
    end: "top top",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      if (modelRef.current) {
        modelRef.current.children.forEach((child) => {
          if (child.material) {
            child.material.opacity = 1 - progress; // Fades out the model as you scroll through section 3
            child.material.transparent = true; // Ensure transparency is enabled
          }
        });
      }
    },
  },
});

carAnim.to(model.rotation, {
  y: 0.1,
  scrollTrigger: {
    trigger: ".section-four",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});




      carAnim.to(model.position, {
        y: 0.3,
        
        scrollTrigger: {
          trigger: ".section-three",
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            // Adjust opacity based on scroll progress
            if (modelRef.current) {
              modelRef.current.children.forEach(child => {
                if (child.material) {
                  child.material.opacity = 0.2 - progress; // Fades out as you scroll through section 3
                  child.material.transparent = true; // Ensure transparency is enabled
                }
              });
            }
          },
        },
      });
      carAnim.to(camera.position, {
        x: 1.16,
        scrollTrigger: {
          trigger: ".section-four",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      carAnim.to(model.position, {
        y:-1,
        x:0,
        scrollTrigger: {
          trigger: ".section-four",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });


      carAnim.to(camera.position, {
        x: -0.4,
        scrollTrigger: {
          trigger: ".section-six",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      carAnim.to(model.position, {
        x: -3,
        scrollTrigger: {
          trigger: ".section-six",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      carAnim.to(model.rotation, {
        x: 1.50,
        y: 0.00,
        scrollTrigger: {
          trigger: ".section-six",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      carAnim.to(camera.position, {
        x: -0.4,
        scrollTrigger: {
          trigger: ".section-seven",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      carAnim.to(model.position, {
        x: -3,
        scrollTrigger: {
          trigger: ".section-seven",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      carAnim.to(model.rotation, {
        x: 1.50,
        y: 0.00,
        scrollTrigger: {
          trigger: ".section-seven",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    });

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const contentAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-content",
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play reverse play reverse",
        scrub: 1,
      },
    });

    contentAnimation.fromTo(
      ".section-content h1",
      { opacity: 0, scale: 0.8, fontWeight: "normal" },
      { opacity: 1, scale: 1, fontWeight: "bold", duration: 1.5, ease: "power3.out" }
    );

    contentAnimation.fromTo(
      ".section-content p",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
      "-=1.2"
    );
  }, [currentSentence]);

  return (
    <div>
       <FancyMenu />

    <div  className="hover-container">
      {/* Navbar Section */}

     
      {/* Scroll Animation Sections */}
      <section className="section section-one">
        <div className="section-content">
          <h1 dangerouslySetInnerHTML={{ __html: sentences[currentSentence] }}></h1>
          <p>This is where our journey begins.</p>
        </div>
        <div className="scene-container">
          <div className="scene one" ref={sceneRef}></div>
        </div>
      </section>

      <section className="section section-two">
        <div className="scene-container">
          <div className="scene"></div>
        </div>
        <div className="section-content right">
          <p className="sub-heading"> Who We Are</p>
          <h2 className="section2" style={{ fontSize:'4rem',textAlign: 'left' }}>Empowering Your Success through Reliable IT Services</h2>
          <p style={{ fontSize:'16px',textAlign: 'left' }}>Pinesphere is at the forefront of technological advancements, offering advanced products, innovative services, and cutting-edge workforce solutions. Our comprehensive range of offerings harnesses the power of data convergence, technology integration, and groundbreaking innovation to unlock unlimited possibilities.</p>
        </div>
      </section>
      <section className="section section-three">
        <div className="content-container">
          <h1 className="section2">MEET OUR SERVICES</h1>
          <p style={{ fontSize: '20px' }}>
            In the realm of technology, our professional IT services are the key to unlock your business's success.
          </p>
          <p style={{ fontSize: '20px' }}>
            By leveraging our 360-degree Web and Mobility Solutions, we enable next-generation digital experiences.
          </p>
        </div>
        <div className="cards-container">
  {cards.map((card, index) => (
    <div
      key={index}
      className={`card ${expandedCard === index ? 'expanded' : ''}`}
      onClick={() => handleCardClick(index)}
    >
      <h2 style={{ fontSize: '23px' }}>{card.title}</h2>
      <p style={{ fontSize: '20px' }} className="card-content">{card.content}</p>
    </div>
  ))}
</div>
<span style={{ fontSize: '1.5rem', fontWeight: '700', paddingRight: '20px' }}>
          Meet Our Team
          <button className="portfolio-button" onClick={handlePortfolioClick}>→</button>
        </span>
      </section>
      {/* Section 5 */}
      <section className="section section-five">
        <div className="arrows">
          <button className="arrow-left" onClick={handlePrev}></button>
          <h2 className="ecosystem-heading">{headings[currentIndex]}</h2>
          <button className="arrow-right" onClick={handleNext}></button>
        </div>
        <div className="logos">
          {logos[currentIndex].map((logo, index) => (
            <img key={index} src={`/img/${logo}`} alt={`logo-${index}`} />
          ))}
        </div>
        <span style={{ fontSize: '2rem', fontWeight: '700', paddingRight: '20px' }}>
          See all Portfolio
          <button className="portfolio-button" onClick={handlePortfolioClick}>→</button>
        </span>
      </section>
      <section className="section section-four">
        <div className="section-content">
          <h1>Section Four: End of Rotation</h1>
          <p>The rotation ends as you reach this section.</p>
        </div>
        <div className="scene-container">
          <div className="scene"></div>
        </div>
      </section>
      <section className="section section-six">
  <div className="content-container">
    <p className="sub-heading">PROCESS</p>
    <h2 style={{ fontSize: '30px', paddingLeft:'5px'}}>How We Work</h2>
  </div>
  <div className="scene-container">
    {content.map((card) => (
      <PopupCard
        key={card.id}
        id={card.id}
        color={card.color}
        title={card.title}
        content={card.content}
      />
    ))}
  </div>
</section>

      <section className="section section-three">
        <h1>Our Partners</h1>
        <div className="slider">
          <div className="slider-items">
          <img src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
                    alt=""  />
                <img src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
                    alt=""  />
                <img src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
                    alt=""  />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
                    alt=""  />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
                    alt=""  />
                <img src="https://www.svgrepo.com/show/303123/bmw-logo.svg" alt=""  />
                <img src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
                    alt="" />
                <img src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
                    alt=""  />
                <img src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
                    alt=""  />
                <img src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
                    alt=""  />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
                    alt=""  />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
                    alt=""  />
                <img src="https://www.svgrepo.com/show/303123/bmw-logo.svg" alt=""  />
                <img src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
                    alt=""  />

            {/* More images */}
          </div>
        </div>
      </section>
      <section className="section section-five" style={styles.section}>
      <div style={styles.leftPanel}>
        <h2 style={styles.heading}>People love us, and we love them</h2>
        <button style={styles.button} onClick={handlePortfolioClick}>
          Read more Reviews <span style={styles.arrow}>→</span>
        </button>
      </div>

      <div style={styles.reviewsWrapper}>
        <div style={styles.reviewCard}>
          <p style={styles.stars}>★★★★★</p>
          <p style={{fontSize:'15px'}}>
            I’ve been working with Andy and the MadeByShape team for around 12
            months now. They’ve been nothing shy of perfect. The team completely
            designed and rebuilt my website using CraftCMS which has been such a
            positive change against my old website in WordPress. Can’t recommend
            Shape enough.
          </p>
          <div style={styles.reviewer}>
            <div style={styles.initialBox}>D</div>
            <div>
              <p style={styles.reviewerName}>Daniel Poll</p>
              <p style={styles.companyName}>Noramble</p>
            </div>
          </div>
        </div>

        <div style={styles.reviewCard}>
          <p style={styles.stars}>★★★★★</p>
          <p style={{fontSize:'15px'}}>
            MadeByShape was amazing to work with for branding for my new
            athleisure shop in London. They were extremely responsive and a joy
            to work with. I didn’t have to give them too much direction; they
            completely nailed it.
          </p>
          <div style={styles.reviewer}>
            <div style={styles.initialBox}>C</div>
            <div>
              <p style={styles.reviewerName}>Cillian Medina</p>
              <p style={styles.companyName}>Relieve Clothing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="section section-four">
        <div className="section-content">
        <h1>Contact Us</h1>
          <button className="portfolio-button" style={{ padding:'13px', }} onClick={handlePortfolioClick}>Contact Us</button>
        </div>
        <div className="scene-container">
          <div className="scene"></div>
        </div>
      </section>
    

    </div>
    
    </div>
  );
};

export default ScrollNavbar;