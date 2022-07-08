import styled from "styled-components";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

export const Container = styled.div<LogoProps>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  width: ${(props) =>
    props.size === "large" ? "64px" : props.size === "small" ? "40px" : "56px"};
  height: ${(props) =>
    props.size === "large" ? "64px" : props.size === "small" ? "40px" : "56px"};
`;
