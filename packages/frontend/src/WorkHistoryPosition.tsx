import React, { useState } from "react";
import styled from "styled-components";

import type { BackendTypes } from "./types";

interface WorkHistoryPositionProps {
  position: BackendTypes.WorkHistoryPosition;
}

interface AchievementSectionProps {
  expanded: boolean;
}

const PositionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const PositionTimestamp = styled.span`
  color: ${({ theme }) => theme.colors.neutral.base};
`;

const AchievementSection = styled.ul<AchievementSectionProps>`
  margin: 0px;
`;

export const WorkHistoryPositionSection = ({
  position,
}: WorkHistoryPositionProps): JSX.Element => {
  const { name, start, end = "Present", achievements } = position;
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <PositionHeader onClick={() => setExpanded(!expanded)}>
        <h4>{name}</h4>
        <PositionTimestamp>
          {start} - {end}
        </PositionTimestamp>
      </PositionHeader>
      <AchievementSection expanded={expanded}>
        {achievements.map((ach, index) => (
          <li key={`${name}-${index}`}>{ach}</li>
        ))}
      </AchievementSection>
    </>
  );
};
