interface StarIconProps {
  width?: number
  height?: number
}

export const StarIcon = ({ width = 36, height = 36 }: StarIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.1354 17.2972C25.9134 14.9963 21.0174 10.1003 18.7029 3.86475L17.9994 1.96875L17.2959 3.86475C14.9814 10.1003 10.0869 14.9963 3.86343 17.2972L1.96143 18.0007L3.86343 18.7028C10.0869 21.0037 14.9814 25.8997 17.2959 32.1367L17.9994 34.0312L18.7029 32.1367C21.0174 25.8997 25.9134 21.0037 32.1354 18.7028L34.0389 18.0007L32.1354 17.2972Z"
        fill="#1E48B2"
      />
    </svg>
  )
}
