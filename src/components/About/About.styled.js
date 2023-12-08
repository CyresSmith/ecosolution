import styled from '@emotion/styled';

const GRID_GAP = '48px';
const GRID_COLUMNS = 'repeat(4, 1fr)';

export const TopBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 161px;
  margin-bottom: 124px;
`;

export const Text = styled.p`
  text-align: justify;
  letter-spacing: -0.64px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${p => `repeat(${p.itemsLength}, 1fr)`};
  gap: 48px;
`;

export const GridWrapper = styled.div`
  position: relative;
`;

export const ImagesGrid = styled.div`
  display: grid;
  gap: ${GRID_GAP};
  grid-template-columns: ${GRID_COLUMNS};
  grid-template-rows: ${p => `repeat(${p.rowsCount}, 1fr)`};

  > div:nth-of-type(4n - 3),
  > div:nth-of-type(4n - 1) {
    grid-column: 3 / 5;
  }

  > div:nth-of-type(4n - 2),
  > div:nth-of-type(4n) {
    grid-column: 1 / 5;
  }
`;

export const ListGrid = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  gap: ${GRID_GAP};
  grid-template-columns: ${GRID_COLUMNS};
  grid-template-rows: ${p => `repeat(${p.rowsCount}, 1fr)`};

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
`;
