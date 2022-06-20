import { Icon } from '@chakra-ui/react';

const Heart = (props) => {
  return (
    <Icon viewBox="0 0 21 17" {...props}>
      <path
        fill={props.color ? props.color : 'white'}
        d="M18.83 1.49C17.903.583 16.623.131 14.988.131c-.453 0-.914.078-1.385.235-.47.157-.909.369-1.313.635-.406.266-.754.516-1.046.75-.292.233-.57.481-.832.744-.263-.263-.54-.51-.832-.744a14.05 14.05 0 00-1.045-.75A5.604 5.604 0 007.22.367 4.367 4.367 0 005.836.132c-1.635 0-2.915.452-3.842 1.357S.604 3.65.604 5.255c0 .489.085.992.257 1.51.171.519.367.96.586 1.325.218.365.467.72.744 1.067.277.347.48.586.607.717.128.131.229.226.302.285l6.83 6.59a.655.655 0 00.482.197c.19 0 .35-.066.482-.197l6.82-6.568c1.671-1.671 2.507-3.313 2.507-4.926 0-1.606-.464-2.861-1.39-3.766zm-2.069 7.662l-6.349 6.12-6.36-6.131C2.687 7.776 2.005 6.48 2.005 5.255c0-.591.078-1.113.235-1.566.157-.452.358-.812.602-1.078.245-.266.542-.483.892-.651.351-.168.694-.281 1.03-.34a6.27 6.27 0 011.072-.087c.38 0 .789.093 1.226.279.438.186.841.42 1.21.7.369.282.684.544.947.789.263.244.482.469.657.673.131.16.31.24.536.24.226 0 .405-.08.537-.24.175-.204.394-.429.656-.673.263-.245.579-.507.947-.789.369-.28.772-.514 1.21-.7.438-.186.847-.28 1.226-.28.38 0 .737.03 1.073.088.336.059.679.172 1.029.34.35.168.648.385.892.65.245.267.445.627.602 1.08.157.452.235.974.235 1.565 0 1.226-.685 2.525-2.058 3.897z"
      />
    </Icon>
  );
};

export default Heart;
