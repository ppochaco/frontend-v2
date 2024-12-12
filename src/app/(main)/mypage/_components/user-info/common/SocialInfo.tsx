import Image from 'next/image'

interface SocialInfoProps {
  label: string
  icon: string
}

const SocialInfo = ({ label, icon }: SocialInfoProps) => {
  return (
    <div className="flex cursor-pointer gap-3">
      <Image width={20} height={20} alt={`${label}-icon`} src={icon} />
      <span>{label}</span>
    </div>
  )
}

export default SocialInfo
