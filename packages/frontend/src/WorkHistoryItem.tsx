import React from "react";
import styled from "styled-components";

export interface WorkHistoryItemProps {
  start: string;
  end?: string;
  company: string;
  title: string;
}

const JobTitle = styled.span`
  font-weight: bold;
`;

const CompanyTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary.normal};
`;

const TimeStamp = styled.span`
  color: ${({ theme }) => theme.colors.text.light};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WorkHistoryItem = (props: WorkHistoryItemProps): JSX.Element => {
  const { title, company, start, end = "Present" } = props;
  return (
    <Header>
      <div>
        <JobTitle>{title}</JobTitle>
        <span> at </span>
        <CompanyTitle>{company}</CompanyTitle>
      </div>
      <TimeStamp>
        {start} - {end}
      </TimeStamp>
    </Header>
  );
};
