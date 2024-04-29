import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";
import { Group } from "@mantine/core";

export const PageContainer = styled.div`
  overflow: hidden;
`;

export const HeadingBox = styled.div`
  margin: 6px 0 25px 0;
`;

export const BadgeContainer = styled(Group)`
  .mantine-Badge-inner {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .rate--badge {
    background: #ffa000;
  }
  .model--badge {
    background: #eee7e5;
    color: ${theme.colors.primaryColor};
  }
  .available--badge {
    background: #00b63f;
    p {
      color: #fff;
    }
  }
`;
export const Padding = styled.div`
  padding: 1rem 0;
`;
