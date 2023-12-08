import { Box } from './ImageBox.styled';

const ImageBox = ({ width, height = 'auto', src }) => {
  return (
    <Box width={width} height={height}>
      <img src={src} />
    </Box>
  );
};

export default ImageBox;
