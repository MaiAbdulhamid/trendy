"use client";
import React, { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Flex } from "../../../components/Grids";
import SubmitButton from "../../../components/Form/SubmitButton";
import PhoneNumberInput from "@/app/[locale]/components/Form/PhoneNumberInput";
import { useFormControl } from "@mongez/react-form";

interface ModalProps {
  callback?: any;
  reset?: any;
  isLoading?: any;
}
const VerificationInputs = ({ callback, reset, isLoading }: ModalProps) => {
  const trans = useTranslations("Auth");
  const [code, setCode] = useState("");

  // Refs to control each digit input element
  const inputRefs: any = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Reset all inputs and clear state
  const resetCode = () => {
    inputRefs.forEach((ref: any) => {
      ref.current.value = "";
    });
    inputRefs[0].current.focus();
    setCode("");
  };

  // Call our callback when code = 4 chars
  useEffect(() => {
    if (code.length === 4) {
      if (typeof callback === "function") callback(code);
      resetCode();
    }
  }, [code]); //eslint-disable-line

  // Listen for external reset toggle
  // useEffect(() => {
  //   resetCode();
  // }, [reset]); //eslint-disable-line

  // Handle input
  function handleInput(e: any, index: number) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    // Update code state with single digit
    const newCode = [...(code as any)];
    // Convert lowercase letters to uppercase
    if (/^[a-z]+$/.test(input.value)) {
      const uc = input.value.toUpperCase();
      newCode[index] = uc;
      inputRefs[index].current.value = uc;
    } else {
      newCode[index] = input.value;
    }
    setCode(newCode.join(""));

    input.select();

    if (input.value === "") {
      // If the value is deleted, select previous input, if exists
      if (previousInput) {
        previousInput.current.focus();
      }
    } else if (nextInput) {
      // Select next input on entry, if exists
      nextInput.current.select();
    }
  }

  // Select the contents on focus
  function handleFocus(e: any) {
    e.target.select();
  }

  // Handle backspace key
  function handleKeyDown(e: any, index: number) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    if ((e.keyCode === 8 || e.keyCode === 46) && input.value === "") {
      e.preventDefault();
      setCode(
        (prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1)
      );
      if (previousInput) {
        previousInput.current.focus();
      }
    }
  }

  // Capture pasted characters
  const handlePaste = (e: any) => {
    const pastedCode = e.clipboardData.getData("text");
    if (pastedCode.length === 6) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef: any, index: number) => {
        inputRef.current.value = pastedCode.charAt(index);
      });
    }
  };

  return (
    <Flex gap="1rem" justify="center" fullWidth>
      {[0, 1, 2, 3].map((index) => (
        <input
          name="code"
          className="code-input"
          key={index}
          type="text"
          maxLength={1}
          onChange={(e) => handleInput(e, index)}
          ref={inputRefs[index]}
          autoFocus={index === 0}
          onFocus={handleFocus}
          onKeyDown={(e: any) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          disabled={isLoading}
        />
      ))}
    </Flex>
  );
};

export default VerificationInputs;
