import linkedIn from '../assets/linkedin-blue-circle.svg';
import github from '../assets/github-blk.svg';
import discord from '../assets/discord-purple.svg';

const SocialBadges = () => {
  return (
    <div className='flex items-center justify-center border'>
      {/* Using rel='noopener' */
      /* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href='https://www.discordapp.com/users/1046924165787156581'
        rel='noopener'
        target='_blank'
        className='mr-1'
      >
        <img
          className='max-w-[1.75rem] transition duration-300 ease-in-out hover:scale-110'
          src={discord}
          alt='Discord Logo'
        />
      </a>
      {/* Using rel='noopener' */
      /* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href='https://www.linkedin.com/in/jcameronmontgomery/'
        rel='noopener'
        target='_blank'
        className='mr-1'
      >
        <img
          className='max-w-[1.75rem] transition duration-300 ease-in-out hover:scale-110'
          src={linkedIn}
          alt='LinkedIn Logo'
        />
      </a>
      {/* Using rel='noopener' */
      /* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href='https://github.com/CameronMontgomery'
        target='_blank'
        rel='noopener'
      >
        <img
          className='max-w-[1.75rem] transition duration-300 ease-in-out hover:scale-110'
          src={github}
          alt='GitHub Logo'
        />
      </a>
    </div>
  );
};

export default SocialBadges;
