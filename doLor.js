import styled from 'styled-components';

interface AdditionalProps {
  size: string;
}

const MyComponent = styled.div.attrs<AdditionalProps>(({ size }) => ({
  style: {
    fontSize: size,
  },
}))``;

const App = () => {
  return <MyComponent size="20px">Hello, world!</MyComponent>;
};
