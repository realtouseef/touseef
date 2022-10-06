type SizeType = {
  xs: string;
  sm: string;
  lg: string;
  xl: string;
};

type DeviceType = {
  xs: string;
  sm: string;
  lg: string;
  xl: string;
};

const size: SizeType = {
  xs: "480px",
  sm: "768px",
  lg: "1024px",
  xl: "1200px",
};

const device: DeviceType = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};

const breakpoint = { size, device };

export default breakpoint;
