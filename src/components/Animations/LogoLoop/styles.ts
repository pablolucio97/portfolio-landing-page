import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;

  --logoloop-gap: 32px;
  --logoloop-logo-height: 48px;
  --logoloop-fade-color: ${({ theme }) => theme.colors.background_secondary};

  &.logoloop--scale-hover {
    padding-top: calc(var(--logoloop-logo-height) * 0.12);
    padding-bottom: calc(var(--logoloop-logo-height) * 0.12);
  }

  .logoloop__track {
    display: flex;
    width: max-content;
    position: relative;
    z-index: 0;
    user-select: none;
    will-change: transform;
  }

  .logoloop__list {
    display: flex;
    align-items: center;
  }

  .logoloop__item {
    flex: 0 0 auto;
    margin-right: var(--logoloop-gap);
    line-height: 1;
  }

  .logoloop__item:last-child {
    margin-right: var(--logoloop-gap);
  }

  .logoloop__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 176px;
    height: calc(var(--logoloop-logo-height) + 32px);
    padding: 0 24px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white100};
    box-shadow: ${({ theme }) => theme.shadows.soft};
    transition: opacity 200ms ease, transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .logoloop__link:hover {
    opacity: 0.9;
  }

  .logoloop__link:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }

  .logoloop__item img {
    display: block;
    width: auto;
    height: var(--logoloop-logo-height);
    object-fit: contain;
    filter: grayscale(100%) sepia(100%) hue-rotate(200deg);
    image-rendering: -webkit-optimize-contrast;
    pointer-events: none;
    -webkit-user-drag: none;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.logoloop--scale-hover .logoloop__item:hover .logoloop__link,
  &.logoloop--scale-hover .logoloop__item:hover img {
    transform: scale(1.06);
  }

  &.logoloop--fade::before,
  &.logoloop--fade::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    width: clamp(40px, 10%, 140px);
    pointer-events: none;
  }

  &.logoloop--fade::before {
    left: 0;
    background: linear-gradient(to right, var(--logoloop-fade-color), rgba(255, 255, 255, 0));
  }

  &.logoloop--fade::after {
    right: 0;
    background: linear-gradient(to left, var(--logoloop-fade-color), rgba(255, 255, 255, 0));
  }

  @media (max-width: 768px) {
    --logoloop-logo-height: 36px;
    --logoloop-gap: 20px;

    .logoloop__link {
      min-width: 148px;
      height: calc(var(--logoloop-logo-height) + 28px);
      padding: 0 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .logoloop__track {
      transform: translate3d(0, 0, 0) !important;
    }

    .logoloop__link,
    .logoloop__item img {
      transition: none !important;
    }
  }
`;
