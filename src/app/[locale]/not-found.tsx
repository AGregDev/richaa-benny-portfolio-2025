import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const runtime = 'edge';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      {/* Real estate image or icon */}
      <div className="flex justify-center w-full mb-8">
        <Image
          width={5556}
          height={2249}
          src="/images/NotFound/404Error.svg"
          alt={t('imageAlt')}
          className="w-1/2 h-auto"
        />
      </div>

      {/* Title and message */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-600 mb-6">{t('message')}</p>

      {/* Back to home button */}
      <Link
        href="/"
        className="px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-700 transition-all"
      >
        {t('button')}
      </Link>
    </div>
  );
}
