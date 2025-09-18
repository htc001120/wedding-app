'use client';

import type { WeddingConfigType } from '@/types';
import { FrameCorner, DecorativeFrame } from '@/components';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import DateDisplay from './date-display';

interface HeroSectionProps {
  isLoaded: boolean;
  couple: WeddingConfigType;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({
  isLoaded,
  couple,
  onScrollToSection,
}: HeroSectionProps) => {
  const { t } = useTranslation('home');

  return (
    <div className='h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden'>
      {/* Frame Corners */}
      <FrameCorner position='top-left' />
      <FrameCorner position='top-right' />
      <FrameCorner position='bottom-left' />
      <FrameCorner position='bottom-right' />

      {/* Decorative Frame Lines */}
      <DecorativeFrame />

      {/* Background Decorations */}
      <div className='absolute inset-0'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col h-full px-6 pt-10 sm:pt-18 md:pt-20'>
        <div className='flex-1 flex items-center justify-center'>
          <div className='max-w-4xl mx-auto text-center'>
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className='mb-6 sm:mb-8'
            >
              <div className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2 font-medium'>
                Join us as we tie the knot!
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.4 }}
                className='relative'
              >
                <div
                  style={{ fontFamily: 'Ms Madi, cursive' }}
                  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-rose-500/90 mb-4'
                >
                  Yan & Ming
                </div>
                {/* Text shadow/glow effect */}
                <div
                  style={{ fontFamily: 'Ms Madi, cursive' }}
                  className='absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-rose-300/20 blur-sm mb-4 animate-pulse'
                >
                  Yan & Ming
                </div>
              </motion.div>

              <DateDisplay />
            </motion.div>

            {/* Church Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
              transition={{ duration: 1, delay: 0.8 }}
              className='relative w-full max-w-[600px] mx-auto mb-8'
            >
              <div className='relative'>
                <img
                  src='/assets/images/church2.png'
                  alt='Church'
                  className='w-full h-auto object-contain filter drop-shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay'></div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1.2 }}
              className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'
            >
              <motion.button
                onClick={() => onScrollToSection('rsvp')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
              >
                {t('navigation.rsvp')}
              </motion.button>
              <motion.button
                onClick={() => onScrollToSection('details')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white/80 backdrop-blur-sm text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer'
              >
                {t('hero.view-details')}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='flex justify-center pb-12 sm:pb-20'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='z-20'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='text-gray-600 text-center cursor-pointer'
              onClick={() => onScrollToSection('couple')}
            >
              <div className='text-xs mb-1 sm:mb-2'>
                {t('hero.scroll-down')}
              </div>
              <div className='text-lg sm:text-xl'>⬇️</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Remove the old absolute positioned scroll indicator */}
    </div>
  );
};
