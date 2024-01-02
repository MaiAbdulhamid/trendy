import TextInput from "@/app/[locale]/components/Form/TextInput";
import { H2, H4, P4 } from "@/app/[locale]/components/Typography";
import { Form } from "@mongez/react-form";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Card } from "./style";
import { Grid } from "@mantine/core";
import { Col, Flex } from "@/app/[locale]/components/Grids";
import DateInput from "@/app/[locale]/components/Form/DateInput";
import SelectInput from "@/app/[locale]/components/Form/SelectInput";
import SubmitButton from "@/app/[locale]/components/Form/SubmitButton";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import axiosInstance from "@/app/[locale]/lib/axios";
import cache from "@mongez/cache";
import EmailInput from "@/app/[locale]/components/Form/EmailInput";
import Button from "@/app/[locale]/components/Button/Button";
import PhoneNumberInput from "@/app/[locale]/components/Form/PhoneNumberInput";
import theme from "@/app/[locale]/utils/theme";
import { useDisclosure } from "@mantine/hooks";
import NewPasswordModal from "../NewPasswordModal";
import ChangeEmailModal from "../ChangeEmailModal";
import ChangePhoneModal from "../ChangePhoneModal";
import DeleteAccountModal from "../DeleteAccountModal";

const ProfileForm = () => {
  const [user, setUser] = useState<any>(cache.get('user'));
  const trans = useTranslations("Profile");
  const [
    openedNewPassword,
    { open: openNewPassword, close: closeNewPassword },
  ] = useDisclosure(false);

  const [
    openedChangeEmail,
    { open: openChangeEmail, close: closeChangeEmail },
  ] = useDisclosure(false);

  const [
    openedChangePhone,
    { open: openChangePhone, close: closeChangePhone },
  ] = useDisclosure(false);

  const [
    openedDeleteAccount,
    { open: openDeleteAccount, close: closeDeleteAccount },
  ] = useDisclosure(false);

  const onUpdateInfo = async ({form, values}: any) => {
    try {
      const response = await axiosInstance.post('user/update-profile', { ...values })
      cache.set('user', response.data.data);

      showNotification({
        type: "success",
        message: response.data.message,
      });
    } catch (error : any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    }
  }

  return (
    <>
      <H2>{trans("profile")}</H2>
      <P4>{trans("profileSubTitle")}</P4>
      <Card>
        <H4>{trans('generalInfo')}</H4>
        <Form onSubmit={onUpdateInfo}>
          <Grid>
            <Col span={{ base: 12, md: 4 }}>
              <TextInput
                name="full_name"
                label={"fullname"}
                placeholder={"fullname"}
                defaultValue={user?.full_name}
                required
              />
            </Col>
            <Col span={{ base: 12, md: 4 }}>
              <DateInput
                name="dob"
                label={"dateOfBirth"}
                placeholder={trans("date")}
                defaultValue={new Date(user?.dob)}
                required
                icon
              />
            </Col>
            <Col span={{ base: 12, md: 4 }}>
              <SelectInput
                name="gender"
                label="gender"
                data={[
                  { label: trans("male"), value: "1" },
                  { label: trans("female"), value: "2" },
                  { label: trans("other"), value: "3" },
                ]}
                defaultValue={user?.gender}
                required
                clearable
              />
            </Col>
          </Grid>
          <SubmitButton className="update--profile">
            <P4>{trans('updateInfo')}</P4>
          </SubmitButton>
        </Form>
      </Card>
      <Card>
        <H4>{trans('security')}</H4>
        <Form onSubmit={onUpdateInfo}>
          <Grid>
            <Col span={{ base: 12, md: 6 }}>
              <EmailInput
                name="email"
                label={"email"}
                placeholder={"email"}
                defaultValue={user?.email}
                required
              />
            </Col>
            <Col span={{ base: 12, md: 6 }}>
              <PhoneNumberInput
                name="phone"
                label={"phoneNumber"}
                placeholder={trans("phoneNumber")}
                defaultValue={user?.phone}
                required
                icon
              />
            </Col>
          </Grid>
          <Flex gap="1rem" align="center">
            <Button variant="outline" className="outline" onClick={openChangeEmail}>
              <P4>{trans('changeEmail')}</P4>
            </Button>
            <Button variant="outline" className="outline" onClick={openNewPassword}>
              <P4>{trans('changePassword')}</P4>
            </Button>
            <Button variant="outline" className="outline" onClick={openChangePhone}>
              <P4>{trans('addPhoneNumber')}</P4>
            </Button>
            <Button noStyle onClick={openDeleteAccount}>
              <P4 color={theme.colors.error[300]}>{trans('deleteAccount')}</P4>
            </Button>
          </Flex>
        </Form>
      </Card>
      <NewPasswordModal
        opened={openedNewPassword}
        close={closeNewPassword}
      />
      <ChangeEmailModal
        opened={openedChangeEmail}
        close={closeChangeEmail}
      />
      <ChangePhoneModal 
        opened={openedChangePhone}
        close={closeChangePhone}
      />
      <DeleteAccountModal
        opened={openedDeleteAccount}
        close={closeDeleteAccount}
      />
    </>
  );
};

export default ProfileForm;
