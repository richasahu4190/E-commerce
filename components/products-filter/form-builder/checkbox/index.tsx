type CheckboxType = {
	type?: string;
	label: string;
	name: string;
	onChange?: () => void;
  }
  
  const Checkbox = ({ type = '', label, name, onChange }: CheckboxType) => (
	<label htmlFor={label + '-' + name} className={`flex items-center space-x-2 ${type === 'square' ? 'checkbox--square' : 'checkbox--default'}`}>
	  <input 
		name={name} 
		onChange={onChange} 
		type="checkbox" 
		id={label + '-' + name} 
		className="form-checkbox h-5 w-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" 
	  />
	  <span className="text-gray-700">{label}</span>
	</label>
  );
  
  export default Checkbox;
  