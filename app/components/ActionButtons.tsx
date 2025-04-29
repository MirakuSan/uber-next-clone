import Image from 'next/image';
import tw from 'tailwind-styled-components';

const ActionButtons = () => (
  <ButtonsContainer>
    <ActionButton>
      <ActionButtonImage as={Image} src={'/images/uberx.png'} width={80} height={80} alt="Ride" />
      Ride
    </ActionButton>
    <ActionButton>
      <ActionButtonImage as={Image} src={'/images/bike.png'} width={80} height={80} alt="Wheels" />
      Wheels
    </ActionButton>
    <ActionButton>
      <ActionButtonImage as={Image} src={'/images/uberschedule.png'} width={80} height={80} alt="Reserve" />
      Reserve
    </ActionButton>
  </ButtonsContainer>
);

export default ActionButtons;

const ButtonsContainer = tw.div`
  flex
`;

const ActionButton = tw.div`
  bg-gray-200 flex-1 m-2 h-32 flex flex-col items-center justify-center rounded-lg
  transform hover:scale-105 transition text-xl font-semibold
`;

const ActionButtonImage = tw.img`
  h-3/5
`; 
