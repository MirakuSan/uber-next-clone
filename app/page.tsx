import tw from 'tailwind-styled-components';
import ActionButtons from './components/ActionButtons';
import Header from './components/Header';
import Map from './components/Map';

export default function Home() {
  return (
    <Wrapper>
      <Map center={[5.87824, 45.2819]} zoom={10.12} />
      <ActionItems>
        <Header name="Damien Carrier" profileImageSrc="/images/pp.png" />
        <ActionButtons />
        {/* InputButton */}
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl font-semibold p-4 flex items-center mt-8
`;
