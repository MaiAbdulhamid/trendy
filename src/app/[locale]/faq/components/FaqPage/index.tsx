import axiosInstance from "@/app/[locale]/lib/axios";
import React, { useEffect, useState } from "react";
import { Accordion } from "@mantine/core";
import Question from "../Question";
import { Container, Flex } from "@/app/[locale]/components/Grids";
import { FaqPageWrapper, QuestionsWrapper } from "./style";
import { H2 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";

const FaqPage = () => {
  const trans = useTranslations('Faq');

  const [questions, setQuestions] = useState<any>();

  const getQuestions = async () => {
    try {
      const response: any = await axiosInstance.get("faq");
      setQuestions(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <FaqPageWrapper>
      <Container>
        <H2>{trans("faq")}</H2>
        <QuestionsWrapper>
          <Accordion>
            <Flex gap="1rem" direction="column" fullWidth fullHeight>
              {questions?.map((q: any) => (
                <Question key={q.id} question={q} />
              ))}
            </Flex>
          </Accordion>
        </QuestionsWrapper>
      </Container>
    </FaqPageWrapper>
  );
};

export default FaqPage;
