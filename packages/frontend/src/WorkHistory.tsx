import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getWorkHistory } from "./dataUtils";
import type { WorkHistoryCompany } from "./types";
import { WorkHistoryPositionSection } from "./WorkHistoryPosition";

export interface WorkHistoryProps {}

export const WorkHistory = (props: WorkHistoryProps): JSX.Element => {
  const [workHistoryItems, setWorkHistoryItems] = useState<
    WorkHistoryCompany[]
  >([]);
  useEffect(() => {
    setWorkHistoryItems(getWorkHistory());
  }, []);
  return (
    <>
      {workHistoryItems.map((company) => (
        <>
          <a href={company.link} target="_blank" rel="noreferrer">
            <h3>{company.name}</h3>
          </a>
          {company.positions.map((position) => (
            <WorkHistoryPositionSection position={position} />
          ))}
        </>
      ))}
    </>
  );
};
