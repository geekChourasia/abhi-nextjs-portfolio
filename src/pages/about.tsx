import React from "react";
import {
  Container,
  Divider,
  SlideFade,
  Heading,
  Flex,
  Stack,
  Box,
  VStack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MotionBox } from "../utils/motion";
import { companies, educations } from "../constant";
import CompanyCard from "../components/CompanyCard";
import Paragraph from "../components/Paragraph";
import { UnderlinedText } from "../components/UnderlinedText";
import {
  PageSlideFade,
  StaggerChildren,
} from "../utils/animations/page-transitions";
// import Typography from '@mui/material/Typography';

function About() {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
      <PageSlideFade>
        <StaggerChildren>
          <UnderlinedText>
            <Flex alignItems={"center"}>
              <Stack pr={3}>
                <AiFillStar size={"30px"} />
              </Stack>
              <Heading>About Me</Heading>
            </Flex>
          </UnderlinedText>

          <Paragraph textProps={{ fontSize: "lg", lineHeight: 1.6, my: 5 }}>
          Experienced Full Stack Engineer with 2.5+ years in ReactJS, TypeScipt, HTML, CSS, MUI, Redux, Node JS, SQL  and JavaScript. Proficient in Material UI, ECMAScript, Node.js, and MongoDB. Collaborative team player crafting dynamic, responsive, and visually engaging web apps. Currently mastering Next.js for more advanced web development. Eager to embrace new challenges! 🔥
          </Paragraph>

          <Flex alignItems="center" my={10}>
            <Flex alignItems={"center"}>
              <Stack pr={3}>
                <BsFillBriefcaseFill size={"30px"} />
              </Stack>

              <Heading>Career</Heading>
            </Flex>
          </Flex>

          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={5}
          >
            {companies.map((company, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <CompanyCard
                  key={index}
                  company={company}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>

          <Flex alignItems="center" my={10}>
            <Flex alignItems="center">
              <Stack pr={3}>
                <FaGraduationCap size={"30px"} />
              </Stack>
              <Heading>Education</Heading>
            </Flex>
          </Flex>

          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={5}
          >
            {educations.map((education, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <CompanyCard
                  key={index}
                  company={education}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </Container>
  );
}

export default About;
