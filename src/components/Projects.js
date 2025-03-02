import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import karbon from "../assets/blog/karbon.png";
import fintech from "../assets/blog/fintech.png";
import ikincisummit from "../assets/blog/ikincisummit.png";
import opensource from "../assets/blog/opensource.png";
import partOne from "../assets/blog/partone.png";
import research from "../assets/blog/research.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import gdsc1 from "../assets/blog/gdsc1.png";
import gdsc2 from "../assets/blog/gdsc2.png";
import entre from "../assets/blog/entre.png";
import oyt from "../assets/blog/oyt.png";
import stajlar from "../assets/blog/stajlar.png";
import ybl from "../assets/blog/ybl.png";
import gitcolor from "../assets/blog/gitcolor.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "İş Bank & Sabancı",
      description: "Business Development & IT Intern",
      imgUrl: stajlar,
      link: "https://www.linkedin.com/in/arya-zeynep-mete-a1a775216/details/experience/",
    },
    {
      title: "Google Developer Students Club",
      description: "Hacettepe University Leader Part-1",
      imgUrl: gdsc1,
      link: "https://www.linkedin.com/in/arya-zeynep-mete-a1a775216/details/experience/",
    },
    {
      title: "Google Developer Students Club",
      description: "Hacettepe University Leader Part-2",
      imgUrl: gdsc2,
      link: "https://www.linkedin.com/in/arya-zeynep-mete-a1a775216/details/experience/",
    },
    {
      title: "Wordbaze",
      description: "Co-Founder & Project Manager",
      imgUrl: entre,
      link: "https://www.linkedin.com/in/arya-zeynep-mete-a1a775216/details/experience/",
    },
    {
      title: "Yenibirlider Derneği",
      description: "Fellow",
      imgUrl: ybl,
      link: "https://www.linkedin.com/in/arya-zeynep-mete-a1a775216/details/experience/",
    },
    {
      title: "Hacettepe Free Software Society",
      description: "Vice President",
      imgUrl: oyt,
      link: "https://www.linkedin.com/in/arya-zeynep-mete-a1a775216/details/experience/",
    },
  ];

  const blogs = [
    {
      title: "Yapay Zeka mı, İnsan mı?",
      description: "Karbon Ayak İzi Üzerine Bir İnceleme",
      imgUrl: karbon,
      link: "https://www.yapayzekafabrikasi.com.tr/post/yapay-zeka-mi-i-nsan-mi-karbon-ayak-i-zi-%C3%BCzeri-ne-bi-r-i-nceleme", // Add the link here
    },
    {
      title: "Research on AI Acceleration Programs",
      description: "and VC/CVC in Türkiye and Globally",
      imgUrl: research,
      link: "https://aryazeynepmete.medium.com/research-on-ai-acceleration-programs-and-vc-cvc-in-t%C3%BCrkiye-and-globally-8e054f122815",
    },
    {
      title: "Fintech ve Yapay Zeka:",
      description: "Dönüşen Finans Dünyası",
      imgUrl: fintech,
      link: "https://aryazeynepmete.medium.com/fintech-ve-yapay-zeka-d%C3%B6n%C3%BC%C5%9Fen-finans-d%C3%BCnyas%C4%B1-cf723ef6d25e",
    },
    {
      title: "2. Summit'ten Kariyer Hikayeleri:",
      description: "6 Sektör, 6 Uzman",
      imgUrl: ikincisummit,
      link: "https://aryazeynepmete.medium.com/2-summitten-kariyer-hikayeleri-6-sekt%C3%B6r-6-uzman-69638189ac19",
    },
    {
      title: "4'ten 7'ye Liderlik ve İletişim",
      description: "Part 1",
      imgUrl: partOne,
      link: "https://medium.com/@aryazeynepmete/4ten-7-ye-liderlik-ve-i%CC%87leti%C5%9Fim-part-1-a31bfbfea581",
    },
    {
      title: "Açık Kaynak Felsefesi",
      description: "ve 6 Şubat Depremleri",
      imgUrl: opensource,
      link: "https://aryazeynepmete.medium.com/a%C3%A7%C4%B1k-kaynak-felsefesi-ve-6-%C5%9Fubat-depremleri-5ab5e189be09",
    },
  ];

  const github = [
    {
      title: "Personal Portfolio",
      description: "Karbon Ayak İzi Üzerine Bir İnceleme",
      imgUrl: gitcolor,
      link: "https://www.yapayzekafabrikasi.com.tr/post/yapay-zeka-mi-i-nsan-mi-karbon-ayak-i-zi-%C3%BCzeri-ne-bi-r-i-nceleme", // Add the link here
    },
    {
      title: "Eco Friendly Power Grid Optimization",
      description: "Dynamic Programming - Java",
      imgUrl: gitcolor,
      link: "https://github.com/aryazeynep/Eco-Friendly-Power-Grid-Optimization",
    },
    {
      title: "Algorithm Complexity Analysis",
      description: "Sorting and Searching Algorithms Analysis - Java",
      imgUrl: gitcolor,
      link: "https://github.com/aryazeynep/Algorithm-Complexity-Analysis",
    },
    {
      title: "GNU_Linux_System_Administration_Notes",
      description: "Linux Sistem Yönetimi 1. Düzey Ders Notları",
      imgUrl: gitcolor,
      link: "https://github.com/aryazeynep/GNU_Linux_System_Administration_Notes",
    },
    {
      title: "Competitive-Programming",
      description: "Competitive Programming Solutions - C++",
      imgUrl: gitcolor,
      link: "https://github.com/aryazeynep/Competitive-Programming",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>All my favorite Projects & Blogs & Tech Organizations & Internships in one place &#58;)</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tech Blogs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Internships & Orgs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GitHub Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>A few of the technical blog posts I have published on Medium and during my internship at İşbank AI Factory</p>
                      <Row>
                        {
                          blogs.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>My past internships, the events we organized in the communities I led, our venture, fellowship, and leadership programs</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My GitHub projects, consisting of personal hobby projects and university assignments</p>
                      <Row>
                        {
                          github.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
