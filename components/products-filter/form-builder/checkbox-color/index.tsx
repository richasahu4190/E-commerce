type CheckboxColorType = {
  type?: string;
  name: string;
  color: string;
  valueName: string;
  onChange?: (value: string) => void;
}

const CheckboxColor = ({ color, name, type = 'checkbox', onChange, valueName }: CheckboxColorType) => {
  const onSelect = (e: any) => {
    if (onChange) {
      onChange(e.target.getAttribute('data-name'));
    }
  }

  return (
    <label htmlFor={color + '-' + name} className="flex items-center space-x-2 cursor-pointer">
      <input 
        onChange={onSelect} 
        value={color} 
        data-name={valueName} 
        name={name} 
        type={type} 
        id={color + '-' + name} 
        className="hidden"
      />
      <span className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-300">
        <span 
          className="block w-full h-full rounded-full" 
          style={{ backgroundColor: color }}
        ></span>
        <span className="absolute inset-0 flex items-center justify-center">
          <input 
            type="checkbox" 
            className="opacity-0 w-0 h-0" 
            aria-hidden="true" 
          />
        </span>
      </span>
    </label>
  )
};

export default CheckboxColor;
