'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export const GalleryPreview = () => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Prewedding gallery images
  const galleryImages = [
    {
      id: 1,
      src: '/assets/images/prewedding/prewedding-1.JPEG',
      alt: 'Prewedding Photo 1',
      description: 'Beautiful moments captured',
    },
    {
      id: 2,
      src: '/assets/images/prewedding/prewedding-2.JPEG',
      alt: 'Prewedding Photo 2',
      description: 'Love in every frame',
    },
    {
      id: 3,
      src: '/assets/images/prewedding/prewedding-3.JPEG',
      alt: 'Prewedding Photo 3',
      description: 'Memories to treasure',
    },
    {
      id: 4,
      src: '/assets/images/prewedding/prewedding-4.JPEG',
      alt: 'Prewedding Photo 4',
      description: 'Perfect together',
    },
    {
      id: 5,
      src: '/assets/images/prewedding/prewedding-5.JPEG',
      alt: 'Prewedding Photo 5',
      description: 'Our journey begins',
    },
    {
      id: 6,
      src: '/assets/images/prewedding/prewedding-6.JPEG',
      alt: 'Prewedding Photo 6',
      description: 'Forever and always',
    },
  ];

  return (
    <div
      ref={ref}
      className='py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-4'>
            {t('gallery.journey-title')}
          </h2>
          <div className='w-24 h-px bg-rose-400 mx-auto mb-6'></div>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
            {t('gallery.journey-subtitle')}
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer'
            >
              {/* Actual prewedding image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-300'
                sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end'>
                <div className='p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                  <p className='text-xs sm:text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100'>
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className='absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text-center mt-12'
        >
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
              onClick={() =>
                window.open(
                  'https://photos.app.goo.gl/P8fZhoBpz4HYvFRF8',
                  '_blank'
                )
              }
              className='bg-white text-gray-700 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-rose-300 group text-sm sm:text-base'
            >
              <span className='flex items-center space-x-2'>
                <span>🏯 Kyoto Album</span>
                <span className='group-hover:translate-x-1 transition-transform duration-300'>
                  📸
                </span>
              </span>
            </button>

            <button
              onClick={() =>
                window.open(
                  'https://photos.app.goo.gl/A7Too6tkraNPTWGW8',
                  '_blank'
                )
              }
              className='bg-white text-gray-700 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-rose-300 group text-sm sm:text-base'
            >
              <span className='flex items-center space-x-2'>
                <span>🏰 Leeds Castle Album</span>
                <span className='group-hover:translate-x-1 transition-transform duration-300'>
                  📸
                </span>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
