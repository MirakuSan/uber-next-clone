import Image from 'next/image';
import tw from 'tailwind-styled-components';

type HeaderProps = {
  name: string;
  profileImageSrc: string;
};

export default function Header({ name, profileImageSrc }: HeaderProps) {
  return (
    <HeaderContainer>
      <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
      <Profile>
        <Name>{name}</Name>
        <UserImage as={Image} src={profileImageSrc} alt="Profile picture" />
      </Profile>
    </HeaderContainer>
  );
}

const HeaderContainer = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 text-sm font-semibold
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`; 
