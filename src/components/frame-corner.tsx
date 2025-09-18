import Image from 'next/image';

interface FrameCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

interface DecorativeFrameProps {
  className?: string;
}

export const FrameCorner = ({ position, className = '' }: FrameCornerProps) => {
  const getRotationClass = () => {
    switch (position) {
      case 'top-right':
        return 'rotate-90';
      case 'bottom-right':
        return 'rotate-180';
      case 'bottom-left':
        return '-rotate-90';
      default:
        return '';
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case 'top-left':
        return 'top-6 left-6 sm:top-8 sm:left-8 md:top-12 md:left-12';
      case 'top-right':
        return 'top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12';
      case 'bottom-right':
        return 'bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12';
      case 'bottom-left':
        return 'bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12';
    }
  };

  return (
    <div className={`absolute ${getPositionClass()} ${className}`}>
      <div
        className={`relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 ${getRotationClass()}`}
      >
        <Image
          src='/assets/images/frame-corner.png'
          alt='Frame corner'
          fill
          className='object-contain'
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
};

export const DecorativeFrame = ({ className = '' }: DecorativeFrameProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* outer lines */}
      <div className='absolute inset-0'>
        {/* Top line */}
        <div
          className='absolute top-[29] left-[88] right-[88] h-0.25 bg-black/100
          sm:top-[40] sm:left-[128] sm:right-[128] sm:h-0.5
          md:top-[59] md:left-[174] md:right-[174]'
        />

        {/* Bottom line */}
        <div
          className='absolute bottom-[29] left-[87] right-[87] h-0.25 bg-black/100 
          sm:bottom-[40] sm:left-[127] sm:right-[127] sm:h-0.5
          md:bottom-[58] md:left-[175] md:right-[175]'
        />

        {/* Left line */}
        <div
          className='absolute left-[29] top-[87] bottom-[87] w-0.25 bg-black/100 
          sm:left-[40] sm:top-[126] sm:bottom-[126] sm:w-0.5
          md:left-[58] md:top-[175] md:bottom-[175]'
        />

        {/* Right line */}
        <div
          className='absolute right-[29] top-[87] bottom-[87] w-0.25 bg-black/100 
          sm:right-[40] sm:top-[127] sm:bottom-[126] sm:w-0.5
          md:right-[58] md:top-[175] md:bottom-[175]'
        />
      </div>

      {/* inner lines */}
      <div className='absolute inset-0'>
        {/* Top line */}
        <div
          id='top-line'
          className='absolute top-[33] left-[88] right-[88] h-0.25 bg-black/100
          sm:top-[46] sm:left-[128] sm:right-[128] sm:h-0.5
          md:top-[67] md:left-[174] md:right-[174]'
        />

        {/* Bottom line */}
        <div
          className='absolute bottom-[34] left-[87] right-[87] h-0.25 bg-black/100 
          sm:bottom-[46] sm:left-[127] sm:right-[127] sm:h-0.5
          md:bottom-[67] md:left-[175] md:right-[175]'
        />

        {/* Left line */}
        <div
          className='absolute left-[33] top-[87] bottom-[87] w-0.25 bg-black/100 
          sm:left-[46] sm:top-[126] sm:bottom-[126] sm:w-0.5
          md:left-[67] md:top-[175] md:bottom-[175]'
        />

        {/* Right line */}
        <div
          className='absolute right-[33] top-[87] bottom-[87] w-0.25 bg-black/100 
          sm:right-[46] sm:top-[126] sm:bottom-[126] sm:w-0.5
          md:right-[67] md:top-[175] md:bottom-[175]'
        />
      </div>
    </div>
  );
};

{
  /* Original SVG-based lines */
}
{
  /* Mobile SVG */
}
<svg
  className='w-full h-full block sm:hidden'
  preserveAspectRatio='none'
  viewBox='0 0 1000 1000'
>
  {/* Top horizontal line */}
  <line
    x1='100'
    y1='24'
    x2='900'
    y2='24'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Bottom horizontal line */}
  <line
    x1='100'
    y1='976'
    x2='900'
    y2='976'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Left vertical line */}
  <line
    x1='24'
    y1='100'
    x2='24'
    y2='900'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Right vertical line */}
  <line
    x1='976'
    y1='100'
    x2='976'
    y2='900'
    className='stroke-black/100'
    strokeWidth='1'
  />
</svg>;

{
  /* Tablet SVG */
}
<svg
  className='w-full h-full hidden sm:block md:hidden'
  preserveAspectRatio='none'
  viewBox='0 0 1000 1000'
>
  {/* Top horizontal line */}
  <line
    x1='100'
    y1='32'
    x2='900'
    y2='32'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Bottom horizontal line */}
  <line
    x1='100'
    y1='968'
    x2='900'
    y2='968'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Left vertical line */}
  <line
    x1='32'
    y1='100'
    x2='32'
    y2='900'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Right vertical line */}
  <line
    x1='968'
    y1='100'
    x2='968'
    y2='900'
    className='stroke-black/100'
    strokeWidth='1'
  />
</svg>;

{
  /* Desktop SVG */
}
<svg
  className='w-full h-full hidden md:block'
  preserveAspectRatio='none'
  viewBox='0 0 1000 1000'
>
  {/* Top horizontal line */}
  <line
    x1='106'
    y1='46'
    x2='900'
    y2='48'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Bottom horizontal line */}
  <line
    x1='100'
    y1='952'
    x2='900'
    y2='952'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Left vertical line */}
  <line
    x1='48'
    y1='100'
    x2='48'
    y2='900'
    className='stroke-black/100'
    strokeWidth='1'
  />
  {/* Right vertical line */}
  <line
    x1='952'
    y1='100'
    x2='952'
    y2='900'
    className='stroke-black/100'
    strokeWidth='1'
  />
</svg>;
