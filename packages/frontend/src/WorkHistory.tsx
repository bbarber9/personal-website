import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getWorkHistory } from "./serverAPI";
import { WorkHistoryPositionSection } from "./WorkHistoryPosition";
import { Spinner } from "./Spinner";
import type { BackendTypes } from "./types";

export interface WorkHistoryProps {}

export const WorkHistory = (props: WorkHistoryProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [workHistory, setWorkHistory] = useState<
    BackendTypes.WorkHistoryCompany[]
  >([]);

  useEffect(() => {
    getWorkHistory()
      .then((res) => {
        setWorkHistory(res.companies);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {workHistory.map((company) => (
        <div key={company.name}>
          <h3>
            <a href={company.link} target="_blank" rel="noreferrer">
              {company.name}
            </a>
          </h3>
          {company.positions.map((position) => (
            <WorkHistoryPositionSection
              position={position}
              key={position.name}
            />
          ))}
        </div>
      ))}
    </>
  );
};
