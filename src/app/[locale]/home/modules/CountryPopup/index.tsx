"use client";
import React, { useEffect, useState } from "react";
import { ModalWrapper } from "./style";
import { Modal } from "@mantine/core";
import axiosInstance from "@/app/[locale]/lib/axios";
import SelectInput from "@/app/[locale]/components/Form/SelectInput";
import { setCookie } from "cookies-next";

interface ModalProps {
  opened: boolean;
  close: any;
}
const CountryPopup = ({ opened, close }: ModalProps) => {
  const [countries, setCountries] = useState<any>([]);

  const getCountries = async () => {
    try {
      const response: any = await axiosInstance.get("countries");
      const filteredCountries = response.data.data.data.map((c: any) => {
        return {
          label: c.name,
          value: String(c.id),
        };
      });
      setCountries(filteredCountries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const onChangeHandler = async (value: any) => {
    setCookie("country", value);
    const response: any = await axiosInstance.get("countries");
    setCookie(
      "country_object",
      response.data.data.data.find((c: any) => c.id == value)
    );
    // close();
    window.location.reload();
  };
  if (!countries) return null;
  return (
    <>
      <Modal.Root
        opened={opened}
        onClose={close}
        size="xl"
        centered
        closeOnClickOutside={false}
      >
        <Modal.Overlay />
        <Modal.Content style={{ padding: "0" }}>
          <Modal.Body style={{ padding: "0" }}>
            <ModalWrapper>
              <SelectInput
                name="country"
                label="country"
                data={countries}
                // defaultValue={"3"}
                onChange={onChangeHandler}
                clearable
              />
            </ModalWrapper>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default CountryPopup;
