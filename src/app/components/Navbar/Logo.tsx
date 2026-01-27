import Link from 'next/link'

type LogoProps = {
  theme: 'dark' | 'light'
  size?: string
}

export const Logo = ({ theme, size = 'w-20 h-12' }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center`}>
      <img
        src={`${theme === 'dark' ? '/logos/logo-white.svg' : '/logos/logo-black.svg'}`}
        alt="logo"
        className={size}
      />
    </Link>
  )
}
