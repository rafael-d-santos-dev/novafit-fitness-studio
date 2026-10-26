'use client'

import { ImageOff } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SafeImageProps {
  src: string
  alt: string
  sizes: string
  className?: string
}

/** Fill-mode image with a skeleton while loading and a neutral fallback if the file fails. */
export function SafeImage({ src, alt, sizes, className }: SafeImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  if (status === 'error') {
    return (
      <div
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        className="absolute inset-0 flex items-center justify-center bg-surface-raised text-muted-foreground"
      >
        <ImageOff aria-hidden="true" className="size-6" />
      </div>
    )
  }

  return (
    <>
      {status === 'loading' && <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-surface-raised" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={cn(className, status === 'loading' ? 'opacity-0' : 'opacity-100 transition-opacity duration-500')}
      />
    </>
  )
}
