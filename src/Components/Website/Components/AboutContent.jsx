import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import illustration from "../../../assets/illustration1.png";

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.8 },
  },
};

const AboutContent = () => {
  const linksRef = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const links = linksRef.current.filter(Boolean);
    const cursor = cursorRef.current;

    const animate = (e) => {
      const span = e.currentTarget.querySelector("span");
      if (!span) return;
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = e.currentTarget;

      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") {
        span.style.transform = "";
      }
    };

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    const handleMouseEnter = () => cursor.classList.add("active");
    const handleMouseLeave = () => cursor.classList.remove("active");

    links.forEach((link) => {
      link.addEventListener("mousemove", animate);
      link.addEventListener("mouseleave", animate);
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", editCursor);

    return () => {
      links.forEach((link) => {
        if (!link) return;
        link.removeEventListener("mousemove", animate);
        link.removeEventListener("mouseleave", animate);
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", editCursor);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  return (
    <Container>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');`}
      </style>
      <div className="wrapper">
        <TopNav
          variants={navContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {["Gmail", "Contact", "LinkedIn", "WhatsApp"].map((text) => (
            <motion.div
              variants={navVariants}
              className="hover-this nav-link"
              ref={addToRefs}
              key={text}
            >
              <span>{text}</span>
            </motion.div>
          ))}
        </TopNav>

        <ContentArea
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <LeftCol>
            <motion.div variants={itemVariants} className="hover-this" ref={addToRefs}>
              <span className="greeting">Hello! I am</span>
            </motion.div>
            <motion.div variants={itemVariants} className="hover-this" ref={addToRefs}>
              <span className="name">Aditya Vardhan</span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="hover-this"
              ref={addToRefs}
              style={{ width: "100%", textAlign: "right" }}
            >
              <span className="title">Graphic Designer</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hover-this"
              ref={addToRefs}
              style={{ marginTop: "2rem" }}
            >
              <span className="desc">
                Each design in my portfolio reflects a combination of
                creativity, strategy, and attention to detail. I focus on
                delivering visually striking designs that effectively
                communicate the intended message while maintaining a strong
                aesthetic appeal.
              </span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="hover-this"
              ref={addToRefs}
              style={{ marginTop: "1rem" }}
            >
              <span className="desc">
                From concept to execution, every project demonstrates my ability
                to balance design principles with innovative thinking, resulting
                in work that is both functional and visually engaging.
              </span>
            </motion.div>

            <ActionButtons>
              <motion.div variants={itemVariants} className="hover-this btn" ref={addToRefs}>
                <span>Resume</span>
              </motion.div>
              <motion.div variants={itemVariants} className="hover-this btn" ref={addToRefs}>
                <span>Portfolio</span>
              </motion.div>
            </ActionButtons>
          </LeftCol>

          <RightCol>
            <motion.div variants={imageVariants} className="hover-this" ref={addToRefs}>
              <span className="img-container">
                <motion.img 
                  src={illustration} 
                  alt="Illustration" 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
              </span>
            </motion.div>
          </RightCol>
        </ContentArea>

        <div className="cursor" ref={cursorRef}></div>
      </div>
    </Container>
  );
};

export default AboutContent;

let Container = styled.div`
  cursor: none;

  .wrapper {
    width: 100%;
    min-height: 100vh;
    background: #161616;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 2rem 5%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .hover-this {
    transition: all 0.3s;
    display: inline-block;
  }

  span {
    display: inline-block;
    font-family: "Courier New", Courier, monospace;
    font-weight: 300;
    color: #fff;
    pointer-events: none;
    transition: transform 0.1s linear;
  }

  .cursor {
    pointer-events: none;
    position: fixed;
    padding: 0.3rem;
    background-color: #fff;
    border-radius: 50%;
    mix-blend-mode: difference;
    transition: transform 0.3s ease;
    z-index: 9999;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%) scale(1);
  }

  .cursor.active {
    transform: translate(-50%, -50%) scale(8);
  }
`;

const TopNav = styled(motion.div)`
  position: absolute;
  top: 2rem;
  right: 5%;
  display: flex;
  gap: 1.5rem;
  z-index: 10;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
    right: 0;
    left: 0;
    gap: 0.5rem;
  }

  .nav-link span {
    font-size: 0.95rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0.5rem 1.25rem;
    border-radius: 20px;
    font-family: "Poppins", sans-serif;
    text-transform: none;

    @media (max-width: 600px) {
      font-size: 0.85rem;
      padding: 0.25rem 1rem;
    }
  }
`;

const ContentArea = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  z-index: 5;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 650px;

  .greeting {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    text-transform: none;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .name {
    font-size: 4rem;
    font-weight: bold;
    font-family: "Orbitron", sans-serif;
    text-transform: none;
    line-height: 1.1;
    padding-bottom: 2rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }

  .title {
    font-size: 2.75rem;
    font-weight: bold;
    font-family: "Orbitron", sans-serif;
    text-transform: none;
    color: #4da8da;
    display: block;
    text-align: right;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .desc {
    font-size: 1.05rem;
    font-family: "Poppins", sans-serif;
    text-transform: none;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    text-align: justify;
    white-space: normal;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
  justify-content: center;

  .btn span {
    font-size: 1.1rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0.5rem 2rem;
    border-radius: 25px;
    font-family: "Poppins", sans-serif;
    text-transform: none;
  }
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .img-container img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 20px;
    padding: 2rem;

    @media (max-width: 600px) {
      padding: 0rem;
    }
  }
`;
