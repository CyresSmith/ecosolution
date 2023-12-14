import styled from '@emotion/styled';
import theme from 'theme';

const GRID_GAP = '48px';
const GRID_COLUMNS = 'repeat(4, 1fr)';

export const TextBox = styled.div`
  margin-bottom: 36px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    margin-bottom: 100px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    margin-bottom: 120px;
  }
`;

export const Title = styled.h3`
  width: 100%;
  text-align: left;
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.regular};
  font-size: 28px;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 24px;
  width: 320px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    margin-bottom: 0;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    width: 272px;
    font-size: 36px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: 48px;
    width: 365px;
  }
`;

export const Text = styled.p`
  width: 100%;
  letter-spacing: -0.64px;
  text-align: justify;

  @media ${theme.mediaBreakpoints.tablet.media} {
    width: 342px;
    margin-left: auto;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: 459px;
    margin-left: auto;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${p => `repeat(${p.itemsLength}, 1fr)`};
  gap: 48px;
`;

export const GridWrapper = styled.div`
  position: relative;
  height: ${p =>
    `calc(197px * ${p.rowsCount} + ((${p.rowsCount} - 1) * (${GRID_GAP} / 2)))`};

  @media ${theme.mediaBreakpoints.desktop.media} {
    height: ${p =>
      `calc(339px * ${p.rowsCount} + ((${p.rowsCount} - 1) * ${GRID_GAP}))`};
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  gap: ${GRID_GAP};
  grid-template-columns: ${GRID_COLUMNS};
  grid-template-rows: ${p => `repeat(${p.rowsCount}, 197px)`};

  > div:nth-of-type(4n - 3),
  > div:nth-of-type(4n - 1) {
    grid-column: 3 / 5;
  }

  > div:nth-of-type(4n - 2),
  > div:nth-of-type(4n) {
    grid-column: 1 / 5;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    gap: calc(${GRID_GAP} / 2);
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    grid-template-rows: ${p => `repeat(${p.rowsCount}, 339px)`};
  }
`;

export const ListGrid = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  gap: calc(${GRID_GAP} / 2);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: ${p => `repeat(${p.rowsCount}, 197px)`};

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-template-columns: ${GRID_COLUMNS};
    gap: 36px;
    > li:nth-of-type(4n - 3) {
      grid-column: 1 / 2;
    }

    > li:nth-of-type(4n - 2) {
      grid-column: 2 / span 3;
    }

    > li:nth-of-type(4n - 1) {
      grid-column: 3 / 4;
    }

    > li:nth-of-type(4n) {
      grid-column: 4 / 5;
    }
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    gap: calc(${GRID_GAP} / 2);
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    gap: ${GRID_GAP};
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    grid-template-rows: ${p => `repeat(${p.rowsCount}, 339px)`};
  }
`;
