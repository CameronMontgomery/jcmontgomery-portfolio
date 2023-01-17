import Typed from 'react-typed';
import heroImage from '../assets/cameron-headshot.jpg';
import background from '../assets/computer-black-code.jpg';

const Hero = () => {
  return (
    <div
      className='font-gruppo flex h-[450px] flex-wrap bg-cover bg-center text-white'
      style={{
        'background-image': `url(${background})`,
      }}
    >
      <div className='flex w-full flex-col justify-center pl-14 text-xl md:basis-1/2 md:pl-10 md:text-2xl lg:pl-20 lg:text-3xl'>
        <h2>Hi, I&#39;m Cameron</h2>
        <Typed
          className=''
          strings={[
            'I am a Full-stack Developer',
            'I am a Freelancer',
            'I am a Father',
            'I am a Blogger',
            'I am a Front-end Developer',
            'I am a Technical Writer',
            'I am a Back-end Developer',
            'I am a Marine Veteran',
          ]}
          typeSpeed={40}
          backSpeed={50}
          backDelay={1000}
          smartBackspace
          loop
        >
          <input
            className='pointer-events-none w-full bg-transparent'
            type='text'
          />
        </Typed>
      </div>

      <div className='flex w-full items-center justify-center md:basis-1/2'>
        <img
          className='h-auto max-w-[250px] rounded-[20%] md:max-w-[300px] lg:max-w-[350px]'
          src={heroImage}
          alt='Site owner, Cameron, head shot'
        />
      </div>
    </div>
  );
};

export default Hero;
