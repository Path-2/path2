export type InputProps = {
    icon: string;
    option?: { text: string; action: () => void };
    type: string;
    placeholder: string;
    disabled?: boolean
    onChange: (newValue: any) => void
  };