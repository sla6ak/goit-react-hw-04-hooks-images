import { BoxLoader } from './Loader.styled';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <BoxLoader>
      <BallTriangle
        height="150"
        width="150"
        color="tomato"
        ariaLabel="loading"
      />
    </BoxLoader>
  );
};