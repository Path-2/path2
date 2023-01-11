export type InputProps = {
  icon: string;
  option?: { text: string; action: () => void };
  type: string;
  placeholder: string;
  disabled?: boolean;
  style?: { backgroundColor?: string; color?: string };
  onChange: (newValue: any) => void;
};

export type Route = {
  start: Stop;
  end: Stop;
  cost: { min: number; average?: number; max: number };
  time: { min: number; average?: number; max?: number };
};

export type Stop = {
  name: string;
  coordinates: { lat: number; lon: number };
};
