import React from "react";
import { Accordion } from "@mantine/core";

const Question = ({ question }: any) => {
  console.log(question.question);
  return (
    <Accordion.Item value={question.question}>
      <Accordion.Control>
        {question.question}
      </Accordion.Control>{" "}
      <Accordion.Panel>{question.answer}</Accordion.Panel>
    </Accordion.Item>
  );
};

export default Question;
