import React from "react";
import styled, { useTheme } from "styled-components";
import type { ThemeColors, ColorMap } from "./theme";

interface ColorPaletteProps {}
interface ColorSquareProps {
  color: string;
}
const ColorSquare = styled.div<ColorSquareProps>`
  height: 40px;
  width: 40px;
  background-color: ${({ color }) => color};
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

type ColorGroupName = keyof ThemeColors;
type GroupColorName = keyof ColorMap;

export const ColorPalette = (props: ColorPaletteProps): JSX.Element => {
  const { colors } = useTheme();
  const colorGroups = (Object.keys(colors) as unknown) as ColorGroupName[];
  return (
    <>
      {colorGroups.map((groupName) => {
        const groupColors = (Object.keys(
          colors[groupName]
        ) as unknown) as GroupColorName[];
        return (
          <>
            <div>{groupName}</div>
            <ColorContainer>
              {groupColors.map((colorName) => (
                <ColorSquare color={colors[groupName][colorName]} />
              ))}
            </ColorContainer>
          </>
        );
      })}
    </>
  );
};
