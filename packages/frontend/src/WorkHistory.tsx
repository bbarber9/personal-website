import React, { useState } from "react";
import styled from "styled-components";
import { getWorkHistory } from "./dataUtils";
import type { WorkHistoryCompany } from "./types";
import { WorkHistoryPositionSection } from "./WorkHistoryPosition";

export interface WorkHistoryProps {}

export const WorkHistory = (props: WorkHistoryProps): JSX.Element => {
  const [workHistoryItems, setWorkHistoryItems] = useState<
    WorkHistoryCompany[]
  >(getWorkHistory());
  return (
    <>
      {workHistoryItems.map((company) => (
        <>
          <h3>
            <a href={company.link} target="_blank" rel="noreferrer">
              {company.name}
            </a>
          </h3>
          {company.positions.map((position) => (
            <WorkHistoryPositionSection position={position} />
          ))}
        </>
      ))}
    </>
  );
};
